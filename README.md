# وب‌مانیا — ساختار جدید (تقسیم‌شده بر اساس بخش‌ها)

این پروژه از یک فایل بزرگ React (script.js ~۱۱۴KB) به یک ساختار **چندصفحه‌ای (MPA)** تبدیل شده. هر بخش سایت پوشه‌ی مستقل خودش رو داره با فایل‌های HTML، CSS و JS اختصاصی.

## ساختار پوشه‌ها

```
website/
├── index.html              ← ریدایرکت به home/
├── icon.png                ← (باید کنار فایل‌های مشترک قرار بگیره)
├── fonts.googleapis.css    ← (باید کپی بشه از فایل‌های اصلی)
├── tailwind.min.css        ← (باید کپی بشه از فایل‌های اصلی)
│
├── shared/                 ← فایل‌های مشترک بین همه صفحات
│   ├── base.css            ← متغیرها، اسکرول‌بار، تم
│   ├── intro.css           ← انیمیشن گلیچ + Warp
│   ├── tailwind-config.js  ← پیکربندی Tailwind
│   ├── translations.js     ← ترجمه‌های دو زبانه FA/EN
│   ├── components.js       ← Icon, SpotlightCard, IntroOverlay, CustomCursor, ParticleField
│   ├── navbar.js           ← منوی بالای صفحه + منوی موبایل + goToPage()
│   ├── footer.js           ← فوتر مینیمال
│   ├── support-widget.js   ← ویجت چت پشتیبانی شناور
│   └── layout.js           ← PageLayout و renderPage()
│
├── home/                   ← صفحه خانه
│   ├── index.html
│   ├── home.css
│   └── home.js             ← HomePage + CodeShowcase + SpeedTest
│
├── about/                  ← درباره ما
│   ├── index.html
│   ├── about.css
│   └── about.js
│
├── portfolio/              ← نمونه کارها
│   ├── index.html
│   ├── portfolio.css
│   └── portfolio.js
│
├── templates/              ← قالب‌ها (شامل پیش‌نمایش)
│   ├── index.html
│   ├── templates.css
│   └── templates.js        ← TemplatesPage + TemplatePreview
│
├── services/               ← خدمات
│   ├── index.html
│   ├── services.css
│   └── services.js
│
│
├── contact/                ← فرم تماس و همکاری
│   ├── index.html
│   ├── contact.css
│   └── contact.js
│
└── admin/                  ← پنل ادمین (جدا از سایت اصلی)
    ├── index.html
    ├── admin.css
    ├── admin-icon.js       ← Icon + API_URL
    ├── admin-dashboard.js  ← Dashboard + StatCard
    ├── admin-crud.js       ← CrudTable (مدیریت عمومی)
    ├── admin-lists.js      ← MessagesList + CollaborationsList
    └── admin-app.js        ← AdminApp (لاگین + Layout)
```

## تغییرات اصلی نسبت به نسخه قبلی

1. **از SPA به MPA تبدیل شد**: قبلاً همه چیز در یک `index.html` با Router داخلی رندر می‌شد. حالا هر صفحه فایل HTML واقعی خودش رو داره و ناوبری با `window.location.href` بین این فایل‌ها انجام می‌شه (تابع `goToPage()` در `shared/navbar.js`).

2. **حالت تم و زبان**: چون بین صفحات منتقل می‌شیم، انتخاب کاربر برای زبان (fa/en) و تم (dark/light) در `localStorage` ذخیره می‌شه (با کلیدهای `wm_lang` و `wm_theme`).

3. **انیمیشن ورودی (Intro)**: فقط در اولین بار بازدید یک سشن نمایش داده می‌شه (با `sessionStorage.wm_intro_seen`) تا بین صفحات تکرار نشه.

4. **فایل‌های مشترک** در `shared/` قرار دارن و توسط همه صفحات لود می‌شن.

## فایل‌های مورد نیاز که باید کنار `website/` کپی بشن

این فایل‌ها از پروژه اصلی نیاز هستند و باید در محل صحیح قرار بگیرند:

- `website/icon.png` — لوگوی سایت (در navbar و favicon استفاده می‌شه)
- `website/fonts.googleapis.css` — فایل فونت (Vazirmatn/Inter)
- `website/tailwind.min.css` — اسکریپت Tailwind Play CDN (با وجود پسوند css، در واقع JS هست)

## نحوه اجرا

به دلیل استفاده از `type="text/babel"`، نیاز به سرور HTTP محلی هست (نه `file://`):

```bash
cd website
python3 -m http.server 8000
# سپس باز کنید: http://localhost:8000
```

## نکات قابل توجه

- **عملکرد**: چون Babel در مرورگر اجرا می‌شه و فایل‌های `text/babel` با هر صفحه دوباره کامپایل می‌شن، برای محیط Production توصیه می‌شه با Vite یا esbuild از قبل کامپایل کنید.
- **API بک‌اند**: فایل `admin/api.php` به MySQL وصل است. اسکریپت ساخت دیتابیس در `admin/database.sql` و نصب سریع در `admin/install.php` قرار دارد. ورود پیش‌فرض پنل `admin / admin12345` است؛ قبل از آپلود، رمز را در `admin/config.php` تغییر دهید.
- **مسیرهای نسبی**: همه فایل‌های مشترک با `../shared/` و دارایی‌ها با `../icon.png` ارجاع داده شدند، چون هر صفحه در زیرپوشه‌ی خودش هست.
