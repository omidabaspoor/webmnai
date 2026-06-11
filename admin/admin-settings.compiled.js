const SettingsPanel = ({
  settings,
  setSettings,
  refresh
}) => {
  const [saving, setSaving] = useState(false);
  const [activeGroup, setActiveGroup] = useState('brand');
  const groups = [{
    id: 'brand',
    title: 'برند و تماس',
    icon: 'badge',
    desc: 'اطلاعات هویتی و راه‌های ارتباطی',
    fields: [{
      key: 'brand_name',
      label: 'نام برند',
      placeholder: 'وب‌مانیا'
    }, {
      key: 'phone',
      label: 'شماره تماس',
      placeholder: '+989...'
    }, {
      key: 'telegram',
      label: 'تلگرام',
      placeholder: '@webmania_studio'
    }, {
      key: 'instagram',
      label: 'اینستاگرام',
      placeholder: '@webmania.studio'
    }]
  }, {
    id: 'hero',
    title: 'هیرو و CTA',
    icon: 'sparkles',
    desc: 'کنترل بخش اول صفحه اصلی',
    fields: [{
      key: 'hero_title_1',
      label: 'تیتر اول هیرو',
      placeholder: 'سایتت رو'
    }, {
      key: 'hero_title_2',
      label: 'تیتر دوم هیرو',
      placeholder: 'هوشمند بساز'
    }, {
      key: 'hero_desc',
      label: 'توضیح کوتاه هیرو',
      type: 'textarea',
      placeholder: 'توضیح کوتاه و جذاب...'
    }, {
      key: 'main_cta',
      label: 'متن دکمه اصلی',
      placeholder: 'شروع مشاوره'
    }]
  }, {
    id: 'pricing',
    title: 'قیمت‌ها',
    icon: 'banknote',
    desc: 'قیمت بسته‌ها و قالب‌ها',
    fields: [{
      key: 'price_simple',
      label: 'شروع قیمت سایت ساده',
      placeholder: 'از ۹,۹۰۰,۰۰۰ تومان'
    }, {
      key: 'price_smart',
      label: 'شروع قیمت سایت هوشمند',
      placeholder: 'از ۱۹,۹۰۰,۰۰۰ تومان'
    }, {
      key: 'price_shop_template',
      label: 'قیمت قالب فروشگاهی',
      placeholder: '۶,۹۰۰,۰۰۰ تومان'
    }, {
      key: 'price_company_template',
      label: 'قیمت قالب شرکتی',
      placeholder: '۴,۹۰۰,۰۰۰ تومان'
    }, {
      key: 'price_personal_template',
      label: 'قیمت قالب شخصی',
      placeholder: '۳,۴۰۰,۰۰۰ تومان'
    }, {
      key: 'support_months',
      label: 'مدت پشتیبانی رایگان',
      placeholder: '۶ ماه'
    }]
  }, {
    id: 'seo',
    title: 'سئو و GEO',
    icon: 'search-check',
    desc: 'اطلاعات معرفی برای گوگل و AIها',
    fields: [{
      key: 'seo_title',
      label: 'عنوان سئو',
      placeholder: 'وب‌مانیا | طراحی سایت اختصاصی و هوشمند'
    }, {
      key: 'seo_description',
      label: 'توضیحات سئو',
      type: 'textarea',
      placeholder: 'توضیح کامل برای موتورهای جستجو...'
    }, {
      key: 'seo_keywords',
      label: 'کلمات کلیدی',
      placeholder: 'طراحی سایت, سایت هوشمند, هوش مصنوعی'
    }, {
      key: 'business_city',
      label: 'محدوده فعالیت',
      placeholder: 'ایران'
    }]
  }, {
    id: 'visual',
    title: 'ظاهر و امکانات',
    icon: 'palette',
    desc: 'تنظیمات نمایشی و قابلیت‌ها',
    fields: [{
      key: 'accent_color',
      label: 'رنگ اصلی سایت',
      placeholder: '#8b5cf6'
    }, {
      key: 'chat_enabled',
      label: 'چت هوشمند فعال باشد؟',
      placeholder: 'yes / no'
    }, {
      key: 'portfolio_featured_1',
      label: 'نمونه‌کار ویژه اول',
      placeholder: 'ریمچ کافی'
    }, {
      key: 'portfolio_featured_2',
      label: 'نمونه‌کار ویژه دوم',
      placeholder: 'ارمغان سبز اروند'
    }]
  }];
  const group = groups.find(g => g.id === activeGroup) || groups[0];
  const save = async e => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`${API_URL}?action=save_settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'save failed');
      alert('تنظیمات ذخیره شد');
      refresh && refresh();
    } catch (err) {
      alert('خطا در ذخیره تنظیمات');
    }
    setSaving(false);
  };
  return React.createElement("div", {
    className: "admin-settings-shell"
  }, React.createElement("aside", {
    className: "admin-settings-tabs"
  }, React.createElement("div", {
    className: "admin-settings-title"
  }, React.createElement(Icon, {
    name: "sliders-horizontal"
  }), " \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u06CC\u062A"), groups.map(g => React.createElement("button", {
    key: g.id,
    onClick: () => setActiveGroup(g.id),
    className: activeGroup === g.id ? 'active' : ''
  }, React.createElement(Icon, {
    name: g.icon,
    size: 18
  }), React.createElement("span", null, g.title)))), React.createElement("form", {
    onSubmit: save,
    className: "admin-settings-form"
  }, React.createElement("div", {
    className: "admin-settings-head"
  }, React.createElement("div", null, React.createElement("h3", null, React.createElement(Icon, {
    name: group.icon
  }), " ", group.title), React.createElement("p", null, group.desc)), React.createElement("button", {
    disabled: saving
  }, saving ? React.createElement(Icon, {
    name: "loader-2",
    className: "animate-spin"
  }) : React.createElement(Icon, {
    name: "save"
  }), " \u0630\u062E\u06CC\u0631\u0647")), React.createElement("div", {
    className: "admin-settings-grid"
  }, group.fields.map(field => React.createElement("div", {
    key: field.key,
    className: field.type === 'textarea' ? 'wide' : ''
  }, React.createElement("label", null, field.label), field.type === 'textarea' ? React.createElement("textarea", {
    value: settings[field.key] || '',
    onChange: e => setSettings({
      ...settings,
      [field.key]: e.target.value
    }),
    placeholder: field.placeholder
  }) : React.createElement("input", {
    value: settings[field.key] || '',
    onChange: e => setSettings({
      ...settings,
      [field.key]: e.target.value
    }),
    placeholder: field.placeholder
  }))))));
};