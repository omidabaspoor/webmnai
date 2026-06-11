const ServicesPage = ({
  t
}) => {
  const services = [{
    title: "طراحی سایت اختصاصی",
    icon: "code",
    desc: "یه سایت که دقیقاً مال شما باشه. نه یه قالب آماده که هزار تا جای دیگه هم دیده بشه. از صفر و با دقت طراحی می‌شه.",
    features: ["نمایش عالی روی موبایل، تبلت و کامپیوتر", "سرعت بالا، طوری که مشتری معطل نشه", "ساختار استاندارد و مرتب برای گوگل"]
  }, {
    title: "دستیار هوش مصنوعی",
    icon: "bot",
    desc: "یه دستیار هوشمند که روی سایتتون نصب می‌شه و ۲۴ ساعته به سوال‌های مشتری‌هاتون جواب می‌ده. بدون نیاز به نیروی انسانی اضافه.",
    features: ["آموزش با اطلاعات و مستندات کسب‌وکار شما", "پاسخ‌گویی خودکار و هوشمند به مشتری‌ها", "کمک به فروش بیشتر و ارتباط بهتر"]
  }, {
    title: "بهینه‌سازی برای گوگل",
    icon: "trending-up",
    desc: "سایت شما از همون اول جوری ساخته می‌شه که گوگل دوستش داشته باشه. این یعنی شانس بیشتر برای دیده شدن در جستجوها.",
    features: ["ساختار مرتب و استاندارد کدها", "تنظیمات فنی لازم برای موتورهای جستجو", "بهبود رتبه صفحات مهم سایت شما"]
  }, {
    title: "خودکارسازی فرآیندها",
    icon: "zap",
    desc: "کارهای تکراری که هر روز وقتتون رو می‌گیره؟ ما سیستماتی می‌سازیم که خودکار انجامشون بده. از ثبت سفارش تا پاسخ به مشتری.",
    features: ["اتصال هوش مصنوعی به سیستم‌های داخلی شما", "طراحی فرآیندهای خودکار برای کارهای روزمره", "کاهش هزینه‌ها و صرفه‌جویی در زمان"]
  }];
  return React.createElement("div", {
    className: "max-w-6xl mx-auto pt-32 pb-20 px-4"
  }, React.createElement("div", {
    className: "text-center mb-20"
  }, React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    className: "inline-block mb-4 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold"
  }, "OUR SERVICES"), React.createElement(motion.h1, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.1
    },
    className: "text-4xl md:text-6xl font-black text-primary mb-6"
  }, "\u062E\u062F\u0645\u0627\u062A \u0645\u0627"), React.createElement(motion.p, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.2
    },
    className: "text-xl text-secondary max-w-2xl mx-auto"
  }, "\u0627\u0632 \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u062A\u0627 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC\u060C \u0647\u0631 \u0686\u06CC \u0628\u0631\u0627\u06CC \u062D\u0636\u0648\u0631 \u0622\u0646\u0644\u0627\u06CC\u0646 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F")), React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
  }, services.map((service, i) => React.createElement(motion.div, {
    key: i,
    initial: {
      opacity: 0,
      y: 50
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      delay: i * 0.1
    }
  }, React.createElement(SpotlightCard, {
    className: "h-full p-8 md:p-10 hover:border-accent/30 transition-colors group"
  }, React.createElement("div", {
    className: "flex flex-col h-full"
  }, React.createElement("div", {
    className: "w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/10 border border-accent/20"
  }, React.createElement(Icon, {
    name: service.icon,
    size: 40
  })), React.createElement("h3", {
    className: "text-2xl md:text-3xl font-black text-primary mb-4 group-hover:text-accent transition-colors"
  }, service.title), React.createElement("p", {
    className: "text-secondary text-lg leading-relaxed mb-8 flex-1"
  }, service.desc), React.createElement("div", {
    className: "space-y-3 mb-8"
  }, service.features.map((feature, idx) => React.createElement("div", {
    key: idx,
    className: "service-feature-pill flex items-center gap-3 text-primary/80 p-3 rounded-xl bg-surface/30 border border-white/5"
  }, React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0"
  }, React.createElement(Icon, {
    name: "check",
    size: 16
  })), React.createElement("span", {
    className: "font-medium text-sm md:text-base"
  }, feature)))), React.createElement("button", {
    onClick: () => goToPage('contact'),
    className: "w-full py-4 rounded-xl bg-surface border border-border text-primary font-bold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center gap-2 group/btn"
  }, "\u0634\u0631\u0648\u0639 \u067E\u0631\u0648\u0698\u0647 ", React.createElement(Icon, {
    name: "arrow-left",
    className: "group-hover/btn:-translate-x-1 transition-transform",
    size: 18
  }))))))));
};
renderPage('services', ServicesPage);