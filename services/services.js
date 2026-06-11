/* ===== صفحه خدمات ===== */
const ServicesPage = ({ t }) => {
    const services = [
        {
            title: "طراحی سایت اختصاصی",
            icon: "code",
            desc: "یه سایت که دقیقاً مال شما باشه. نه یه قالب آماده که هزار تا جای دیگه هم دیده بشه. از صفر و با دقت طراحی می‌شه.",
            features: [
                "نمایش عالی روی موبایل، تبلت و کامپیوتر",
                "سرعت بالا، طوری که مشتری معطل نشه",
                "ساختار استاندارد و مرتب برای گوگل"
            ]
        },
        {
            title: "دستیار هوش مصنوعی",
            icon: "bot",
            desc: "یه دستیار هوشمند که روی سایتتون نصب می‌شه و ۲۴ ساعته به سوال‌های مشتری‌هاتون جواب می‌ده. بدون نیاز به نیروی انسانی اضافه.",
            features: [
                "آموزش با اطلاعات و مستندات کسب‌وکار شما",
                "پاسخ‌گویی خودکار و هوشمند به مشتری‌ها",
                "کمک به فروش بیشتر و ارتباط بهتر"
            ]
        },
        {
            title: "بهینه‌سازی برای گوگل",
            icon: "trending-up",
            desc: "سایت شما از همون اول جوری ساخته می‌شه که گوگل دوستش داشته باشه. این یعنی شانس بیشتر برای دیده شدن در جستجوها.",
            features: [
                "ساختار مرتب و استاندارد کدها",
                "تنظیمات فنی لازم برای موتورهای جستجو",
                "بهبود رتبه صفحات مهم سایت شما"
            ]
        },
        {
            title: "خودکارسازی فرآیندها",
            icon: "zap",
            desc: "کارهای تکراری که هر روز وقتتون رو می‌گیره؟ ما سیستماتی می‌سازیم که خودکار انجامشون بده. از ثبت سفارش تا پاسخ به مشتری.",
            features: [
                "اتصال هوش مصنوعی به سیستم‌های داخلی شما",
                "طراحی فرآیندهای خودکار برای کارهای روزمره",
                "کاهش هزینه‌ها و صرفه‌جویی در زمان"
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto pt-32 pb-20 px-4">
            {/* هدر صفحه خدمات */}
            <div className="text-center mb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold">OUR SERVICES</motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-primary mb-6">خدمات ما</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-secondary max-w-2xl mx-auto">
                    از طراحی سایت تا هوش مصنوعی، هر چی برای حضور آنلاین نیاز دارید
                </motion.p>
            </div>

            {/* گرید خدمات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {services.map((service, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                        <SpotlightCard className="h-full p-8 md:p-10 hover:border-accent/30 transition-colors group">
                            <div className="flex flex-col h-full">
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/10 border border-accent/20">
                                    <Icon name={service.icon} size={40} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                                <p className="text-secondary text-lg leading-relaxed mb-8 flex-1">{service.desc}</p>
                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="service-feature-pill flex items-center gap-3 text-primary/80 p-3 rounded-xl bg-surface/30 border border-white/5">
                                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0"><Icon name="check" size={16} /></div>
                                            <span className="font-medium text-sm md:text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => goToPage('contact')} className="w-full py-4 rounded-xl bg-surface border border-border text-primary font-bold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                    شروع پروژه <Icon name="arrow-left" className="group-hover/btn:-translate-x-1 transition-transform" size={18} />
                                </button>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

renderPage('services', ServicesPage);
