/* ===== صفحه سیاست حریم خصوصی ===== */
const PrivacyPage = ({ t }) => {
    return (
        <div className="max-w-4xl mx-auto pt-32 pb-20 px-4">
            {/* هدر صفحه */}
            <div className="text-center mb-16">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold"
                >
                    <Icon name="shield-check" size={14} /> PRIVACY POLICY
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.1 }} 
                    className="text-4xl md:text-5xl font-black text-primary mb-4"
                >
                    سیاست حریم خصوصی و حفاظت از اطلاعات
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2 }} 
                    className="text-xs text-secondary font-mono"
                >
                    آخرین به‌روزرسانی: خرداد ۱۴۰۵
                </motion.p>
            </div>

            {/* کارت اصلی محتوای سند */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
                className="rounded-3xl bg-surface/30 backdrop-blur-md border border-white/5 p-6 md:p-10 space-y-10 text-secondary leading-relaxed text-justify"
            >
                {/* بخش اول: مقدمه */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
                        <Icon name="info" className="text-accent flex-shrink-0" size={20} />
                        <h2 className="text-lg md:text-xl font-bold">۱. مقدمه و تعهدات ما</h2>
                    </div>
                    <p className="text-sm md:text-base">
                        استودیو وب‌مانیا (Web Mania) به عنوان ارائه‌دهنده همزمان خدمات طراحی وب‌سایت‌های اختصاصی و دستیارهای هوش مصنوعی، حفاظت از داده‌های شخصی شما را یکی از ارکان اصلی تعهدات خود می‌داند. این سند به شما کمک می‌کند تا بدانید ما چه اطلاعاتی را جمع‌آوری می‌کنیم، چگونه از آن‌ها برای بهبود خدمات استفاده می‌کنیم و چه تدابیری برای حفظ امنیت آن‌ها اندیشیده‌ایم.
                    </p>
                </section>

                {/* بخش دوم: جمع‌آوری اطلاعات */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
                        <Icon name="database" className="text-accent flex-shrink-0" size={20} />
                        <h2 className="text-lg md:text-xl font-bold">۲. اطلاعاتی که جمع‌آوری می‌کنیم</h2>
                    </div>
                    <p className="text-sm md:text-base">
                        ما اطلاعات را به دو صورت عمومی و اختصاصی ثبت می‌کنیم:
                    </p>
                    <ul className="space-y-2 text-sm pr-4 list-disc">
                        <li>
                            <strong>اطلاعات تماسی و ارتباطی:</strong> هنگامی که از طریق فرم‌های وب‌سایت، ثبت سفارش یا چت با ما ارتباط برقرار می‌کنید، اطلاعاتی نظیر نام، شماره تماس و شرح درخواست شما ثبت خواهد شد.
                        </li>
                        <li>
                            <strong>ورودی‌های دستیار هوش مصنوعی:</strong> پیام‌ها و درخواست‌هایی که در بستر دستیارهای هوش مصنوعی پیاده‌سازی‌شده در وب‌سایت ما ثبت می‌شوند، صرفاً جهت پردازش و پاسخ‌دهی به درخواست همان لحظه بررسی می‌شوند و هیچ‌گونه داده حساسی بدون اجازه شما ثبت یا تحلیل نخواهد شد.
                        </li>
                        <li>
                            <strong>اطلاعات فنی و کوکی‌ها:</strong> آدرس IP، نوع مرورگر و صفحات بازدید شده جهت بهبود کارایی فنی سایت و تحلیل‌های آماری کلی بدون شناسایی هویت فردی جمع‌آوری می‌شوند.
                        </li>
                    </ul>
                </section>

                {/* بخش سوم: استفاده از اطلاعات */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
                        <Icon name="eye-off" className="text-accent flex-shrink-0" size={20} />
                        <h2 className="text-lg md:text-xl font-bold">۳. عدم اشتراک‌گذاری داده‌ها با اشخاص ثالث</h2>
                    </div>
                    <p className="text-sm md:text-base">
                        داده‌های شخصی شما تحت هیچ شرایطی فروخته، اجاره داده یا با شرکت‌ها و افراد شخص ثالث به اشتراک گذاشته نمی‌شوند؛ مگر اینکه این اقدام به دلیل درخواست صریح خود شما یا در راستای رعایت فرآیندهای قانونی و دستورات قضایی الزامی باشد.
                    </p>
                </section>

                {/* بخش چهارم: امنیت */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
                        <Icon name="lock" className="text-accent flex-shrink-0" size={20} />
                        <h2 className="text-lg md:text-xl font-bold">۴. امنیت فنی و رمزنگاری</h2>
                    </div>
                    <p className="text-sm md:text-base">
                        ما تمام تدابیر استاندارد صنعت وب را برای ایمن نگه داشتن اطلاعات شما به کار می‌بندیم:
                    </p>
                    <ul className="space-y-2 text-sm pr-4 list-disc">
                        <li>تمامی ارتباطات وب‌سایت تحت پروتکل امن SSL انتقال یافته و اطلاعات به صورت رمزنگاری‌شده جابجا می‌شوند.</li>
                        <li>دسترسی به پایگاه‌های داده صرفاً محدود به پرسنل کلیدی و تحت نظارت دقیق است.</li>
                        <li>دستیارهای هوش مصنوعی بر اساس پروتکل‌های امن و عدم استفاده از داده‌های کاربران برای آموزش مدل‌های عمومی طراحی شده‌اند.</li>
                    </ul>
                </section>

                {/* بخش پنجم: حقوق کاربران */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
                        <Icon name="key-round" className="text-accent flex-shrink-0" size={20} />
                        <h2 className="text-lg md:text-xl font-bold">۵. حقوق قانونی شما نسبت به داده‌ها</h2>
                    </div>
                    <p className="text-sm md:text-base">
                        شما این حق را دارید که در هر زمان تمایل داشتید، درخواست بازنگری، اصلاح یا حذف دائم تمامی اطلاعات ثبت‌شده خود در پایگاه‌های داده ما را از طریق راه‌های ارتباطی ارسال کنید. تیم فنی ما بلافاصله و حداکثر ظرف مدت ۴۸ ساعت کاری درخواست شما را بررسی و اجرا خواهد کرد.
                    </p>
                </section>

                {/* بخش ششم: تغییرات */}
                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
                        <Icon name="refresh-cw" className="text-accent flex-shrink-0" size={20} />
                        <h2 className="text-lg md:text-xl font-bold">۶. تغییرات در سند حریم خصوصی</h2>
                    </div>
                    <p className="text-sm md:text-base">
                        با گسترش خدمات استودیو وب‌مانیا یا به‌روزرسانی ابزارهای هوش مصنوعی، ممکن است تغییراتی در این سند اعمال شود. هرگونه تغییر در همین صفحه منتشر خواهد شد و ادامه استفاده شما از وب‌سایت به منزله پذیرش آخرین نسخه اصلاح‌شده است.
                    </p>
                </section>

                {/* بخش هفتم: تماس */}
                <section className="space-y-3 pt-4">
                    <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="space-y-1">
                            <h4 className="font-bold text-primary text-base">سوال یا ابهامی دارید؟</h4>
                            <p className="text-xs text-secondary">ما آماده پاسخ‌گویی به ابهامات شما در رابطه با امنیت و اطلاعات شخصی‌تان هستیم.</p>
                        </div>
                        <button 
                            onClick={() => goToPage('contact')} 
                            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center gap-2"
                        >
                            تماس با تیم فنی <Icon name="arrow-left" size={16} />
                        </button>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

renderPage('privacy', PrivacyPage);