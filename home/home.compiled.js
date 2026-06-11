const Capability3DSlider = ({
  items
}) => {
  const [active, setActive] = useState(0);
  const dragStartX = useRef(null);
  const dragDeltaX = useRef(0);
  const next = () => setActive(v => (v + 1) % items.length);
  const prev = () => setActive(v => (v - 1 + items.length) % items.length);
  const onDragStart = e => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragDeltaX.current = 0;
    if (e.pointerId && e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onDragMove = e => {
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
  return React.createElement("div", {
    className: "wm-3d-slider-wrap",
    onPointerDown: onDragStart,
    onPointerMove: onDragMove,
    onPointerUp: onDragEnd,
    onPointerCancel: onDragEnd,
    onTouchStart: onDragStart,
    onTouchMove: onDragMove,
    onTouchEnd: onDragEnd
  }, React.createElement("div", {
    className: "wm-3d-stage"
  }, items.map((item, i) => {
    const delta = (i - active + items.length) % items.length;
    const pos = delta === 0 ? 'active' : delta === 1 ? 'next' : 'prev';
    return React.createElement("article", {
      key: item.title,
      className: `wm-3d-card ${pos}`,
      onClick: () => setActive(i)
    }, React.createElement("img", {
      src: item.img,
      alt: item.title,
      loading: "lazy",
      decoding: "async"
    }), React.createElement("div", {
      className: "wm-3d-glow"
    }), React.createElement("div", {
      className: "wm-3d-icon"
    }, React.createElement(Icon, {
      name: item.icon,
      size: 22
    })), React.createElement("div", {
      className: "wm-3d-copy"
    }, React.createElement("span", null, item.tag), React.createElement("h3", null, item.title), React.createElement("p", null, item.desc)));
  })), React.createElement("div", {
    className: "wm-3d-controls"
  }, React.createElement("button", {
    onClick: prev
  }, React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })), React.createElement("div", null, items.map((_, i) => React.createElement("span", {
    key: i,
    className: i === active ? 'active' : ''
  }))), React.createElement("button", {
    onClick: next
  }, React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }))));
};
const ProcessExperience = ({
  items
}) => {
  const images = ['../assets/process-discovery.jpg', '../assets/process-design-code.jpg', '../assets/process-launch-support.jpg'];
  const icons = ['compass', 'code-2', 'rocket'];
  return React.createElement("section", {
    className: "wm-process-cinematic mb-20"
  }, items.map((item, i) => React.createElement(motion.article, {
    key: item.n,
    initial: {
      opacity: 0,
      y: 26
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      delay: i * .1
    },
    className: "wm-process-cine-card"
  }, React.createElement("div", {
    className: "wm-process-cine-img"
  }, React.createElement("img", {
    src: images[i],
    alt: item.title,
    loading: "lazy",
    decoding: "async"
  }), React.createElement("b", null, item.n)), React.createElement("div", {
    className: "wm-process-cine-content"
  }, React.createElement("div", {
    className: "wm-process-cine-icon"
  }, React.createElement(Icon, {
    name: icons[i],
    size: 20
  })), React.createElement("h3", null, item.title), React.createElement("p", null, item.desc)))));
};
const HomePage = ({
  t
}) => {
  const [settings, setSettings] = useState({});
  useEffect(() => {
    fetch('../admin/api.php?action=get_settings').then(res => res.ok ? res.json() : {}).then(data => setSettings(data || {})).catch(() => {});
  }, []);
  const title1 = 'سایتت رو';
  const title2 = 'هوشمند بساز';
  const desc = 'طراحی اختصاصی، سرعت بالا و امکان اتصال به هوش مصنوعی؛ برای کسب‌وکاری که می‌خواهد حرفه‌ای دیده شود.';
  const featureCards = [{
    icon: 'code-2',
    title: 'کدنویسی اختصاصی',
    desc: 'بدون قالب تکراری'
  }, {
    icon: 'gauge',
    title: 'سرعت بالا',
    desc: 'سبک و موبایل‌فرست'
  }, {
    icon: 'bot',
    title: 'هوشمندسازی',
    desc: 'چت‌بات و اتوماسیون'
  }, {
    icon: 'search-check',
    title: 'سئو اولیه',
    desc: 'زیرساخت آماده رشد'
  }];
  const process = [{
    n: '01',
    title: 'تشخیص مسیر',
    desc: 'سایت ساده یا هوشمند؟'
  }, {
    n: '02',
    title: 'طراحی و اجرا',
    desc: 'UI اختصاصی + کدنویسی تمیز'
  }, {
    n: '03',
    title: 'تحویل مطمئن',
    desc: 'آموزش + ۶ ماه پشتیبانی'
  }];
  return React.createElement("div", {
    className: "max-w-6xl mx-auto pt-24 pb-20 px-4 wm-home"
  }, React.createElement("section", {
    className: "wm-hero relative mb-20 overflow-hidden rounded-[2rem] bg-[#08080d] shadow-2xl"
  }, React.createElement("div", {
    className: "wm-hero-bg"
  }), React.createElement("div", {
    className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-4 md:p-8 lg:p-10"
  }, React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: -24
    },
    animate: {
      opacity: 1,
      x: 0
    },
    className: "lg:col-span-6 order-2 lg:order-1"
  }, React.createElement("div", {
    className: "wm-hero-visual"
  }, React.createElement("img", {
    src: "../assets/hero-smart-web-ai.jpg",
    alt: "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u0648 \u0647\u0648\u0634\u0645\u0646\u062F \u0648\u0628\u200C\u0645\u0627\u0646\u06CC\u0627",
    loading: "eager",
    fetchpriority: "high"
  }), React.createElement("div", {
    className: "wm-hero-badges"
  }, React.createElement("span", null, React.createElement(Icon, {
    name: "layout-dashboard",
    size: 16
  }), " \u0637\u0631\u0627\u062D\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC"), React.createElement("span", null, React.createElement(Icon, {
    name: "zap",
    size: 16
  }), " \u0633\u0631\u0639\u062A \u0628\u0627\u0644\u0627"), React.createElement("span", null, React.createElement(Icon, {
    name: "bot",
    size: 16
  }), " \u0642\u0627\u0628\u0644 \u0647\u0648\u0634\u0645\u0646\u062F\u0633\u0627\u0632\u06CC")))), React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 18
    },
    animate: {
      opacity: 1,
      y: 0
    },
    className: "lg:col-span-6 order-1 lg:order-2 text-center lg:text-right py-4"
  }, React.createElement("div", {
    className: "wm-eyebrow"
  }, React.createElement(Icon, {
    name: "sparkles",
    size: 15
  }), " \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC"), React.createElement("h1", {
    className: "wm-hero-title"
  }, React.createElement("span", null, title1), React.createElement("strong", null, title2)), React.createElement("p", {
    className: "wm-hero-desc"
  }, desc), React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6"
  }, React.createElement("button", {
    onClick: () => goToPage('contact'),
    className: "wm-primary-btn"
  }, "\u0634\u0631\u0648\u0639 \u0645\u0634\u0627\u0648\u0631\u0647 ", React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  })), React.createElement("button", {
    onClick: () => goToPage('portfolio'),
    className: "wm-secondary-btn"
  }, React.createElement(Icon, {
    name: "play-circle",
    size: 18
  }), " \u062F\u06CC\u062F\u0646 \u0646\u0645\u0648\u0646\u0647\u200C\u06A9\u0627\u0631\u0647\u0627")), React.createElement("div", {
    className: "wm-hero-stats"
  }, React.createElement("div", null, React.createElement("b", null, "\u06F6 \u0645\u0627\u0647"), React.createElement("span", null, "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646")), React.createElement("div", null, React.createElement("b", null, "SEO"), React.createElement("span", null, "\u0633\u0626\u0648\u06CC \u0627\u0648\u0644\u06CC\u0647")), React.createElement("div", null, React.createElement("b", null, "Custom"), React.createElement("span", null, "\u06A9\u062F\u0646\u0648\u06CC\u0633\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC")))))), React.createElement("section", {
    className: "wm-section mb-20"
  }, React.createElement("div", {
    className: "wm-section-head"
  }, React.createElement("span", null, "WEBMANIA STANDARD"), React.createElement("h2", null, "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0627\u062C\u0631\u0627\u06CC \u0648\u0628\u200C\u0645\u0627\u0646\u06CC\u0627")), React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
  }, featureCards.map((item, i) => React.createElement(motion.div, {
    key: item.title,
    initial: {
      opacity: 0,
      y: 18
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      delay: i * .06
    },
    className: "wm-feature-card"
  }, React.createElement(Icon, {
    name: item.icon,
    size: 24
  }), React.createElement("h3", null, item.title), React.createElement("p", null, item.desc))))), React.createElement("section", {
    className: "wm-split-banner mb-20"
  }, React.createElement("div", {
    className: "wm-banner-copy"
  }, React.createElement("span", null, "\u0633\u0627\u062F\u0647\u060C \u0647\u0648\u0634\u0645\u0646\u062F \u06CC\u0627 \u062A\u0631\u06A9\u06CC\u0628\u06CC"), React.createElement("h2", null, "\u0633\u0627\u06CC\u062A \u0631\u0627 \u0645\u062A\u0646\u0627\u0633\u0628 \u0628\u0627 \u0647\u062F\u0641 \u0634\u0645\u0627 \u0645\u06CC\u200C\u0633\u0627\u0632\u06CC\u0645."), React.createElement("p", null, "\u0627\u06AF\u0631 \u06CC\u06A9 \u0648\u0628\u0633\u0627\u06CC\u062A \u0633\u0631\u06CC\u0639 \u0648 \u0634\u06CC\u06A9 \u06A9\u0627\u0641\u06CC \u0628\u0627\u0634\u062F\u060C \u0633\u0627\u062F\u0647 \u0648 \u062A\u0645\u06CC\u0632 \u0627\u062C\u0631\u0627 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645. \u0627\u06AF\u0631 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u067E\u0627\u0633\u062E\u200C\u06AF\u0648\u06CC\u06CC\u060C \u062B\u0628\u062A \u0644\u06CC\u062F \u06CC\u0627 \u0627\u062A\u0648\u0645\u0627\u0633\u06CC\u0648\u0646 \u062F\u0627\u0631\u06CC\u062F\u060C \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC \u0631\u0627 \u062F\u0642\u06CC\u0642 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0627\u0636\u0627\u0641\u0647 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645.")), React.createElement("div", {
    className: "wm-banner-art"
  }, React.createElement("div", {
    className: "wm-art-window"
  }, React.createElement("img", {
    src: "../assets/template-corporate-ai.jpg?v=3",
    alt: "\u0646\u0645\u0648\u0646\u0647 \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0633\u0627\u06CC\u062A \u0647\u0648\u0634\u0645\u0646\u062F",
    loading: "lazy",
    decoding: "async"
  })), React.createElement("div", {
    className: "wm-art-chip chip-1"
  }, React.createElement(Icon, {
    name: "bot"
  }), " \u067E\u0627\u0633\u062E\u200C\u06AF\u0648\u06CC\u06CC \u0647\u0648\u0634\u0645\u0646\u062F"), React.createElement("div", {
    className: "wm-art-chip chip-2"
  }, React.createElement(Icon, {
    name: "search-check"
  }), " \u0622\u0645\u0627\u062F\u0647 \u0633\u0626\u0648"))), React.createElement("div", {
    className: "wm-block-heading"
  }, React.createElement("span", null, "CAPABILITIES"), React.createElement("h2", null, "\u0642\u0627\u0628\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0633\u0627\u06CC\u062A \u0634\u0645\u0627 \u0631\u0627 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC\u200C\u062A\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F")), React.createElement(Capability3DSlider, {
    items: [{
      img: '../assets/home-cap-design-v2.jpg',
      icon: 'pen-tool',
      tag: 'Design System',
      title: 'طراحی اختصاصی با هویت بصری منظم',
      desc: 'رنگ، چیدمان، کامپوننت و تجربه کاربری هماهنگ با برند شما.'
    }, {
      img: '../assets/home-cap-panel-v2.jpg',
      icon: 'layout-dashboard',
      tag: 'Control Panel',
      title: 'پنل و فرم‌های قابل مدیریت',
      desc: 'درخواست‌ها، پیام‌ها، قالب‌ها و محتوا از پنل کنترل می‌شوند.'
    }, {
      img: '../assets/home-cap-ai-v2.jpg',
      icon: 'bot',
      tag: 'Smart Automation',
      title: 'اتصال هوشمند به مسیر فروش',
      desc: 'چت هوشمند، ثبت لید و پاسخ‌گویی اولیه برای کاهش اتلاف زمان.'
    }]
  }), React.createElement("div", {
    className: "wm-block-heading wm-process-heading"
  }, React.createElement("span", null, "PROJECT ROADMAP"), React.createElement("h2", null, "\u0645\u0633\u06CC\u0631 \u0627\u062C\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647\u060C \u0634\u0641\u0627\u0641 \u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0628\u0647\u200C\u0645\u0631\u062D\u0644\u0647")), React.createElement(ProcessExperience, {
    items: process
  }), React.createElement("section", {
    className: "wm-works-section-v2 mb-20"
  }, React.createElement("div", {
    className: "wm-section-head wm-works-head-v2"
  }, React.createElement("div", null, React.createElement("span", null, "SELECTED WORKS"), React.createElement("h2", null, "\u0646\u0645\u0648\u0646\u0647\u200C\u06A9\u0627\u0631\u0647\u0627\u06CC \u062A\u0627\u0632\u0647")), React.createElement("div", {
    className: "wm-work-hint"
  }, React.createElement(Icon, {
    name: "mouse-pointer-click",
    size: 16
  }), " \u0631\u0648\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0628\u0632\u0646\u06CC\u062F"), React.createElement("button", {
    onClick: () => goToPage('portfolio'),
    className: "wm-secondary-btn hidden md:flex"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ", React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }))), React.createElement("div", {
    className: "wm-work-gallery-v2"
  }, [{
    title: 'ریمچ کافی',
    tag: 'منوی دیجیتال کافه',
    img: '../assets/portfolio-rematch-cafe.jpg?v=4',
    link: 'https://rematchcoffee.ir',
    accent: '#84cc16',
    desc: 'منوی دیجیتال سریع، موبایل‌فرست و مناسب تجربه سفارش در کافه.'
  }, {
    title: 'ارمغان سبز اروند',
    tag: 'وبسایت شرکتی کشاورزی',
    img: '../assets/portfolio-armaghan-agri.jpg?v=4',
    link: 'https://armaghansabzarvand.com',
    accent: '#10b981',
    desc: 'وبسایت شرکتی با هویت بصری روشن، ساختار منظم و معرفی حرفه‌ای محصولات.'
  }].map((p, i) => React.createElement(motion.a, {
    key: p.title,
    href: p.link,
    target: "_blank",
    rel: "noopener noreferrer",
    initial: {
      opacity: 0,
      y: 26
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      delay: i * .1
    },
    className: "wm-work-editorial-card",
    style: {
      '--work-accent': p.accent
    }
  }, React.createElement("div", {
    className: "wm-work-full-cover"
  }, React.createElement("img", {
    src: p.img,
    alt: p.title,
    loading: "lazy",
    decoding: "async"
  })), React.createElement("div", {
    className: "wm-work-info-v2"
  }, React.createElement("span", null, p.tag), React.createElement("h3", null, p.title), React.createElement("p", null, p.desc), React.createElement("div", {
    className: "wm-work-action-v2"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647 ", React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  })))))), React.createElement("div", {
    className: "wm-work-swipe-cue md:hidden"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("b", null, "\u0628\u0631\u0627\u06CC \u062F\u06CC\u062F\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0639\u062F\u06CC \u0628\u06A9\u0634\u06CC\u062F")), React.createElement("button", {
    onClick: () => goToPage('portfolio'),
    className: "wm-mobile-more-works md:hidden"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 \u0646\u0645\u0648\u0646\u0647\u200C\u06A9\u0627\u0631\u0647\u0627 ", React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }))), React.createElement("section", {
    className: "wm-template-cta mb-10"
  }, React.createElement("div", null, React.createElement("span", null, "READY TEMPLATES"), React.createElement("h2", null, "\u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639 \u0628\u0627 \u0642\u0627\u0644\u0628\u200C\u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u062A\u0648\u0633\u0639\u0647"), React.createElement("p", null, "\u0628\u0631\u0627\u06CC \u0628\u0648\u062F\u062C\u0647 \u06CC\u0627 \u0632\u0645\u0627\u0646 \u0645\u062D\u062F\u0648\u062F\u061B \u0642\u0627\u0644\u0628 \u0622\u0645\u0627\u062F\u0647\u060C \u0638\u0627\u0647\u0631 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0648 \u0642\u0627\u0628\u0644\u06CC\u062A \u0627\u0631\u062A\u0642\u0627 \u062F\u0631 \u0622\u06CC\u0646\u062F\u0647."), React.createElement("button", {
    onClick: () => goToPage('templates'),
    className: "wm-primary-btn"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0642\u0627\u0644\u0628\u200C\u0647\u0627 ", React.createElement(Icon, {
    name: "layout-template",
    size: 19
  }))), React.createElement("img", {
    src: "../assets/template-shop-ai.jpg?v=4",
    alt: "\u0642\u0627\u0644\u0628 \u0622\u0645\u0627\u062F\u0647 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647\u06CC",
    loading: "lazy",
    decoding: "async"
  })));
};
renderPage('home', HomePage);