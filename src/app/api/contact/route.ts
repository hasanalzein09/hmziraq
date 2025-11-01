import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceInterest, message, businessContext, cityContext, lang } = body;

    // Create transporter (you'll need to configure this with actual SMTP credentials)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailContent = `
      <div dir="${lang === 'ar' ? 'rtl' : 'ltr'}" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">${lang === 'ar' ? 'استفسار جديد من hmziraq' : 'New Inquiry from hmziraq'}</h1>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #667eea; margin-bottom: 20px;">${lang === 'ar' ? 'تفاصيل الاستفسار' : 'Inquiry Details'}</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">${lang === 'ar' ? 'الاسم' : 'Name'}</td>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">${lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</td>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">${lang === 'ar' ? 'الهاتف' : 'Phone'}</td>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            ${serviceInterest ? `
            <tr>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">${lang === 'ar' ? 'الخدمة المطلوبة' : 'Service Interest'}</td>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb;">${serviceInterest}</td>
            </tr>
            ` : ''}
            ${businessContext ? `
            <tr>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">${lang === 'ar' ? 'نوع العمل' : 'Business Type'}</td>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb;">${businessContext}</td>
            </tr>
            ` : ''}
            ${cityContext ? `
            <tr>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">${lang === 'ar' ? 'المدينة' : 'City'}</td>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb;">${cityContext}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">${lang === 'ar' ? 'الرسالة' : 'Message'}</td>
              <td style="padding: 10px; background: white; border: 1px solid #e5e7eb;">${message}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: white; border-left: 4px solid #667eea;">
            <p style="margin: 0; color: #6b7280;">${lang === 'ar' ? 'تم إرسال هذا الطلب من موقع hmziraq.services' : 'This inquiry was sent from hmziraq.services'}</p>
          </div>
        </div>
        
        <div style="padding: 20px; text-align: center; background: #1f2937; color: white;">
          <p style="margin: 0;">© 2024 hmziraq | ${lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</p>
        </div>
      </div>
    `;

    // Send to both email addresses
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: ['sales@hmziraq.services', 'hasanalzein2024@gmail.com'],
      subject: `${lang === 'ar' ? 'استفسار جديد من' : 'New Inquiry from'} ${name}`,
      html: emailContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email', error: String(error) },
      { status: 500 }
    );
  }
}
