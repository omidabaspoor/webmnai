/* ===== صفحه نمونه‌کارها - متصل به پنل مدیریت ===== */
const PortfolioPage = ({ t }) => {
    const fallbackProjects = [
        { id: 1, title: 'ریمچ کافی', category: 'cafe', desc: 'منوی دیجیتال و سایت کافه با طراحی مدرن، سریع و مناسب موبایل.', image: '../assets/portfolio-rematch-cafe.jpg', link: 'https://rematchcoffee.ir', tags: 'منوی دیجیتال, PWA, طراحی اختصاصی' },
        { id: 2, title: 'ارمغان سبز اروند', category: 'corporate', desc: 'سایت شرکتی با پنل مدیریت، ساختار استاندارد و تجربه کاربری حرفه‌ای.', image: '../assets/portfolio-armaghan-agri.jpg', link: 'https://armaghansabzarvand.com', tags: 'شرکتی, پنل مدیریت, چندزبانه' }
    ];

    const [projects, setProjects] = useState(fallbackProjects);

    useEffect(() => {
        fetch('../admin/api.php?action=get_portfolios')
            .then(res => res.ok ? res.json() : [])
            .then(data => { if (Array.isArray(data) && data.length) setProjects(data); })
            .catch(() => {});
    }, []);

    const categoryLabel = (cat) => ({ cafe: 'کافه و رستوران', corporate: 'شرکتی', shop: 'فروشگاهی', landing: 'لندینگ پیج', web3: 'وب ۳', saas: 'SaaS', dashboard: 'داشبورد', pwa: 'PWA' }[cat] || cat || 'پروژه');
    const toTags = (tags) => Array.isArray(tags) ? tags : String(tags || 'طراحی اختصاصی, ریسپانسیو, سریع').split(',').map(x => x.trim()).filter(Boolean);
    const projectImage = (project) => {
        const title = String(project.title || '').toLowerCase();
        if (title.includes('ریمچ') || title.includes('rematch') || project.category === 'cafe') return '../assets/portfolio-rematch-cafe.jpg?v=3';
        if (title.includes('ارمغان') || title.includes('arvand') || title.includes('armaghan') || project.category === 'corporate') return '../assets/portfolio-armaghan-agri.jpg?v=3';
        return project.image;
    };

    return (
        <div className="max-w-6xl mx-auto pt-32 pb-20 px-4">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold mb-4"><Icon name="sparkles" size={14} /> AI READY PROJECTS</div>
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-primary">{t.portfolio.title}</h1>
                <p className="text-secondary text-lg max-w-2xl mx-auto">پروژه‌هایی که فقط زیبا نیستند؛ سریع، ریسپانسیو و آماده اتصال به ابزارهای هوشمند هستند.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div key={project.id || i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="portfolio-card group relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-surface/40">
                        <div className="relative h-[400px] overflow-hidden">
                            <img src={projectImage(project)} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                            <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[90%]">
                                {toTags(project.tags).slice(0, 3).map(tag => <span key={tag} className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-accent border border-white/10">{tag}</span>)}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{categoryLabel(project.category)}</span>
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-300 mb-4 leading-relaxed line-clamp-2">{project.desc || project.description}</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-accent text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"><Icon name="external-link" size={16} />مشاهده سایت</a>}
                                    <button onClick={() => goToPage('contact')} className="px-5 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-colors">سفارش مشابه</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-16 text-center p-8 md:p-12 rounded-3xl bg-surface/30 border border-white/5">
                <h3 className="text-2xl font-bold text-primary mb-4">پروژه بعدی متعلق به توئه</h3>
                <p className="text-secondary mb-6">بیا با هم یک وبسایت هوشمند بسازیم که هم زیبا باشد، هم کار کند.</p>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => goToPage('contact')} className="px-8 py-4 bg-accent text-white rounded-2xl font-bold">شروع پروژه</motion.button>
            </div>
        </div>
    );
};

renderPage('portfolio', PortfolioPage);
