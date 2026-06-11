/* ===== صفحه خانه - نسخه بصری و کم‌متن ===== */

/* اسلایدر سه‌بعدی لوکال برای قابلیت‌ها */
const Capability3DSlider = ({ items }) => {
    const [active, setActive] = useState(0);
    const dragStartX = useRef(null);
    const dragDeltaX = useRef(0);
    const next = () => setActive(v => (v + 1) % items.length);
    const prev = () => setActive(v => (v - 1 + items.length) % items.length);
    const onDragStart = (e) => {
        dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        dragDeltaX.current = 0;
        if (e.pointerId && e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
    };
    const onDragMove = (e) => {
        if (dragStartX.current === null) return;
        const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        dragDeltaX.current = x - dragStartX.current;
    };
    const onDragEnd = () => {
        if (dragStartX.current === null) return;
        if (dragDeltaX.current > 35) prev();
        if (dragDeltaX.current < -35) next();
        dragStartX.current = null;
        dragDeltaX.current = 0;
    };
    return (
        <div className="wm-3d-slider-wrap" onPointerDown={onDragStart} onPointerMove={onDragMove} onPointerUp={onDragEnd} onPointerCancel={onDragEnd} onTouchStart={onDragStart} onTouchMove={onDragMove} onTouchEnd={onDragEnd}>
            <div className="wm-3d-stage">
                {items.map((item, i) => {
                    const delta = (i - active + items.length) % items.length;
                    const pos = delta === 0 ? 'active' : delta === 1 ? 'next' : 'prev';
                    return (
                        <article key={item.title} className={`wm-3d-card ${pos}`} onClick={() => setActive(i)}>
                            <img src={item.img} alt={item.title} />
                            <div className="wm-3d-glow"></div>
                            <div className="wm-3d-icon"><Icon name={item.icon} size={22} /></div>
                            <div className="wm-3d-copy">
                                <span>{item.tag}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className="wm-3d-controls">
                <button onClick={prev}><Icon name="arrow-right" size={18} /></button>
                <div>{items.map((_, i) => <span key={i} className={i === active ? 'active' : ''}></span>)}</div>
                <button onClick={next}><Icon name="arrow-left" size={18} /></button>
            </div>
        </div>
    );
};

/* مسیر اجرای پروژه با انیمیشن اختصاصی */
const ProcessExperience = ({ items }) => {
    const images = ['../assets/process-discovery.jpg', '../assets/process-design-code.jpg', '../assets/process-launch-support.jpg'];
    const icons = ['compass', 'code-2', 'rocket'];
    return (
        <section className="wm-process-cinematic mb-20">
            {items.map((item, i) => (
                <motion.article key={item.n} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="wm-process-cine-card">
                    <div className="wm-process-cine-img"><img src={images[i]} alt={item.title} /><b>{item.n}</b></div>
                    <div className="wm-process-cine-content">
                        <div className="wm-process-cine-icon"><Icon name={icons[i]} size={20} /></div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                </motion.article>
            ))}
        </section>
    );
};

const HomePage = ({ t }) => {
    const [settings, setSettings] = useState({});
    useEffect(() => {
        fetch('../admin/api.php?action=get_settings')
            .then(res => res.ok ? res.json() : {})
            .then(data => setSettings(data || {}))
            .catch(() => {});
    }, []);

    const title1 = 'سایتت رو';
    const title2 = 'هوشمند بساز';
    const desc = 'طراحی اختصاصی، سرعت بالا و امکان اتصال به هوش مصنوعی؛ برای کسب‌وکاری که می‌خواهد حرفه‌ای دیده شود.';

    const featureCards = [
        { icon: 'code-2', title: 'کدنویسی اختصاصی', desc: 'بدون قالب تکراری' },
        { icon: 'gauge', title: 'سرعت بالا', desc: 'سبک و موبایل‌فرست' },
        { icon: 'bot', title: 'هوشمندسازی', desc: 'چت‌بات و اتوماسیون' },
        { icon: 'search-check', title: 'سئو اولیه', desc: 'زیرساخت آماده رشد' }
    ];

    const process = [
        { n: '01', title: 'تشخیص مسیر', desc: 'سایت ساده یا هوشمند؟' },
        { n: '02', title: 'طراحی و اجرا', desc: 'UI اختصاصی + کدنویسی تمیز' },
        { n: '03', title: 'تحویل مطمئن', desc: 'آموزش + ۶ ماه پشتیبانی' }
    ];

    return (
        <div className="max-w-6xl mx-auto pt-24 pb-20 px-4 wm-home">
            {/* Hero */}
            <section className="wm-hero relative mb-20 overflow-hidden rounded-[2rem] bg-[#08080d] shadow-2xl">
                <div className="wm-hero-bg"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-4 md:p-8 lg:p-10">
                    <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-6 order-2 lg:order-1">
                        <div className="wm-hero-visual">
                            <img src="../assets/hero-smart-web-ai.jpg" alt="طراحی سایت اختصاصی و هوشمند وب‌مانیا" loading="eager" fetchpriority="high" />
                            <div className="wm-hero-badges">
                                <span><Icon name="layout-dashboard" size={16} /> طراحی اختصاصی</span>
                                <span><Icon name="zap" size={16} /> سرعت بالا</span>
                                <span><Icon name="bot" size={16} /> قابل هوشمندسازی</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-right py-4">
                        <div className="wm-eyebrow"><Icon name="sparkles" size={15} /> طراحی سایت برای کسب‌وکارهای جدی</div>
                        <h1 className="wm-hero-title">
                            <span>{title1}</span>
                            <strong>{title2}</strong>
                        </h1>
                        <p className="wm-hero-desc">{desc}</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
                            <button onClick={() => goToPage('contact')} className="wm-primary-btn">شروع مشاوره <Icon name="arrow-left" size={20} /></button>
                            <button onClick={() => goToPage('portfolio')} className="wm-secondary-btn"><Icon name="play-circle" size={18} /> دیدن نمونه‌کارها</button>
                        </div>
                        <div className="wm-hero-stats">
                            <div><b>۶ ماه</b><span>پشتیبانی رایگان</span></div>
                            <div><b>SEO</b><span>سئوی اولیه</span></div>
                            <div><b>Custom</b><span>کدنویسی اختصاصی</span></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Visual promise */}
            <section className="wm-section mb-20">
                <div className="wm-section-head">
                    <span>WEBMANIA STANDARD</span>
                    <h2>استاندارد اجرای وب‌مانیا</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {featureCards.map((item, i) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="wm-feature-card">
                            <Icon name={item.icon} size={24} />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Banner */}
            <section className="wm-split-banner mb-20">
                <div className="wm-banner-copy">
                    <span>ساده، هوشمند یا ترکیبی</span>
                    <h2>سایت را متناسب با هدف شما می‌سازیم.</h2>
                    <p>اگر یک وبسایت سریع و شیک کافی باشد، ساده و تمیز اجرا می‌کنیم. اگر نیاز به پاسخ‌گویی، ثبت لید یا اتوماسیون دارید، هوش مصنوعی را دقیق و کاربردی اضافه می‌کنیم.</p>
                </div>
                <div className="wm-banner-art">
                    <div className="wm-art-window"><img src="../assets/template-corporate-ai.jpg?v=3" alt="نمونه رابط کاربری سایت هوشمند" /></div>
                    <div className="wm-art-chip chip-1"><Icon name="bot" /> پاسخ‌گویی هوشمند</div>
                    <div className="wm-art-chip chip-2"><Icon name="search-check" /> آماده سئو</div>
                </div>
            </section>

            {/* Premium visual sections */}
            <div className="wm-block-heading"><span>CAPABILITIES</span><h2>قابلیت‌هایی که سایت شما را حرفه‌ای‌تر می‌کنند</h2></div>
            <Capability3DSlider items={[
                { img: '../assets/home-cap-design-v2.jpg', icon: 'pen-tool', tag: 'Design System', title: 'طراحی اختصاصی با هویت بصری منظم', desc: 'رنگ، چیدمان، کامپوننت و تجربه کاربری هماهنگ با برند شما.' },
                { img: '../assets/home-cap-panel-v2.jpg', icon: 'layout-dashboard', tag: 'Control Panel', title: 'پنل و فرم‌های قابل مدیریت', desc: 'درخواست‌ها، پیام‌ها، قالب‌ها و محتوا از پنل کنترل می‌شوند.' },
                { img: '../assets/home-cap-ai-v2.jpg', icon: 'bot', tag: 'Smart Automation', title: 'اتصال هوشمند به مسیر فروش', desc: 'چت هوشمند، ثبت لید و پاسخ‌گویی اولیه برای کاهش اتلاف زمان.' }
            ]} />

            {/* Process visual */}
            <div className="wm-block-heading wm-process-heading"><span>PROJECT ROADMAP</span><h2>مسیر اجرای پروژه، شفاف و مرحله‌به‌مرحله</h2></div>
            <ProcessExperience items={process} />

            {/* Portfolio */}
            <section className="wm-works-section-v2 mb-20">
                <div className="wm-section-head wm-works-head-v2">
                    <div>
                        <span>SELECTED WORKS</span>
                        <h2>نمونه‌کارهای تازه</h2>
                    </div>
                    <div className="wm-work-hint"><Icon name="mouse-pointer-click" size={16} /> روی پروژه‌ها بزنید</div>
                    <button onClick={() => goToPage('portfolio')} className="wm-secondary-btn hidden md:flex">مشاهده همه <Icon name="arrow-left" size={18} /></button>
                </div>
                <div className="wm-work-gallery-v2">
                    {[
                        { title: 'ریمچ کافی', tag: 'منوی دیجیتال کافه', img: '../assets/portfolio-rematch-cafe.jpg?v=4', link: 'https://rematchcoffee.ir', accent: '#84cc16', desc: 'منوی دیجیتال سریع، موبایل‌فرست و مناسب تجربه سفارش در کافه.' },
                        { title: 'ارمغان سبز اروند', tag: 'وبسایت شرکتی کشاورزی', img: '../assets/portfolio-armaghan-agri.jpg?v=4', link: 'https://armaghansabzarvand.com', accent: '#10b981', desc: 'وبسایت شرکتی با هویت بصری روشن، ساختار منظم و معرفی حرفه‌ای محصولات.' }
                    ].map((p, i) => (
                        <motion.a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="wm-work-editorial-card" style={{ '--work-accent': p.accent }}>
                            <div className="wm-work-full-cover">
                                <img src={p.img} alt={p.title} />
                            </div>
                            <div className="wm-work-info-v2">
                                <span>{p.tag}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="wm-work-action-v2">مشاهده پروژه <Icon name="arrow-left" size={16} /></div>
                            </div>
                        </motion.a>
                    ))}
                </div>
                <div className="wm-work-swipe-cue md:hidden">
                    <span></span><span></span><span></span>
                    <b>برای دیدن پروژه بعدی بکشید</b>
                </div>
                <button onClick={() => goToPage('portfolio')} className="wm-mobile-more-works md:hidden">مشاهده همه نمونه‌کارها <Icon name="arrow-left" size={16} /></button>
            </section>

            {/* Templates */}
            <section className="wm-template-cta mb-10">
                <div>
                    <span>READY TEMPLATES</span>
                    <h2>شروع سریع با قالب‌های قابل توسعه</h2>
                    <p>برای بودجه یا زمان محدود؛ قالب آماده، ظاهر حرفه‌ای و قابلیت ارتقا در آینده.</p>
                    <button onClick={() => goToPage('templates')} className="wm-primary-btn">مشاهده قالب‌ها <Icon name="layout-template" size={19} /></button>
                </div>
                <img src="../assets/template-shop-ai.jpg?v=4" alt="قالب آماده فروشگاهی" />
            </section>
        </div>
    );
};

renderPage('home', HomePage);
