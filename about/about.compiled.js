const AboutPage = ({
  t
}) => {
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
  }, "ABOUT US"), React.createElement(motion.h1, {
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
  }, "\u0647\u0645\u0631\u0627\u0647 \u0634\u0645\u0627 \u062F\u0631 \u0645\u0633\u06CC\u0631 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644"), React.createElement(motion.p, {
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
    className: "text-xl md:text-2xl text-accent font-bold leading-relaxed max-w-3xl mx-auto"
  }, "\u0648\u0628\u200C\u0645\u0627\u0646\u06CC\u0627\u061B \u062A\u06CC\u0645\u06CC \u06A9\u0648\u0686\u06A9 \u0648\u0644\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0639\u0627\u0634\u0642 \u0633\u0627\u062E\u062A\u0646 \u0686\u06CC\u0632\u0647\u0627\u06CC \u062E\u0648\u0628\u0647")), React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    className: "mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-white/10 relative overflow-hidden"
  }, React.createElement("div", {
    className: "absolute -left-16 -top-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"
  }), React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, React.createElement("div", {
    className: "lg:col-span-8 space-y-4"
  }, React.createElement("h2", {
    className: "text-2xl md:text-3xl font-black text-primary"
  }, "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0648 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC\u060C \u0632\u06CC\u0631 \u06CC\u06A9 \u0633\u0642\u0641"), React.createElement("p", {
    className: "text-secondary text-base md:text-lg leading-relaxed text-justify"
  }, "\u0645\u0627 \u062F\u0631 \u0648\u0628\u200C\u0645\u0627\u0646\u06CC\u0627 \u062F\u0648 \u062A\u0627 \u06A9\u0627\u0631 \u0627\u0635\u0644\u06CC \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u062F\u06CC\u0645: \u06CC\u06A9\u06CC \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0648 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u0628\u0631\u0627\u06CC \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641\u060C \u0648 \u06CC\u06A9\u06CC \u0633\u0627\u062E\u062A \u062F\u0633\u062A\u06CC\u0627\u0631\u0647\u0627\u06CC \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC \u06A9\u0647 \u0628\u062A\u0648\u0646\u0646 \u06A9\u0627\u0631\u0647\u0627\u06CC\u06CC \u0645\u062B\u0644 \u067E\u0627\u0633\u062E \u0628\u0647 \u0645\u0634\u062A\u0631\u06CC\u200C\u0647\u0627 \u0631\u0648 \u062E\u0648\u062F\u06A9\u0627\u0631 \u0627\u0646\u062C\u0627\u0645 \u0628\u062F\u0646. \u0627\u06CC\u0646 \u062F\u0648 \u062A\u0627 \u062E\u062F\u0645\u062A \u06A9\u0646\u0627\u0631 \u0647\u0645 \u0628\u0627\u0639\u062B \u0645\u06CC\u200C\u0634\u0646 \u0633\u0627\u06CC\u062A \u0634\u0645\u0627 \u0641\u0642\u0637 \u06CC\u0647 \u0635\u0641\u062D\u0647 \u0642\u0634\u0646\u06AF \u0646\u0628\u0627\u0634\u0647\u060C \u0628\u0644\u06A9\u0647 \u06CC\u0647 \u0627\u0628\u0632\u0627\u0631 \u0648\u0627\u0642\u0639\u06CC \u0628\u0631\u0627\u06CC \u0631\u0634\u062F \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u062A\u0648\u0646 \u0628\u0634\u0647.")), React.createElement("div", {
    className: "lg:col-span-4 flex justify-center"
  }, React.createElement("div", {
    className: "w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-accent/10 border border-accent/30 flex flex-col items-center justify-center text-accent gap-2"
  }, React.createElement(Icon, {
    name: "cpu",
    size: 48,
    className: "animate-pulse"
  }), React.createElement("span", {
    className: "text-xs font-bold text-primary"
  }, "Web + AI"))))), React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32"
  }, React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: -50
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true
    },
    className: "space-y-6"
  }, React.createElement("h2", {
    className: "text-3xl font-black text-primary"
  }, "\u062F\u0627\u0633\u062A\u0627\u0646 \u0645\u0627"), React.createElement("p", {
    className: "text-lg text-secondary leading-relaxed text-justify"
  }, "\u0647\u0645\u0647\u200C\u0686\u06CC\u0632 \u0627\u0632 \u06CC\u0647 \u0639\u0644\u0627\u0642\u0647 \u0633\u0627\u062F\u0647 \u0634\u0631\u0648\u0639 \u0634\u062F: \u0633\u0627\u062E\u062A\u0646 \u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0648\u0627\u0642\u0639\u0627\u064B \u06A9\u0627\u0631 \u06A9\u0646\u0646. \u0646\u0647 \u0641\u0642\u0637 \u0642\u0634\u0646\u06AF \u0628\u0627\u0634\u0646\u060C \u0628\u0644\u06A9\u0647 \u0628\u062A\u0648\u0646\u0646 \u0628\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u0647\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u0646. \u0645\u0627 \u062F\u06CC\u062F\u06CC\u0645 \u062E\u06CC\u0644\u06CC \u0627\u0632 \u0634\u0631\u06A9\u062A\u200C\u0647\u0627 \u0645\u062C\u0628\u0648\u0631\u0646 \u0628\u0631\u0627\u06CC \u0633\u0627\u06CC\u062A \u0631\u0641\u062A\u0646 \u067E\u06CC\u0634 \u06CC\u0647 \u062A\u06CC\u0645\u060C \u0628\u0631\u0627\u06CC \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC \u067E\u06CC\u0634 \u06CC\u0647 \u062A\u06CC\u0645 \u062F\u06CC\u06AF\u0647\u060C \u0648 \u0628\u0631\u0627\u06CC \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u067E\u06CC\u0634 \u06CC\u0647 \u062A\u06CC\u0645 \u0633\u0648\u0645. \u0645\u0627 \u0627\u0648\u0645\u062F\u06CC\u0645 \u0647\u0645\u0647 \u0627\u06CC\u0646\u0627 \u0631\u0648 \u06CC\u0647 \u062C\u0627 \u062C\u0645\u0639 \u06A9\u0631\u062F\u06CC\u0645."), React.createElement("div", {
    className: "p-6 rounded-2xl bg-surface/50 border border-white/10"
  }, React.createElement("div", {
    className: "flex items-center gap-3 mb-3"
  }, React.createElement(Icon, {
    name: "sparkles",
    className: "text-accent",
    size: 24
  }), React.createElement("span", {
    className: "font-bold text-primary"
  }, "\u0686\u0647 \u06A9\u0627\u0631\u0647\u0627\u06CC\u06CC \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u062F\u06CC\u0645\u061F")), React.createElement("ul", {
    className: "space-y-3 text-secondary text-sm"
  }, React.createElement("li", {
    className: "flex items-center gap-2"
  }, React.createElement("span", {
    className: "w-1.5 h-1.5 bg-accent rounded-full"
  }), React.createElement("strong", null, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A:"), " \u0633\u0627\u06CC\u062A \u0627\u062E\u062A\u0635\u0627\u0635\u06CC\u060C \u0633\u0631\u06CC\u0639 \u0648 \u062E\u0648\u0634\u06AF\u0644 \u06A9\u0647 \u0631\u0648 \u0647\u0631 \u062F\u0633\u062A\u06AF\u0627\u0647\u06CC \u0639\u0627\u0644\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0628\u0634\u0647."), React.createElement("li", {
    className: "flex items-center gap-2"
  }, React.createElement("span", {
    className: "w-1.5 h-1.5 bg-accent rounded-full"
  }), React.createElement("strong", null, "\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC:"), " \u0633\u0627\u062E\u062A \u0686\u062A\u200C\u0628\u0627\u062A \u0648 \u062F\u0633\u062A\u06CC\u0627\u0631 \u0647\u0648\u0634\u0645\u0646\u062F \u06A9\u0647 \u06F2\u06F4 \u0633\u0627\u0639\u062A\u0647 \u067E\u0627\u0633\u062E\u06AF\u0648\u06CC \u0645\u0634\u062A\u0631\u06CC\u200C\u0647\u0627\u062A\u0648\u0646 \u0628\u0627\u0634\u0647."), React.createElement("li", {
    className: "flex items-center gap-2"
  }, React.createElement("span", {
    className: "w-1.5 h-1.5 bg-accent rounded-full"
  }), React.createElement("strong", null, "\u062E\u0648\u062F\u06A9\u0627\u0631\u0633\u0627\u0632\u06CC:"), " \u06A9\u0627\u0631\u0647\u0627\u06CC \u062A\u06A9\u0631\u0627\u0631\u06CC \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u062A\u0648\u0646 \u0631\u0648 \u0628\u0647 \u0633\u06CC\u0633\u062A\u0645 \u0645\u06CC\u200C\u0633\u067E\u0627\u0631\u06CC\u0645 \u062A\u0627 \u0634\u0645\u0627 \u0648\u0642\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F.")))), React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: 50
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true
    },
    className: "space-y-6"
  }, React.createElement("h2", {
    className: "text-3xl font-black text-primary"
  }, "\u0645\u0627\u0645\u0648\u0631\u06CC\u062A \u0645\u0627"), React.createElement("p", {
    className: "text-lg text-secondary leading-relaxed text-justify"
  }, "\u0645\u06CC\u200C\u062E\u0648\u0627\u06CC\u0645 \u0645\u0633\u06CC\u0631 \u0648\u0631\u0648\u062F \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u0647\u0627 \u0628\u0647 \u062F\u0646\u06CC\u0627\u06CC \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0631\u0648 \u0633\u0627\u062F\u0647 \u0648 \u0631\u0627\u062D\u062A \u06A9\u0646\u06CC\u0645. \u062E\u06CC\u0644\u06CC\u200C\u0647\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0646 \u062F\u0627\u0634\u062A\u0646 \u06CC\u0647 \u0633\u0627\u06CC\u062A \u062E\u0648\u0628 \u0633\u062E\u062A\u0647 \u06CC\u0627 \u062E\u06CC\u0644\u06CC \u0647\u0632\u06CC\u0646\u0647 \u062F\u0627\u0631\u0647. \u0645\u0627 \u0627\u06CC\u0646\u062C\u0627\u06CC\u06CC\u0645 \u06A9\u0647 \u0646\u0634\u0648\u0646 \u0628\u062F\u06CC\u0645 \u0627\u06CC\u0646\u0637\u0648\u0631 \u0646\u06CC\u0633\u062A. \u06CC\u0647 \u062A\u06CC\u0645 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC\u060C \u06CC\u0647 \u06AF\u0648\u0634 \u0634\u0646\u0648\u0627\u060C \u0648 \u06CC\u0647 \u062E\u0631\u0648\u062C\u06CC \u06A9\u0647 \u0648\u0627\u0642\u0639\u0627\u064B \u0628\u0647 \u062F\u0631\u062F\u062A\u0648\u0646 \u0628\u062E\u0648\u0631\u0647."), React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, [{
    title: 'طراحی کاربرمحور',
    desc: 'سایتی که چشم‌نواز باشه و کار باهاش راحت'
  }, {
    title: 'فناوری هوشمند',
    desc: 'استفاده از هوش مصنوعی برای راحتی بیشتر'
  }, {
    title: 'سرعت و کیفیت',
    desc: 'سایت سریع و بدون باگ، از همون روز اول'
  }, {
    title: 'پشتیبانی واقعی',
    desc: 'بعد از تحویل هم کنارتون هستیم، قول می‌دیم'
  }].map((val, i) => React.createElement("div", {
    key: i,
    className: "about-value-card p-4 rounded-xl bg-surface/30 border border-white/5 hover:border-accent/30"
  }, React.createElement("h4", {
    className: "font-bold text-primary mb-1 text-sm md:text-base"
  }, val.title), React.createElement("p", {
    className: "text-xs text-secondary leading-relaxed"
  }, val.desc)))))), React.createElement("div", {
    className: "mb-32"
  }, React.createElement("h2", {
    className: "text-3xl font-black text-primary mb-12 text-center"
  }, "\u062A\u06CC\u0645 \u0648\u0628\u200C\u0645\u0627\u0646\u06CC\u0627"), React.createElement("p", {
    className: "text-center text-secondary mb-12 max-w-2xl mx-auto"
  }, "\u0645\u0627 \u06CC\u0647 \u062A\u06CC\u0645 \u062F\u0648 \u0646\u0641\u0631\u0647\u200C\u0627\u06CC\u0645. \u0634\u0627\u06CC\u062F \u06A9\u0645 \u0628\u0647 \u0646\u0638\u0631 \u0628\u06CC\u0627\u06CC\u0645\u060C \u0648\u0644\u06CC \u0647\u0631 \u06A9\u062F\u0648\u0645\u0645\u0648\u0646 \u062A\u0648\u06CC \u06A9\u0627\u0631\u0645\u0648\u0646 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC\u200C\u0627\u06CC\u0645 \u0648 \u0628\u0627 \u0627\u0646\u0631\u0698\u06CC \u06A9\u0627\u0645\u0644 \u0631\u0648\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u062A\u0648\u0646 \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645."), React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8"
  }, [{
    name: 'امید',
    role: 'توسعه‌دهنده و متخصص هوش مصنوعی',
    icon: 'code'
  }, {
    name: 'یاسین',
    role: 'طراح UI/UX و مدیر محصول',
    icon: 'palette'
  }].map((member, i) => React.createElement(motion.div, {
    key: i,
    initial: {
      opacity: 0,
      y: 30
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
    },
    className: "text-center p-8 rounded-3xl bg-surface/30 border border-white/5"
  }, React.createElement("div", {
    className: "w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center text-accent"
  }, React.createElement(Icon, {
    name: member.icon,
    size: 40
  })), React.createElement("h3", {
    className: "text-xl font-bold text-primary mb-1"
  }, member.name), React.createElement("p", {
    className: "text-secondary text-sm"
  }, member.role))))), React.createElement("div", {
    className: "text-center"
  }, React.createElement(motion.button, {
    whileHover: {
      scale: 1.05
    },
    whileTap: {
      scale: 0.95
    },
    onClick: () => goToPage('contact'),
    className: "px-10 py-5 bg-accent text-white rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(139,92,246,0.3)]"
  }, "\u0628\u06CC\u0627 \u0628\u0627 \u0647\u0645 \u0635\u062D\u0628\u062A \u06A9\u0646\u06CC\u0645")));
};
renderPage('about', AboutPage);