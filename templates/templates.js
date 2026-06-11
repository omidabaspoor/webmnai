/* ===== صفحه قالب‌ها + پیش‌نمایش - متصل به پنل مدیریت ===== */
const TemplatePreview = ({ template, onClose, t }) => {
    const [device, setDevice] = useState('desktop');
    useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
    const previewSrc = template.preview_url || template.preview_path || template.link || '';
    const canPreview = previewSrc && !String(previewSrc).includes('example.com');
    const frameStyle = device === 'mobile'
        ? { width: 'min(390px, calc(100vw - 28px))', height: 'calc(100dvh - 132px)' }
        : device === 'tablet'
            ? { width: 'min(820px, calc(100vw - 36px))', height: 'calc(100dvh - 128px)' }
            : { width: 'min(1440px, calc(100vw - 36px))', height: 'calc(100dvh - 112px)' };

    return (
        <div className="fixed inset-0 z-[9999] bg-[#050507] overflow-hidden template-preview-pro" dir="rtl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,.22),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(59,130,246,.12),transparent_30%)] pointer-events-none"></div>

            <div className="absolute top-3 md:top-5 left-3 md:left-5 right-3 md:right-5 z-20 flex items-center justify-between gap-3 pointer-events-none">
                <button onClick={onClose} className="pointer-events-auto w-11 h-11 rounded-2xl bg-black/65 border border-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all flex items-center justify-center shadow-xl"><Icon name="x" size={22} /></button>
                <div className="pointer-events-auto hidden md:flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/55 border border-white/10 backdrop-blur-xl shadow-xl min-w-0">
                    <Icon name="layout-template" size={18} className="text-accent" />
                    <span className="text-white font-black truncate max-w-[360px]">{template.title}</span>
                </div>
                <button onClick={() => goToPage('contact')} className="pointer-events-auto h-11 px-4 md:px-5 rounded-2xl bg-accent text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-accent/25 hover:scale-105 transition-transform"><Icon name="send" size={17} /><span className="hidden sm:inline">سفارش</span></button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl shadow-2xl">
                {[['desktop','monitor','دسکتاپ'], ['tablet','tablet','تبلت'], ['mobile','smartphone','موبایل']].map(([id, icon, label]) => (
                    <button key={id} onClick={() => setDevice(id)} className={`px-3 sm:px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 text-xs font-black ${device === id ? 'bg-white text-black' : 'text-zinc-400 hover:text-white hover:bg-white/10'}`}>
                        <Icon name={icon} size={17} /><span className="hidden sm:inline">{label}</span>
                    </button>
                ))}
            </div>

            <div className="relative z-10 h-full w-full flex items-center justify-center px-3 pt-16 pb-20 md:pt-20 md:pb-20">
                <motion.div key={device} initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .24 }} className={`relative ${device === 'mobile' ? 'rounded-[2.4rem] p-2 bg-zinc-950 border-[6px] border-zinc-800 shadow-2xl' : 'rounded-[1.7rem] p-2 bg-white/5 border border-white/10 shadow-2xl'}`} style={frameStyle}>
                    {device === 'mobile' && <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-zinc-700 z-20"></div>}
                    <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden border border-white/10">
                        {canPreview ? (
                            <iframe src={previewSrc} className="w-full h-full bg-white border-0" title={template.title} sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
                        ) : (
                            <div className="w-full h-full bg-[#08080d] flex flex-col items-center justify-center p-5 sm:p-8 text-center">
                                <img src={template.image} alt={template.title} className="max-w-4xl w-full rounded-3xl border border-white/10 shadow-2xl mb-6" />
                                <div className="text-white text-xl sm:text-2xl font-black mb-2">پیش‌نمایش هنوز آپلود نشده</div>
                                <p className="text-zinc-400 max-w-md text-sm leading-7">از پنل مدیریت ZIP قالب را آپلود کن. اگر داخل فایل index.html باشد، پیش‌نمایش بدون مزاحمت هدر همین‌جا اجرا می‌شود.</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const TemplatesPage = ({ t }) => {
    const fallback = [
        { id: 1, category: 'shop', title: 'قالب فروشگاهی هوشمند', price: '۶,۹۰۰,۰۰۰ تومان', desc: 'قالب فروشگاهی سریع با طراحی حرفه‌ای و آماده اتصال به پنل و دستیار هوش مصنوعی.', image: '../assets/template-shop-ai.jpg', link: 'https://example.com', features: 'ریسپانسیو, پنل مدیریت, سئو اولیه, آماده AI' },
        { id: 2, category: 'startup', title: 'قالب شرکتی هوشمند', price: '۴,۹۰۰,۰۰۰ تومان', desc: 'قالب معرفی شرکت و خدمات با سکشن‌های جذاب، CTA قوی و ساختار سریع.', image: '../assets/template-corporate-ai.jpg', link: 'https://example.com', features: 'طراحی مدرن, فرم تماس, سرعت بالا, آماده هوشمندسازی' },
        { id: 3, category: 'personal', title: 'قالب برند شخصی', price: '۳,۴۰۰,۰۰۰ تومان', desc: 'برای متخصص‌ها و برندهای شخصی که می‌خواهند حرفه‌ای و متفاوت دیده شوند.', image: '../assets/template-personal-ai.jpg', link: 'https://example.com', features: 'سبک, زیبا, ریسپانسیو, قابل شخصی‌سازی' }
    ];
    const [templates, setTemplates] = useState(fallback);
    const [filter, setFilter] = useState('all');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [previewTemplate, setPreviewTemplate] = useState(null);

    useEffect(() => {
        fetch('../admin/api.php?action=get_templates')
            .then(res => res.ok ? res.json() : [])
            .then(data => { if (Array.isArray(data) && data.length) setTemplates(data); })
            .catch(() => {});
    }, []);

    const templateImage = (tpl) => {
        const img = String(tpl.image || '');
        if (img.includes('/uploads/')) return img;
        if (tpl.category === 'shop') return '../assets/template-shop-ai.jpg?v=3';
        if (tpl.category === 'startup') return '../assets/template-corporate-ai.jpg?v=3';
        if (tpl.category === 'personal') return '../assets/template-personal-ai.jpg?v=3';
        return img || '../assets/template-corporate-ai.jpg?v=3';
    };
    const templatePrice = (tpl) => {
        if (tpl.price && tpl.price !== 'تماس بگیرید') return tpl.price;
        if (tpl.category === 'shop') return '۶,۹۰۰,۰۰۰ تومان';
        if (tpl.category === 'startup') return '۴,۹۰۰,۰۰۰ تومان';
        if (tpl.category === 'personal') return '۳,۴۰۰,۰۰۰ تومان';
        return tpl.price;
    };
    const normalizedTemplates = templates.map(tpl => ({ ...tpl, image: templateImage(tpl), price: templatePrice(tpl) }));
    const filteredTemplates = filter === 'all' ? normalizedTemplates : normalizedTemplates.filter(tpl => tpl.category === filter);
    const featuresOf = (tpl) => Array.isArray(tpl.features) ? tpl.features : String(tpl.features || 'ریسپانسیو, سرعت بالا, قابل شخصی‌سازی').split(',').map(x => x.trim()).filter(Boolean);

    if (selectedTemplate) {
        return (
            <div className="max-w-6xl mx-auto pt-32 pb-20 px-4 min-h-screen">
                {previewTemplate && <TemplatePreview template={previewTemplate} onClose={() => setPreviewTemplate(null)} t={t} />}
                <button onClick={() => setSelectedTemplate(null)} className="mb-8 flex items-center gap-2 text-secondary hover:text-primary transition-colors"><Icon name="arrow-right" size={20} />{t.templates.back}</button>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] overflow-hidden border border-white/10 bg-surface/40">
                        <img src={selectedTemplate.image} alt={selectedTemplate.title} className="w-full h-auto object-cover" />
                    </motion.div>
                    <div className="space-y-6">
                        <div className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">قالب آماده هوشمند</div>
                        <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight">{selectedTemplate.title}</h1>
                        <p className="text-lg text-secondary leading-loose">{selectedTemplate.desc}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {featuresOf(selectedTemplate).map(f => <div key={f} className="flex items-center gap-2 text-secondary bg-surface/40 rounded-xl p-3 border border-white/5"><Icon name="check-circle" size={16} className="text-green-500" /><span className="text-sm">{f}</span></div>)}
                        </div>
                        <div className="p-6 rounded-2xl bg-surface/50 border border-white/10 backdrop-blur-sm">
                            <div className="text-3xl font-black text-primary mb-2">{selectedTemplate.price || t.templates.contactForPrice}</div>
                            <p className="text-sm text-secondary mb-6">قیمت نهایی بر اساس امکانات و اتصال‌های مورد نیاز مشخص می‌شود.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => setPreviewTemplate(selectedTemplate)} className="flex-1 py-4 rounded-xl bg-accent text-white font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"><Icon name="eye" size={20} />{t.templates.preview}</button>
                                <button onClick={() => goToPage('contact')} className="flex-1 py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"><Icon name="send" size={20} />سفارش</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto pt-32 pb-20 px-4 min-h-screen">
            <div className="relative mb-14 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
                <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-wider">{t.templates.ready}</div>
                <h1 className="text-4xl md:text-7xl font-black mb-6 text-primary tracking-tight">{t.templates.title}</h1>
                <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">قالب‌هایی سریع، زیبا و آماده اتصال به پنل و هوش مصنوعی.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[{ id: 'all', label: t.templates.filters.all, icon: 'grid' }, { id: 'shop', label: t.templates.filters.shop, icon: 'shopping-bag' }, { id: 'startup', label: t.templates.filters.startup, icon: 'rocket' }, { id: 'personal', label: t.templates.filters.personal, icon: 'user' }].map(cat => (
                    <button key={cat.id} onClick={() => setFilter(cat.id)} className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${filter === cat.id ? 'bg-accent text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' : 'bg-surface border border-border text-secondary hover:border-accent/50 hover:text-primary'}`}><Icon name={cat.icon} size={18} />{cat.label}</button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredTemplates.map((item, i) => (
                        <motion.div key={item.id || i} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ delay: i * 0.06 }} onClick={() => setSelectedTemplate(item)} className="cursor-pointer">
                            <div className="template-card-hover group h-full bg-surface/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden flex flex-col relative hover:border-accent/40 transition-all">
                                <div className="relative h-64 overflow-hidden">
                                    <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent opacity-90" />
                                    <div className="absolute top-4 right-4"><span className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white">{item.category}</span></div>
                                </div>
                                <div className="p-6 pt-4 flex flex-col flex-1 relative">
                                    <h3 className="text-2xl font-black text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                                    <p className="text-sm text-secondary leading-relaxed line-clamp-2 mb-4">{item.desc}</p>
                                    <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-4"><span className="text-sm font-bold text-accent">{item.price || t.templates.contactForPrice}</span><div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors"><Icon name="arrow-left" size={20} /></div></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

renderPage('templates', TemplatesPage);
