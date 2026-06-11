const PageLayout = ({
  currentPage,
  PageContent,
  hideIntroOnReload = false
}) => {
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem('wm_lang') || 'fa');
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    root.lang = lang;
  }, [lang]);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const handleIntroComplete = () => {
    setLoading(false);
    try {
      sessionStorage.setItem('wm_intro_seen', '1');
    } catch (e) {}
  };
  const t = window.WM_TRANSLATIONS[lang];
  return React.createElement(React.Fragment, null, React.createElement(CustomCursor, null), React.createElement("div", {
    className: "min-h-screen bg-background text-primary font-persian selection:bg-accent selection:text-white flex flex-col"
  }, React.createElement("div", {
    className: "fixed inset-0 z-0 bg-grid-pattern opacity-30 pointer-events-none"
  }), React.createElement("div", {
    className: "fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"
  }), React.createElement("div", {
    className: "fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
  }), React.createElement(AnimatePresence, null, loading && React.createElement(IntroOverlay, {
    onComplete: handleIntroComplete
  })), !loading && React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    className: "relative z-10 flex flex-col min-h-screen"
  }, React.createElement(Navbar, {
    lang: lang,
    setLang: setLang,
    currentPage: currentPage,
    t: t
  }), React.createElement("main", {
    className: "flex-grow"
  }, React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    },
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }, React.createElement(PageContent, {
    t: t
  }))), React.createElement(SupportWidget, {
    t: t
  }), React.createElement(MinimalFooter, {
    t: t
  }))));
};
const renderPage = (currentPage, PageContent) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(PageLayout, {
    currentPage: currentPage,
    PageContent: PageContent
  }));
};