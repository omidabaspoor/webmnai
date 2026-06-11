const PortfolioPage = ({
  t
}) => {
  const fallbackProjects = [{
    id: 1,
    title: 'ریمچ کافی',
    category: 'cafe',
    desc: 'منوی دیجیتال و سایت کافه با طراحی مدرن، سریع و مناسب موبایل.',
    image: '../assets/portfolio-rematch-cafe.jpg',
    link: 'https://rematchcoffee.ir',
    tags: 'منوی دیجیتال, PWA, طراحی اختصاصی'
  }, {
    id: 2,
    title: 'ارمغان سبز اروند',
    category: 'corporate',
    desc: 'سایت شرکتی با پنل مدیریت، ساختار استاندارد و تجربه کاربری حرفه‌ای.',
    image: '../assets/portfolio-armaghan-agri.jpg',
    link: 'https://armaghansabzarvand.com',
    tags: 'شرکتی, پنل مدیریت, چندزبانه'
  }];
  const [projects, setProjects] = useState(fallbackProjects);
  useEffect(() => {
    fetch('../admin/api.php?action=get_portfolios').then(res => res.ok ? res.json() : []).then(data => {
      if (Array.isArray(data) && data.length) setProjects(data);
    }).catch(() => {});
  }, []);
  const categoryLabel = cat => ({
    cafe: 'کافه و رستوران',
    corporate: 'شرکتی',
    shop: 'فروشگاهی',
    landing: 'لندینگ پیج',
    web3: 'وب ۳',
    saas: 'SaaS',
    dashboard: 'داشبورد',
    pwa: 'PWA'
  })[cat] || cat || 'پروژه';
  const toTags = tags => Array.isArray(tags) ? tags : String(tags || 'طراحی اختصاصی, ریسپانسیو, سریع').split(',').map(x => x.trim()).filter(Boolean);
  const projectImage = project => {
    const title = String(project.title || '').toLowerCase();
    if (title.includes('ریمچ') || title.includes('rematch') || project.category === 'cafe') return '../assets/portfolio-rematch-cafe.jpg?v=3';
    if (title.includes('ارمغان') || title.includes('arvand') || title.includes('armaghan') || project.category === 'corporate') return '../assets/portfolio-armaghan-agri.jpg?v=3';
    return project.image;
  };
  return React.createElement("div", {
    className: "max-w-6xl mx-auto pt-32 pb-20 px-4"
  }, React.createElement("div", {
    className: "text-center mb-12"
  }, React.createElement("div", {
    className: "inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold mb-4"
  }, React.createElement(Icon, {
    name: "sparkles",
    size: 14
  }), " AI READY PROJECTS"), React.createElement("h1", {
    className: "text-4xl md:text-6xl font-black mb-4 text-primary"
  }, t.portfolio.title), React.createElement("p", {
    className: "text-secondary text-lg max-w-2xl mx-auto"
  }, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0641\u0642\u0637 \u0632\u06CC\u0628\u0627 \u0646\u06CC\u0633\u062A\u0646\u062F\u061B \u0633\u0631\u06CC\u0639\u060C \u0631\u06CC\u0633\u067E\u0627\u0646\u0633\u06CC\u0648 \u0648 \u0622\u0645\u0627\u062F\u0647 \u0627\u062A\u0635\u0627\u0644 \u0628\u0647 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0647\u0648\u0634\u0645\u0646\u062F \u0647\u0633\u062A\u0646\u062F.")), React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }, projects.map((project, i) => React.createElement(motion.div, {
    key: project.id || i,
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: i * 0.08
    },
    className: "portfolio-card group relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-surface/40"
  }, React.createElement("div", {
    className: "relative h-[400px] overflow-hidden"
  }, React.createElement("img", {
    src: projectImage(project),
    alt: project.title,
    loading: "lazy",
    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  }), React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent"
  }), React.createElement("div", {
    className: "absolute top-4 right-4 flex flex-wrap gap-2 max-w-[90%]"
  }, toTags(project.tags).slice(0, 3).map(tag => React.createElement("span", {
    key: tag,
    className: "px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-accent border border-white/10"
  }, tag))), React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 p-6 md:p-8"
  }, React.createElement("span", {
    className: "text-accent text-xs font-bold uppercase tracking-wider mb-2 block"
  }, categoryLabel(project.category)), React.createElement("h3", {
    className: "text-2xl md:text-3xl font-black text-white mb-2"
  }, project.title), React.createElement("p", {
    className: "text-zinc-300 mb-4 leading-relaxed line-clamp-2"
  }, project.desc || project.description), React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-3"
  }, project.link && React.createElement("a", {
    href: project.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "px-5 py-3 bg-accent text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
  }, React.createElement(Icon, {
    name: "external-link",
    size: 16
  }), "\u0645\u0634\u0627\u0647\u062F\u0647 \u0633\u0627\u06CC\u062A"), React.createElement("button", {
    onClick: () => goToPage('contact'),
    className: "px-5 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-colors"
  }, "\u0633\u0641\u0627\u0631\u0634 \u0645\u0634\u0627\u0628\u0647"))))))), React.createElement("div", {
    className: "mt-16 text-center p-8 md:p-12 rounded-3xl bg-surface/30 border border-white/5"
  }, React.createElement("h3", {
    className: "text-2xl font-bold text-primary mb-4"
  }, "\u067E\u0631\u0648\u0698\u0647 \u0628\u0639\u062F\u06CC \u0645\u062A\u0639\u0644\u0642 \u0628\u0647 \u062A\u0648\u0626\u0647"), React.createElement("p", {
    className: "text-secondary mb-6"
  }, "\u0628\u06CC\u0627 \u0628\u0627 \u0647\u0645 \u06CC\u06A9 \u0648\u0628\u0633\u0627\u06CC\u062A \u0647\u0648\u0634\u0645\u0646\u062F \u0628\u0633\u0627\u0632\u06CC\u0645 \u06A9\u0647 \u0647\u0645 \u0632\u06CC\u0628\u0627 \u0628\u0627\u0634\u062F\u060C \u0647\u0645 \u06A9\u0627\u0631 \u06A9\u0646\u062F."), React.createElement(motion.button, {
    whileHover: {
      scale: 1.05
    },
    whileTap: {
      scale: 0.95
    },
    onClick: () => goToPage('contact'),
    className: "px-8 py-4 bg-accent text-white rounded-2xl font-bold"
  }, "\u0634\u0631\u0648\u0639 \u067E\u0631\u0648\u0698\u0647")));
};
renderPage('portfolio', PortfolioPage);