/* ===== ناوبر Liquid Glass + انتقال نرم صفحات ===== */
const NAV_PAGES = {
    home: '../home/index.html',
    about: '../about/index.html',
    portfolio: '../portfolio/index.html',
    templates: '../templates/index.html',
    services: '../services/index.html',
    contact: '../contact/index.html'
};

const goToPage = (id) => {
    const path = NAV_PAGES[id];
    if (!path) return;
    if (window.location.href.endsWith(path.replace('../', ''))) return;
    let overlay = document.querySelector('.page-liquid-transition');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'page-liquid-transition';
        overlay.innerHTML = '<div></div><span>WebMania</span>';
        document.body.appendChild(overlay);
    }
    requestAnimationFrame(() => overlay.classList.add('active'));
    setTimeout(() => { window.location.href = path; }, 360);
};

const Navbar = ({ lang, setLang, currentPage, t }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { id: 'home', label: t.nav.home, icon: 'home' },
        { id: 'about', label: t.nav.about, icon: 'users' },
        { id: 'portfolio', label: t.nav.portfolio, icon: 'briefcase' },
        { id: 'templates', label: t.nav.templates, icon: 'layout-template' },
        { id: 'services', label: t.nav.services, icon: 'zap' },
        { id: 'contact', label: t.nav.contact, icon: 'phone' },
    ];
    const centerLinks = navLinks.filter(x => x.id !== 'contact');

    return (
        <>
            <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="fixed top-0 left-0 right-0 z-40 px-4 py-4 pointer-events-none">
                <div className="pointer-events-auto max-w-6xl mx-auto liquid-nav rounded-full px-4 py-3 flex items-center justify-between shadow-2xl shadow-black/10 relative">
                    <div className="flex items-center gap-3 cursor-pointer min-w-[170px]" onClick={() => goToPage('home')}>
                        <div className="w-11 h-11 rounded-full overflow-hidden bg-black flex items-center justify-center liquid-logo">
                            <img src="../logo.jpg" alt="Web Mania logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-black text-lg hidden lg:block tracking-tight text-white">Web Mania</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 liquid-nav-center absolute left-1/2 -translate-x-1/2 rounded-full p-1">
                        {centerLinks.map((link) => (
                            <button key={link.id} onClick={() => goToPage(link.id)} className={`relative px-4 xl:px-5 py-2 rounded-full text-sm font-black transition-all overflow-hidden ${currentPage === link.id ? 'text-black' : 'text-zinc-300 hover:text-white'}`}>
                                {currentPage === link.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-full nav-active-pill" transition={{ type: 'spring', bounce: 0.18, duration: 0.55 }} />}
                                <span className="relative z-10">{link.label}</span>
                            </button>
                        ))}
                    </div>

                    <button onClick={() => goToPage('contact')} className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black bg-accent text-white hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                        همکاری <Icon name="arrow-left" size={16} />
                    </button>

                    <div onClick={() => goToPage('home')} className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center justify-center mobile-brand-center">
                        <span className="font-black text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-white via-purple-200 to-accent">webmania</span>
                    </div>
                    <button onClick={() => setMenuOpen(true)} className="lg:hidden w-10 h-10 rounded-full bg-white/8 flex items-center justify-center border border-white/10 text-white"><Icon name="menu" size={20} /></button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md" onClick={() => setMenuOpen(false)}>
                        <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="absolute left-0 top-0 bottom-0 w-full sm:w-80 bg-[#09090b]/95 border-r border-white/10 p-6 flex flex-col relative overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
                            <div className="flex justify-between items-center mb-12 relative z-10">
                                <div className="flex items-center gap-2"><div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white"><Icon name="command" size={18} /></div><span className="text-xl font-bold tracking-tight text-white">MENU</span></div>
                                <button onClick={() => setMenuOpen(false)} className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"><Icon name="x" size={20} /></button>
                            </div>
                            <div className="flex flex-col gap-2 relative z-10">
                                {navLinks.map((link, i) => (
                                    <motion.button key={link.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ delay: i * 0.05 + 0.1 }} onClick={() => { setMenuOpen(false); goToPage(link.id); }} className="group relative p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 flex items-center gap-4 overflow-hidden w-full text-right">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${currentPage === link.id ? 'bg-accent text-white' : 'bg-white/5 text-zinc-500 group-hover:bg-white/10 group-hover:text-white'}`}><Icon name={link.icon} size={20} /></div>
                                        <div className={`text-lg font-bold tracking-tight transition-all duration-300 ${currentPage === link.id ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>{link.label}</div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
