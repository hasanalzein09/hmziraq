#!/bin/bash
# Deploy script for Google Cloud VM

echo "🚀 Deploying hmziraq to Google Cloud VM..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="hmziraq"
PORT=3000

# Step 1: Install Node.js 20 (if not installed)
echo -e "${BLUE}📦 Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo "Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Step 2: Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm ci

# Step 3: Build with increased memory
echo -e "${BLUE}🔨 Building application with 8GB memory...${NC}"
NODE_OPTIONS="--max-old-space-size=8192" npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

# Step 4: Install PM2 (process manager)
echo -e "${BLUE}📦 Installing PM2...${NC}"
sudo npm install -g pm2

# Step 5: Stop previous instance
echo -e "${BLUE}🛑 Stopping previous instance...${NC}"
pm2 stop $APP_NAME || true
pm2 delete $APP_NAME || true

# Step 6: Start application
echo -e "${BLUE}🚀 Starting application...${NC}"
NODE_OPTIONS="--max-old-space-size=8192" pm2 start npm --name "$APP_NAME" -- start -- -p $PORT

# Step 7: Save PM2 configuration
pm2 save
pm2 startup

# Step 8: Setup Nginx (optional - for production)
echo -e "${BLUE}🌐 Setting up Nginx reverse proxy...${NC}"
if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    sudo apt-get update
    sudo apt-get install -y nginx
fi

# Create Nginx config
sudo tee /etc/nginx/sites-available/$APP_NAME > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo -e "${GREEN}✅ Deployment completed!${NC}"
echo -e "${GREEN}🌐 Application running on http://YOUR_VM_IP${NC}"
echo ""
echo "Useful commands:"
echo "  pm2 status          - Check application status"
echo "  pm2 logs $APP_NAME  - View logs"
echo "  pm2 restart $APP_NAME - Restart application"
echo "  pm2 stop $APP_NAME    - Stop application"
