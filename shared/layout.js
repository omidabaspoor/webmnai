/* ===== کامپوننت Layout مشترک - دور هر صفحه پیچیده می‌شود ===== */
// PageContent یک تابع است که t (ترجمه) را می‌گیرد و JSX صفحه را برمی‌گرداند.
const PageLayout = ({ currentPage, PageContent, hideIntroOnReload = false }) => {
    // برای سرعت بهتر، انیمیشن ورودی سنگین به‌صورت پیش‌فرض غیرفعال شد.
    const [loading, setLoading] = useState(false);
    const [lang, setLang] = useState(() => localStorage.getItem('wm_lang') || 'fa');

    // همیشه تم تاریک — سایت فقط مشکی است
    useEffect(() => {
        const root = document.documentElement;
        root.classList.add('dark');
        root.dir = lang === 'fa' ? 'rtl' : 'ltr';
        root.lang = lang;
    }, [lang]);

    useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

    const handleIntroComplete = () => {
        setLoading(false);
        try { sessionStorage.setItem('wm_intro_seen', '1'); } catch (e) {}
    };

    const t = window.WM_TRANSLATIONS[lang];

    return (
        <>
            <CustomCursor />
            <div className="min-h-screen bg-background text-primary font-persian selection:bg-accent selection:text-white flex flex-col">
                <div className="fixed inset-0 z-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
                <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
                <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <AnimatePresence>{loading && <IntroOverlay onComplete={handleIntroComplete} />}</AnimatePresence>

                {!loading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 flex flex-col min-h-screen">
                        <Navbar lang={lang} setLang={setLang} currentPage={currentPage} t={t} />
                        <main className="flex-grow">
                            <motion.div initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.3, ease: "easeOut" }}>
                                <PageContent t={t} />
                            </motion.div>
                        </main>
                        <SupportWidget t={t} />
                        <MinimalFooter t={t} />
                    </motion.div>
                )}
            </div>
        </>
    );
};

// تابع کمکی برای راه‌اندازی هر صفحه با یک خط
const renderPage = (currentPage, PageContent) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<PageLayout currentPage={currentPage} PageContent={PageContent} />);
};