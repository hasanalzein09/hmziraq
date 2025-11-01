
// نظام قوالب المحتوى الديناميكي
// Dynamic Content Template System

export type ContentTemplate = {
  [serviceKey: string]: {
    [businessKey: string]: {
      introduction: (serviceName: string, businessName: string, cityName: string) => { ar: string; en: string };
      benefits: { title: { ar: string; en: string }; description: { ar: string; en: string } }[];
      features: { title: { ar: string; en: string }; description: { ar: string; en: string } }[];
      faqs: { question: { ar: string; en: string }; answer: { ar: string; en: string } }[];
    };
  };
};

export const CONTENT_TEMPLATES: ContentTemplate = {
  // قالب لخدمة "بوت واتساب"
  'whatsapp-bot': {
    'restaurants': {
      introduction: (serviceName, businessName, cityName) => ({
        ar: `هل تملك ${businessName} في ${cityName}؟ تخيل استقبال طلبات عملائك بشكل آلي ومنظم عبر واتساب، دون الحاجة لموظف إضافي. **نطور لك** ${serviceName} مخصص لـ ${businessName} في ${cityName} لزيادة مبيعاتك وتحسين تجربة عملائك بتقنيات حديثة.`,
        en: `Do you own a ${businessName} in ${cityName}? Imagine receiving customer orders automatically and organized via WhatsApp, without needing extra staff. **We develop** a custom ${serviceName} for ${businessName} in ${cityName} to increase your sales and improve customer experience with modern technologies.`
      }),
      benefits: [
        {
          title: { ar: 'زيادة المبيعات 40%', en: 'Increase Sales by 40%' },
          description: { ar: 'استقبل الطلبات 24/7 دون توقف. عملاؤك يمكنهم الطلب في أي وقت، مما يزيد من فرص البيع.', en: 'Receive orders 24/7 without interruption. Your customers can order anytime, increasing sales opportunities.' }
        },
        {
          title: { ar: 'تقليل الأخطاء البشرية', en: 'Reduce Human Error' },
          description: { ar: 'الطلبات الآلية تضمن دقة التفاصيل، مما يقلل من أخطاء تسجيل الطلبات اليدوية.', en: 'Automated orders ensure detail accuracy, reducing manual order entry errors.' }
        },
        {
          title: { ar: 'تحسين تجربة العميل', en: 'Improve Customer Experience' },
          description: { ar: 'رد فوري، قائمة طعام تفاعلية، وتتبع سهل للطلب. تجربة عصرية يحبها عملاؤك.', en: 'Instant responses, interactive menu, and easy order tracking. A modern experience your customers will love.' }
        }
      ],
      features: [
        {
          title: { ar: 'قائمة طعام رقمية', en: 'Digital Menu' },
          description: { ar: 'عرض صور وأسعار ووصف لكل طبق، مع إمكانية التحديث الفوري.', en: 'Display images, prices, and descriptions for each dish, with instant update capability.' }
        },
        {
          title: { ar: 'استقبال الطلبات والدفع', en: 'Order & Payment Reception' },
          description: { ar: 'نظام متكامل لاستقبال الطلبات وتأكيدها، مع خيارات دفع إلكتروني متنوعة.', en: 'An integrated system to receive and confirm orders, with various electronic payment options.' }
        },
        {
          title: { ar: 'حملات تسويقية', en: 'Marketing Campaigns' },
          description: { ar: 'أرسل عروضًا خاصة وقوائم طعام جديدة مباشرة إلى هواتف عملائك عبر واتساب.', en: 'Send special offers and new menus directly to your customers\' phones via WhatsApp.' }
        }
      ],
      faqs: [
        {
          question: { ar: 'هل أحتاج إلى مهارات تقنية؟', en: 'Do I need technical skills?' },
          answer: { ar: 'لا، النظام سهل الاستخدام. نقوم نحن بكل الإعدادات والتدريب اللازم.', en: 'No, the system is user-friendly. We handle all the setup and necessary training.' }
        },
        {
          question: { ar: 'هل يتكامل مع نظام الكاشير الحالي؟', en: 'Does it integrate with my current POS system?' },
          answer: { ar: 'نعم، يمكننا ربط البوت مع معظم أنظمة نقاط البيع (POS) الحديثة لتسهيل إدارة الطلبات.', en: 'Yes, we can connect the bot with most modern POS systems to facilitate order management.' }
        }
      ]
    },
    'default': {
        introduction: (serviceName, businessName, cityName) => ({
            ar: `أطلق العنان لقوة الأتمتة في ${businessName} الخاص بك في ${cityName} مع ${serviceName}. **نبرمج لك** حلاً تقنياً متكاملاً للتواصل مع عملائك بشكل فعال، أتمتة المهام المتكررة، وتحسين كفاءة عملك باستخدام أحدث تقنيات الذكاء الاصطناعي والبرمجة.`,
            en: `Unleash the power of automation in your ${businessName} in ${cityName} with a ${serviceName}. **We program** a complete technical solution to communicate effectively with your customers, automate repetitive tasks, and improve your business efficiency using the latest AI and programming technologies.`
        }),
        benefits: [
            {
                title: { ar: 'تواصل فوري 24/7', en: '24/7 Instant Communication' },
                description: { ar: 'كن متاحاً لعملائك في جميع الأوقات. أجب عن استفساراتهم وقدم الدعم حتى خارج أوقات الدوام الرسمي.', en: 'Be available to your customers at all times. Answer their inquiries and provide support even outside of official working hours.' }
            },
            {
                title: { ar: 'توفير في التكاليف', en: 'Cost Savings' },
                description: { ar: 'قلل من الحاجة إلى موظفي خدمة العملاء للرد على الأسئلة المتكررة. دع البوت يقوم بالعمل.', en: 'Reduce the need for customer service staff to answer frequently asked questions. Let the bot do the work.' }
            }
        ],
        features: [
            {
                title: { ar: 'ردود آلية ذكية', en: 'Smart Automated Responses' },
                description: { ar: 'برمجة ردود مخصصة للأسئلة الأكثر شيوعاً لتوفير معلومات دقيقة وفورية.', en: 'Program custom responses to the most common questions to provide accurate and instant information.' }
            },
            {
                title: { ar: 'جمع بيانات العملاء', en: 'Customer Data Collection' },
                description: { ar: 'احصل على معلومات قيمة من عملائك مثل الاسم ورقم الهاتف والبريد الإلكتروني لاستخدامها في حملاتك التسويقية.', en: 'Get valuable information from your customers like name, phone number, and email to use in your marketing campaigns.' }
            }
        ],
        faqs: [
            {
                question: { ar: 'كم يستغرق إعداد البوت؟', en: 'How long does it take to set up the bot?' },
                answer: { ar: 'عادةً ما يتم إعداد البوت الأساسي خلال 3-5 أيام عمل، ويعتمد ذلك على مدى تعقيد المتطلبات.', en: 'A basic bot is usually set up within 3-5 business days, depending on the complexity of the requirements.' }
            }
        ]
    }
  },

  // قالب لخدمة "تطوير Next.js"
  'nextjs-solutions': {
    'software-companies': {
      introduction: (serviceName, businessName, cityName) => ({
        ar: `عزز قدرات ${businessName} في ${cityName} التقنية مع ${serviceName}. **نبني لك** تطبيقات ويب فائقة السرعة والأداء وقابلة للتطوير باستخدام Next.js 15 وReact 19 لمساعدتك على بناء منتجات برمجية مبتكرة تخدم السوق العراقي والعالمي بأحدث التقنيات.`,
        en: `Boost your ${businessName}\'s technical capabilities in ${cityName} with ${serviceName}. **We build** ultra-fast, high-performance, and scalable web applications using Next.js 15 and React 19 to help you build innovative software products for the Iraqi and global markets with the latest technologies.`
      }),
      benefits: [
        {
          title: { ar: 'أداء لا يضاهى', en: 'Unmatched Performance' },
          description: { ar: 'استفد من Server-Side Rendering (SSR) و Static Site Generation (SSG) لتقديم أسرع تجربة مستخدم ممكنة.', en: 'Leverage Server-Side Rendering (SSR) and Static Site Generation (SSG) to deliver the fastest possible user experience.' }
        },
        {
          title: { ar: 'SEO متفوق', en: 'Superior SEO' },
          description: { ar: 'بنية Next.js الصديقة لمحركات البحث تضمن أرشفة سريعة وظهوراً قوياً في نتائج البحث، مما يجذب المزيد من العملاء.', en: 'Next.js\'s SEO-friendly architecture ensures fast indexing and strong visibility in search results, attracting more clients.' }
        },
        {
          title: { ar: 'قابلية تطوير هائلة', en: 'Massive Scalability' },
          description: { ar: 'ابنِ تطبيقات قادرة على النمو والتعامل مع ملايين المستخدمين دون التأثير على الأداء، بفضل بنية Vercel التحتية.', en: 'Build applications that can grow and handle millions of users without impacting performance, thanks to Vercel\'s infrastructure.' }
        }
      ],
      features: [
        {
          title: { ar: 'بناء واجهات أمامية (Frontend) تفاعلية', en: 'Interactive Frontend Development' },
          description: { ar: 'نستخدم React و Next.js لبناء واجهات مستخدم غنية وسريعة الاستجابة.', en: 'We use React and Next.js to build rich and responsive user interfaces.' }
        },
        {
          title: { ar: 'تطوير واجهات خلفية (Backend) قوية', en: 'Robust Backend Development' },
          description: { ar: 'إنشاء APIs قوية وآمنة باستخدام Next.js API Routes للتكامل مع قواعد البيانات والخدمات الأخرى.', en: 'Create powerful and secure APIs using Next.js API Routes for integration with databases and other services.' }
        },
        {
          title: { ar: 'نشر وتوزيع عالمي (Deployment)', en: 'Global Deployment & Distribution' },
          description: { ar: 'نشر تطبيقاتك على شبكة Vercel العالمية لضمان وصول سريع وآمن للمستخدمين في كل مكان.', en: 'Deploy your applications on the Vercel global network to ensure fast and secure access for users everywhere.' }
        }
      ],
      faqs: [
        {
          question: { ar: 'لماذا أختار Next.js بدلاً من React فقط؟', en: 'Why choose Next.js over just React?' },
          answer: { ar: 'Next.js يضيف ميزات حيوية فوق React مثل SSR و SSG و API Routes، مما يحسن الأداء والـ SEO بشكل كبير.', en: 'Next.js adds vital features on top of React like SSR, SSG, and API Routes, which significantly improves performance and SEO.' }
        },
        {
          question: { ar: 'هل يمكنكم التعامل مع مشاريع ضخمة؟', en: 'Can you handle large-scale projects?' },
          answer: { ar: 'بالتأكيد. فريقنا متخصص في بناء التطبيقات المعقدة والقابلة للتطوير لمواكبة نمو أعمالك.', en: 'Absolutely. Our team specializes in building complex and scalable applications to keep pace with your business growth.' }
        }
      ]
    },
    'default': {
      introduction: (serviceName, businessName, cityName) => ({
        ar: `انقل ${businessName} في ${cityName} إلى المستقبل مع ${serviceName}. **نطور لك** مواقع وتطبيقات ويب فائقة السرعة، آمنة، وصديقة لمحركات البحث باستخدام Next.js وTypeScript وأحدث تقنيات Cloud لتهيمن على السوق الرقمي في العراق.`,
        en: `Bring your ${businessName} in ${cityName} into the future with ${serviceName}. **We develop** ultra-fast, secure, and SEO-friendly websites and web applications using Next.js, TypeScript, and the latest Cloud technologies to dominate the digital market in Iraq.`
      }),
      benefits: [
        {
          title: { ar: 'سرعة تحميل فائقة', en: 'Blazing Fast Loading Speed' },
          description: { ar: 'كل ثانية تهم. مواقعنا المبنية بـ Next.js تضمن بقاء الزوار وتفاعلهم بفضل سرعتها.', en: 'Every second counts. Our Next.js sites ensure visitor retention and engagement thanks to their speed.' }
        },
        {
          title: { ar: 'أمان عالي المستوى', en: 'High-Level Security' },
          description: { ar: 'نطبق أفضل الممارسات الأمنية لحماية موقعك وبيانات عملائك من التهديدات.', en: 'We implement best security practices to protect your site and customer data from threats.' }
        },
        {
          title: { ar: 'تجربة مستخدم لا مثيل لها', en: 'Unparalleled User Experience' },
          description: { ar: 'تصاميم عصرية وتفاعلات سلسة تعمل بشكل مثالي على جميع الأجهزة، من الموبايل إلى الحاسوب.', en: 'Modern designs and smooth interactions that work perfectly on all devices, from mobile to desktop.' }
        }
      ],
      features: [
        {
          title: { ar: 'توليد الصفحات الثابتة (SSG)', en: 'Static Site Generation (SSG)' },
          description: { ar: 'للمواقع التي لا يتغير محتواها كثيراً، مما يوفر أداءً وأماناً أقصى.', en: 'For sites with content that doesn\'t change often, providing maximum performance and security.' }
        },
        {
          title: { ar: 'التصيير من جانب الخادم (SSR)', en: 'Server-Side Rendering (SSR)' },
          description: { ar: 'للمواقع الديناميكية التي تحتاج إلى محتوى محدث باستمرار وظهور مثالي في محركات البحث.', en: 'For dynamic sites that need constantly updated content and perfect SEO visibility.' }
        },
        {
          title: { ar: 'تجديد ثابت تزايدي (ISR)', en: 'Incremental Static Regeneration (ISR)' },
          description: { ar: 'أفضل ما في العالمين: سرعة المواقع الثابتة مع القدرة على تحديث المحتوى في الخلفية.', en: 'The best of both worlds: the speed of static sites with the ability to update content in the background.' }
        }
      ],
      faqs: [
        {
          question: { ar: 'كم تكلفة تطوير موقع بـ Next.js؟', en: 'How much does it cost to develop a site with Next.js?' },
          answer: { ar: 'تعتمد التكلفة على حجم وتعقيد المشروع. نقدم عروض أسعار تنافسية ومخصصة لاحتياجاتك. اتصل بنا للحصول على عرض مجاني.', en: 'The cost depends on the size and complexity of the project. We offer competitive and customized quotes for your needs. Contact us for a free quote.' }
        },
        {
          question: { ar: 'هل تقدمون خدمات الصيانة والدعم؟', en: 'Do you offer maintenance and support services?' },
          answer: { ar: 'نعم، نقدم باقات صيانة ودعم مستمرة لضمان عمل موقعك بكفاءة وأمان دائمين.', en: 'Yes, we offer ongoing maintenance and support packages to ensure your site always runs efficiently and securely.' }
        }
      ]
    }
  },

  // قالب لخدمة "تحسين محركات البحث"
  'seo-services': {
    'clothing-stores': {
      introduction: (serviceName, businessName, cityName) => ({
        ar: `اجعل ${businessName} في ${cityName} يظهر أولاً في Google! **نطبق** استراتيجيات ${serviceName} متقدمة مخصصة للمتاجر الإلكترونية باستخدام Technical SEO و Schema Markup و Core Web Vitals لنجذب لك العملاء الباحثين عن منتجاتك ونحولهم إلى مشترين.`,
        en: `Make your ${businessName} in ${cityName} appear first on Google! **We implement** advanced ${serviceName} strategies tailored for e-commerce stores using Technical SEO, Schema Markup, and Core Web Vitals to attract customers searching for your products and convert them into buyers.`
      }),
      benefits: [
        {
          title: { ar: 'زيادة الزوار المستهدفين', en: 'Increase Targeted Traffic' },
          description: { ar: 'نستهدف الكلمات المفتاحية التي يبحث عنها عملاؤك المحتملون في العراق لنجلب لك زواراً مهتمين بالشراء.', en: 'We target the keywords your potential customers in Iraq are searching for to bring you visitors interested in buying.' }
        },
        {
          title: { ar: 'تحسين معدل التحويل', en: 'Improve Conversion Rate' },
          description: { ar: 'صفحات منتجات محسّنة وصور عالية الجودة وتجربة مستخدم سلسة تعني مبيعات أكثر.', en: 'Optimized product pages, high-quality images, and a smooth user experience mean more sales.' }
        },
        {
          title: { ar: 'بناء علامة تجارية قوية', en: 'Build a Strong Brand' },
          description: { ar: 'الظهور في النتائج الأولى يبني الثقة والمصداقية لعلامتك التجارية في سوق الأزياء العراقي.', en: 'Appearing in the top results builds trust and credibility for your brand in the Iraqi fashion market.' }
        }
      ],
      features: [
        {
          title: { ar: 'SEO للمنتجات (Product SEO)', en: 'Product SEO' },
          description: { ar: 'تحسين عناوين ووصف وصور كل منتج ليظهر في بحث Google للصور والتسوق.', en: 'Optimize the titles, descriptions, and images of each product to appear in Google Image and Shopping search.' }
        },
        {
          title: { ar: 'بناء روابط خلفية (Backlinks)', en: 'Backlink Building' },
          description: { ar: 'الحصول على روابط من مدونات الموضة والمؤثرين العراقيين لزيادة سلطة متجرك.', en: 'Acquiring links from Iraqi fashion blogs and influencers to increase your store\'s authority.' }
        },
        {
          title: { ar: 'تحسين سرعة الموقع (Speed Optimization)', en: 'Site Speed Optimization' },
          description: { ar: 'موقع أسرع يعني تجربة تسوق أفضل وتصنيف أعلى في Google.', en: 'A faster site means a better shopping experience and a higher ranking on Google.' }
        }
      ],
      faqs: [
        {
          question: { ar: 'متى أرى نتائج الـ SEO؟', en: 'When will I see SEO results?' },
          answer: { ar: 'الـ SEO استثمار طويل الأمد. يمكن رؤية تحسنات أولية خلال 3-4 أشهر، ونتائج قوية خلال 6-12 شهرًا.', en: 'SEO is a long-term investment. Initial improvements can be seen within 3-4 months, and strong results within 6-12 months.' }
        },
        {
          question: { ar: 'هل تضمنون النتيجة الأولى؟', en: 'Do you guarantee the first result?' },
          answer: { ar: 'لا يمكن لأي خبير SEO ضمان نتيجة معينة، ولكننا نضمن تطبيق أفضل الممارسات التي أثبتت فعاليتها لتحقيق أفضل النتائج الممكنة.', en: 'No SEO expert can guarantee a specific result, but we guarantee to apply the best practices that have proven effective to achieve the best possible results.' }
        }
      ]
    },
    'dental-clinics': {
      introduction: (serviceName, businessName, cityName) => ({
        ar: `كن الخيار الأول للمرضى الباحثين عن ${businessName} في ${cityName}. **نطبق** استراتيجيات ${serviceName} المحلية المتقدمة مع تحسين Google Business Profile و Local Citations و Schema Markup الطبي لضمان ظهور عيادتك في خرائط Google والبحث المحلي، مما يجلب لك حجوزات حقيقية.`,
        en: `Be the first choice for patients searching for a ${businessName} in ${cityName}. **We implement** advanced local ${serviceName} strategies with Google Business Profile optimization, Local Citations, and Medical Schema Markup to ensure your clinic appears on Google Maps and local search, bringing you real bookings.`
      }),
      benefits: [
        {
          title: { ar: 'جذب مرضى من منطقتك', en: 'Attract Patients from Your Area' },
          description: { ar: 'نهيمن على نتائج البحث المحلية لكلمات مثل "طبيب أسنان قريب مني" و "عيادة أسنان في ${cityName}".', en: 'We dominate local search results for keywords like "dentist near me" and "dental clinic in ${cityName}".' }
        },
        {
          title: { ar: 'زيادة الحجوزات الهاتفية', en: 'Increase Phone Bookings' },
          description: { ar: 'تحسين ملفك على Google Business Profile يجعل من السهل على المرضى الاتصال بك مباشرة من نتائج البحث.', en: 'Optimizing your Google Business Profile makes it easy for patients to call you directly from search results.' }
        },
        {
          title: { ar: 'بناء سمعة موثوقة', en: 'Build a Trusted Reputation' },
          description: { ar: 'إدارة التقييمات والمراجعات الإيجابية على Google تزيد من ثقة المرضى الجدد في عيادتك.', en: 'Managing positive ratings and reviews on Google increases new patients\' trust in your clinic.' }
        }
      ],
      features: [
        {
          title: { ar: 'تحسين Google Business Profile', en: 'Google Business Profile Optimization' },
          description: { ar: 'إكمال وتحسين ملفك بمعلومات دقيقة وصور عالية الجودة وساعات عمل محدثة.', en: 'Completing and optimizing your profile with accurate information, high-quality photos, and updated business hours.' }
        },
        {
          title: { ar: 'SEO للمحتوى الطبي', en: 'Medical Content SEO' },
          description: { ar: 'كتابة مقالات عن خدماتك (مثل تبييض الأسنان، التقويم) تجيب على أسئلة المرضى وتجذبهم.', en: 'Writing articles about your services (like teeth whitening, orthodontics) that answer patient questions and attract them.' }
        },
        {
          title: { ar: 'بناء استشهادات محلية (Citations)', en: 'Local Citation Building' },
          description: { ar: 'تسجيل عيادتك في الدلائل الطبية والمحلية العراقية لتعزيز ظهورك المحلي.', en: 'Listing your clinic in Iraqi medical and local directories to boost your local presence.' }
        }
      ],
      faqs: [
        {
          question: { ar: 'هل الـ SEO مهم لعيادة أسنان؟', en: 'Is SEO important for a dental clinic?' },
          answer: { ar: 'نعم، بشكل حيوي. معظم المرضى اليوم يبحثون عن أطباء الأسنان عبر الإنترنت قبل حجز موعد.', en: 'Yes, vitally. Most patients today search for dentists online before booking an appointment.' }
        },
        {
          question: { ar: 'ما الفرق بين الـ SEO العادي والمحلي؟', en: 'What is the difference between regular and local SEO?' },
          answer: { ar: 'الـ SEO المحلي يركز على جذب العملاء من منطقة جغرافية محددة (مثل ${cityName})، وهو مثالي للخدمات التي تتطلب حضورًا فعليًا.', en: 'Local SEO focuses on attracting customers from a specific geographical area (like ${cityName}), which is ideal for services requiring a physical presence.' }
        }
      ]
    },
    'default': {
      introduction: (serviceName, businessName, cityName) => ({
        ar: `هل تريد أن تكون رقم واحد في Google؟ **نصمم ونطبق** استراتيجية ${serviceName} متكاملة لـ ${businessName} في ${cityName} باستخدام أحدث تقنيات On-Page SEO و Technical SEO و Link Building و Content Optimization لزيادة ظهورك، جذب المزيد من الزوار، وتحقيق أهدافك التجارية.`,
        en: `Want to be number one on Google? **We design and implement** a comprehensive ${serviceName} strategy for your ${businessName} in ${cityName} using the latest On-Page SEO, Technical SEO, Link Building, and Content Optimization techniques to increase your visibility, attract more visitors, and achieve your business goals.`
      }),
      benefits: [
        {
          title: { ar: 'زيادة حركة المرور العضوية', en: 'Increase Organic Traffic' },
          description: { ar: 'احصل على زوار مجانيين ومستهدفين من محركات البحث يبحثون بنشاط عن خدماتك أو منتجاتك.', en: 'Get free, targeted visitors from search engines who are actively looking for your services or products.' }
        },
        {
          title: { ar: 'عائد استثمار مرتفع (ROI)', en: 'High Return on Investment (ROI)' },
          description: { ar: 'يعتبر الـ SEO أحد أفضل قنوات التسويق الرقمي من حيث العائد على الاستثمار على المدى الطويل.', en: 'SEO is one of the best digital marketing channels in terms of long-term return on investment.' }
        },
        {
          title: { ar: 'تعزيز المصداقية والثقة', en: 'Enhance Credibility and Trust' },
          description: { ar: 'المستخدمون يثقون في نتائج البحث العضوية أكثر من الإعلانات المدفوعة. الظهور في الصفحة الأولى يبني الثقة.', en: 'Users trust organic search results more than paid ads. Appearing on the first page builds trust.' }
        }
      ],
      features: [
        {
          title: { ar: 'بحث الكلمات المفتاحية', en: 'Keyword Research' },
          description: { ar: 'نحدد الكلمات والعبارات التي يستخدمها عملاؤك في العراق للعثور على أعمال مثل عملك.', en: 'We identify the keywords and phrases your customers in Iraq use to find businesses like yours.' }
        },
        {
          title: { ar: 'SEO تقني (Technical SEO)', en: 'Technical SEO' },
          description: { ar: 'نتأكد من أن موقعك مبني بشكل صحيح تقنياً ليكون سهل الفهم والأرشفة من قبل Google.', en: 'We ensure your site is technically sound and easy for Google to understand and crawl.' }
        },
        {
          title: { ar: 'كتابة محتوى متوافق مع SEO', en: 'SEO-Optimized Content Writing' },
          description: { ar: 'إنشاء محتوى قيم ومفيد يجيب على أسئلة جمهورك ويستهدف كلماتك المفتاحية.', en: 'Creating valuable and useful content that answers your audience\'s questions and targets your keywords.' }
        }
      ],
      faqs: [
        {
          question: { ar: 'هل يمكنني عمل الـ SEO بنفسي؟', en: 'Can I do SEO myself?' },
          answer: { ar: 'يمكن تعلم الأساسيات، لكن الـ SEO الاحترافي يتطلب خبرة وأدوات متخصصة ومواكبة مستمرة لتحديثات Google.', en: 'You can learn the basics, but professional SEO requires experience, specialized tools, and continuous keeping up with Google\'s updates.' }
        },
        {
          question: { ar: 'ما هي تكلفة خدماتكم؟', en: 'What is the cost of your services?' },
          answer: { ar: 'نقدم باقات متنوعة تبدأ من التحليل الأساسي إلى الحملات الشاملة. اتصل بنا لمناقشة احتياجاتك.', en: 'We offer various packages from basic analysis to comprehensive campaigns. Contact us to discuss your needs.' }
        }
      ]
    }
  }
};
