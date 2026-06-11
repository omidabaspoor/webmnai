const ContactPage = ({
  t
}) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    customBusiness: '',
    siteType: 'simple',
    budget: '',
    timeline: '',
    description: '',
    idea: ''
  });
  const siteTypes = [{
    id: 'simple',
    title: 'سایت ساده و حرفه‌ای',
    icon: 'layout',
    desc: 'معرفی کسب‌وکار با ظاهر شیک و سرعت بالا'
  }, {
    id: 'smart',
    title: 'وبسایت هوشمند',
    icon: 'bot',
    desc: 'اتصال به چت‌بات، فرم هوشمند و اتوماسیون'
  }, {
    id: 'shop',
    title: 'فروشگاه / سفارش آنلاین',
    icon: 'shopping-bag',
    desc: 'محصولات، سفارش، پرداخت و پنل مدیریت'
  }, {
    id: 'custom',
    title: 'مورد دیگر',
    icon: 'pencil',
    desc: 'نوع پروژه را خودتان بنویسید'
  }];
  const budgets = ['زیر ۱۰ میلیون', '۱۰ تا ۳۰ میلیون', '۳۰ تا ۷۰ میلیون', '۷۰ تا ۱۵۰ میلیون', 'بالای ۱۵۰ میلیون'];
  const timelines = ['فوری', '۲ تا ۴ هفته', '۱ تا ۲ ماه', 'فعلاً مشاوره می‌خواهم'];
  const steps = ['اطلاعات تماس', 'نوع پروژه', 'بودجه و زمان', 'توضیحات'];
  const valid = () => {
    if (step === 0) return formData.name.length > 2 && formData.phone.length > 9;
    if (step === 1) return formData.siteType && (formData.business || formData.customBusiness || formData.siteType !== 'custom');
    if (step === 2) return formData.budget;
    return formData.description.length > 8;
  };
  const submit = async () => {
    setLoading(true);
    const payload = {
      name: formData.name,
      phone: formData.phone,
      business: `${formData.business || formData.customBusiness || 'نامشخص'} | ${siteTypes.find(x => x.id === formData.siteType)?.title}`,
      description: formData.description,
      budget: `${formData.budget} | زمان: ${formData.timeline || 'نامشخص'}`,
      idea: formData.idea || 'جزئیات بیشتر در تماس بررسی شود.'
    };
    try {
      const res = await fetch('../admin/api.php?action=submit_collaboration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      setSuccess(true);
    } catch (e) {
      alert('ارسال فرم با خطا مواجه شد. لطفاً دوباره تلاش کنید.');
    }
    setLoading(false);
  };
  const next = () => {
    if (!valid()) return alert('لطفاً اطلاعات این مرحله را کامل کنید.');
    step < 3 ? setStep(step + 1) : submit();
  };
  if (success) return React.createElement("div", {
    className: "max-w-4xl mx-auto pt-32 pb-20 px-4 min-h-screen flex items-center justify-center"
  }, React.createElement("div", {
    className: "text-center rounded-[2rem] bg-surface/50 border border-accent/20 p-10"
  }, React.createElement("div", {
    className: "w-20 h-20 mx-auto mb-5 bg-green-500 rounded-3xl flex items-center justify-center text-white"
  }, React.createElement(Icon, {
    name: "check",
    size: 40
  })), React.createElement("h1", {
    className: "text-3xl font-black text-primary mb-3"
  }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062B\u0628\u062A \u0634\u062F"), React.createElement("p", {
    className: "text-secondary leading-8"
  }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0698\u0647 \u0631\u0633\u06CC\u062F. \u0628\u0631\u0627\u06CC \u0628\u0631\u0631\u0633\u06CC \u0645\u0633\u06CC\u0631 \u0645\u0646\u0627\u0633\u0628 \u0628\u0627 \u0634\u0645\u0627 \u062A\u0645\u0627\u0633 \u0645\u06CC\u200C\u06AF\u06CC\u0631\u06CC\u0645.")));
  return React.createElement("div", {
    className: "max-w-6xl mx-auto pt-32 pb-20 px-4 contact-form"
  }, React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
  }, React.createElement("div", {
    className: "lg:col-span-5 space-y-5 contact-side-panel"
  }, React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold"
  }, React.createElement(Icon, {
    name: "rocket",
    size: 14
  }), " \u0634\u0631\u0648\u0639 \u0647\u0645\u06A9\u0627\u0631\u06CC"), React.createElement("h1", {
    className: "contact-hero-title text-3xl md:text-5xl font-black text-primary"
  }, "\u067E\u0631\u0648\u0698\u0647\u200C\u0627\u062A \u0631\u0627 \u062F\u0642\u06CC\u0642 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u0645"), React.createElement("p", {
    className: "text-secondary contact-hero-sub"
  }, "\u06F4 \u0645\u0631\u062D\u0644\u0647 \u06A9\u0648\u062A\u0627\u0647 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646\u06A9\u0647 \u0645\u0633\u06CC\u0631 \u0645\u0646\u0627\u0633\u0628 \u0633\u0627\u06CC\u062A\u060C \u0632\u0645\u0627\u0646 \u0648 \u0628\u0648\u062F\u062C\u0647 \u0645\u0634\u062E\u0635 \u0634\u0648\u062F."), React.createElement("div", {
    className: "contact-visual-card"
  }, React.createElement("div", {
    className: "contact-visual-orb"
  }, React.createElement(Icon, {
    name: "sparkles",
    size: 28
  })), React.createElement("div", {
    className: "contact-visual-lines"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null))), React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, [['۶ ماه', 'پشتیبانی'], ['SEO', 'زیرساخت'], ['Code', 'اختصاصی'], ['Mobile', 'ریسپانسیو']].map(([a, b]) => React.createElement("div", {
    key: a,
    className: "rounded-2xl bg-surface/40 border border-accent/15 p-4"
  }, React.createElement("div", {
    className: "text-accent font-black text-xl"
  }, a), React.createElement("div", {
    className: "text-secondary text-xs mt-1"
  }, b))))), React.createElement("div", {
    className: "lg:col-span-7 rounded-[2rem] bg-surface/55 border border-accent/15 p-5 md:p-7 shadow-2xl"
  }, React.createElement("div", {
    className: "flex gap-2 mb-7"
  }, steps.map((s, i) => React.createElement("div", {
    key: s,
    className: `h-2 flex-1 rounded-full ${i <= step ? 'bg-accent' : 'bg-white/10'}`
  }))), React.createElement("div", {
    className: "min-h-[360px]"
  }, React.createElement(AnimatePresence, {
    mode: "wait"
  }, React.createElement(motion.div, {
    key: step,
    initial: {
      opacity: 0,
      x: 20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -20
    },
    className: "space-y-4"
  }, React.createElement("h2", {
    className: "text-2xl font-black text-primary mb-4"
  }, steps[step]), step === 0 && React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, React.createElement("input", {
    className: "contact-input",
    placeholder: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC *",
    value: formData.name,
    onChange: e => setFormData({
      ...formData,
      name: e.target.value
    })
  }), React.createElement("input", {
    className: "contact-input",
    placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633 *",
    value: formData.phone,
    onChange: e => setFormData({
      ...formData,
      phone: e.target.value
    })
  }), React.createElement("input", {
    className: "contact-input md:col-span-2",
    placeholder: "\u0646\u0648\u0639 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u061B \u0645\u062B\u0644\u0627\u064B \u06A9\u0627\u0641\u0647\u060C \u0634\u0631\u06A9\u062A\u060C \u0641\u0631\u0648\u0634\u06AF\u0627\u0647",
    value: formData.business,
    onChange: e => setFormData({
      ...formData,
      business: e.target.value
    })
  })), step === 1 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, siteTypes.map(type => React.createElement("button", {
    type: "button",
    key: type.id,
    onClick: () => setFormData({
      ...formData,
      siteType: type.id
    }),
    className: `text-right rounded-2xl border p-4 transition-all ${formData.siteType === type.id ? 'border-accent bg-accent/12' : 'border-accent/15 bg-black/15 hover:border-accent/40'}`
  }, React.createElement("div", {
    className: "flex items-center gap-3 mb-2"
  }, React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center"
  }, React.createElement(Icon, {
    name: type.icon,
    size: 20
  })), React.createElement("div", {
    className: "font-black text-primary"
  }, type.title)), React.createElement("p", {
    className: "text-secondary text-xs leading-7"
  }, type.desc)))), formData.siteType === 'custom' && React.createElement("input", {
    className: "contact-input",
    placeholder: "\u0646\u0648\u0639 \u067E\u0631\u0648\u0698\u0647 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F",
    value: formData.customBusiness,
    onChange: e => setFormData({
      ...formData,
      customBusiness: e.target.value
    })
  })), step === 2 && React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-5"
  }, React.createElement("div", null, React.createElement("label", {
    className: "block text-sm font-black text-primary mb-3"
  }, "\u0628\u0648\u062F\u062C\u0647 \u062D\u062F\u0648\u062F\u06CC *"), React.createElement("div", {
    className: "grid gap-2"
  }, budgets.map(b => React.createElement("button", {
    type: "button",
    key: b,
    onClick: () => setFormData({
      ...formData,
      budget: b
    }),
    className: `p-3 rounded-xl border text-right text-sm font-bold ${formData.budget === b ? 'border-accent bg-accent/10 text-accent' : 'border-accent/15 text-primary'}`
  }, b)))), React.createElement("div", null, React.createElement("label", {
    className: "block text-sm font-black text-primary mb-3"
  }, "\u0632\u0645\u0627\u0646 \u0645\u062F\u0646\u0638\u0631"), React.createElement("div", {
    className: "grid gap-2"
  }, timelines.map(tl => React.createElement("button", {
    type: "button",
    key: tl,
    onClick: () => setFormData({
      ...formData,
      timeline: tl
    }),
    className: `p-3 rounded-xl border text-right text-sm font-bold ${formData.timeline === tl ? 'border-accent bg-accent/10 text-accent' : 'border-accent/15 text-primary'}`
  }, tl))))), step === 3 && React.createElement(React.Fragment, null, React.createElement("textarea", {
    className: "contact-input min-h-[130px]",
    placeholder: "\u0647\u062F\u0641 \u0633\u0627\u06CC\u062A \u0648 \u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u0645\u0647\u0645 \u0631\u0627 \u06A9\u0648\u062A\u0627\u0647 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F *",
    value: formData.description,
    onChange: e => setFormData({
      ...formData,
      description: e.target.value
    })
  }), React.createElement("textarea", {
    className: "contact-input min-h-[100px]",
    placeholder: "\u0646\u0645\u0648\u0646\u0647 \u0633\u0627\u06CC\u062A\u060C \u0627\u062A\u0635\u0627\u0644 \u0628\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC \u06CC\u0627 \u0646\u06A9\u062A\u0647 \u062E\u0627\u0635",
    value: formData.idea,
    onChange: e => setFormData({
      ...formData,
      idea: e.target.value
    })
  }))))), React.createElement("div", {
    className: "flex gap-3 pt-5 border-t border-accent/10"
  }, React.createElement("button", {
    onClick: () => setStep(Math.max(0, step - 1)),
    disabled: step === 0,
    className: "px-5 py-3 rounded-xl bg-white/5 text-secondary font-bold disabled:opacity-40"
  }, "\u0642\u0628\u0644\u06CC"), React.createElement("button", {
    onClick: next,
    disabled: loading,
    className: "flex-1 py-3 rounded-xl bg-white text-black font-black flex items-center justify-center gap-2"
  }, loading ? React.createElement(Icon, {
    name: "loader-2",
    className: "animate-spin"
  }) : step === 3 ? 'ارسال درخواست' : 'مرحله بعد')))));
};
renderPage('contact', ContactPage);