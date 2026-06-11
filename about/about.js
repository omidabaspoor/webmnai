/* ===== صفحه درباره ما ===== */
const AboutPage = ({ t }) => {
    return (
        <div className="max-w-6xl mx-auto pt-32 pb-20 px-4">
            {/* بخش هدر صفحه */}
            <div className="text-center mb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold">ABOUT US</motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-primary mb-6">همراه شما در مسیر دیجیتال</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-accent font-bold leading-relaxed max-w-3xl mx-auto">
                    وب‌مانیا؛ تیمی کوچک ولی حرفه‌ای که عاشق ساختن چیزهای خوبه
                </motion.p>
            </div>

            {/* بخش معرفی */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-white/10 relative overflow-hidden"
            >
                <div className="absolute -left-16 -top-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-primary">طراحی وب و هوش مصنوعی، زیر یک سقف</h2>
                        <p className="text-secondary text-base md:text-lg leading-relaxed text-justify">
                            ما در وب‌مانیا دو تا کار اصلی انجام می‌دیم: یکی طراحی سایت‌های حرفه‌ای و اختصاصی برای کسب‌وکارهای مختلف، و یکی ساخت دستیارهای هوش مصنوعی که بتونن کارهایی مثل پاسخ به مشتری‌ها رو خودکار انجام بدن. این دو تا خدمت کنار هم باعث می‌شن سایت شما فقط یه صفحه قشنگ نباشه، بلکه یه ابزار واقعی برای رشد کسب‌وکارتون بشه.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex justify-center">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-accent/10 border border-accent/30 flex flex-col items-center justify-center text-accent gap-2">
                            <Icon name="cpu" size={48} className="animate-pulse" />
                            <span className="text-xs font-bold text-primary">Web + AI</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* داستان و ماموریت */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                    <h2 className="text-3xl font-black text-primary">داستان ما</h2>
                    <p className="text-lg text-secondary leading-relaxed text-justify">
                        همه‌چیز از یه علاقه ساده شروع شد: ساختن سایت‌هایی که واقعاً کار کنن. نه فقط قشنگ باشن، بلکه بتونن به کسب‌وکارها کمک کنن. ما دیدیم خیلی از شرکت‌ها مجبورن برای سایت رفتن پیش یه تیم، برای هوش مصنوعی پیش یه تیم دیگه، و برای پشتیبانی پیش یه تیم سوم. ما اومدیم همه اینا رو یه جا جمع کردیم.
                    </p>
                    <div className="p-6 rounded-2xl bg-surface/50 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                            <Icon name="sparkles" className="text-accent" size={24} />
                            <span className="font-bold text-primary">چه کارهایی انجام می‌دیم؟</span>
                        </div>
                        <ul className="space-y-3 text-secondary text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                <strong>طراحی سایت:</strong> سایت اختصاصی، سریع و خوشگل که رو هر دستگاهی عالی نمایش داده بشه.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                <strong>هوش مصنوعی:</strong> ساخت چت‌بات و دستیار هوشمند که ۲۴ ساعته پاسخگوی مشتری‌هاتون باشه.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                <strong>خودکارسازی:</strong> کارهای تکراری کسب‌وکارتون رو به سیستم می‌سپاریم تا شما وقت بیشتری داشته باشید.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                    <h2 className="text-3xl font-black text-primary">ماموریت ما</h2>
                    <p className="text-lg text-secondary leading-relaxed text-justify">
                        می‌خوایم مسیر ورود کسب‌وکارها به دنیای دیجیتال رو ساده و راحت کنیم. خیلی‌ها فکر می‌کنن داشتن یه سایت خوب سخته یا خیلی هزینه داره. ما اینجاییم که نشون بدیم اینطور نیست. یه تیم حرفه‌ای، یه گوش شنوا، و یه خروجی که واقعاً به دردتون بخوره.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { title: 'طراحی کاربرمحور', desc: 'سایتی که چشم‌نواز باشه و کار باهاش راحت' },
                            { title: 'فناوری هوشمند', desc: 'استفاده از هوش مصنوعی برای راحتی بیشتر' },
                            { title: 'سرعت و کیفیت', desc: 'سایت سریع و بدون باگ، از همون روز اول' },
                            { title: 'پشتیبانی واقعی', desc: 'بعد از تحویل هم کنارتون هستیم، قول می‌دیم' }
                        ].map((val, i) => (
                            <div key={i} className="about-value-card p-4 rounded-xl bg-surface/30 border border-white/5 hover:border-accent/30">
                                <h4 className="font-bold text-primary mb-1 text-sm md:text-base">{val.title}</h4>
                                <p className="text-xs text-secondary leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* بخش تیم */}
            <div className="mb-32">
                <h2 className="text-3xl font-black text-primary mb-12 text-center">تیم وب‌مانیا</h2>
                <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                    ما یه تیم دو نفره‌ایم. شاید کم به نظر بیایم، ولی هر کدوممون توی کارمون حرفه‌ای‌ایم و با انرژی کامل روی پروژه‌هاتون کار می‌کنیم.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8">
                    {[
                        { name: 'امید', role: 'توسعه‌دهنده و متخصص هوش مصنوعی', icon: 'code' },
                        { name: 'یاسین', role: 'طراح UI/UX و مدیر محصول', icon: 'palette' }
                    ].map((member, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-3xl bg-surface/30 border border-white/5">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center text-accent"><Icon name={member.icon} size={40} /></div>
                            <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                            <p className="text-secondary text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => goToPage('contact')} className="px-10 py-5 bg-accent text-white rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(139,92,246,0.3)]">بیا با هم صحبت کنیم</motion.button>
            </div>
        </div>
    );
};

renderPage('about', AboutPage);
