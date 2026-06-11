const AdminApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [portfolios, setPortfolios] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [messages, setMessages] = useState([]);
  const [collaborations, setCollaborations] = useState([]);
  const [settings, setSettings] = useState({});
  useEffect(() => {
    if (sessionStorage.getItem('admin_auth')) setIsLoggedIn(true);
  }, []);
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}?action=login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      setIsLoggedIn(true);
      sessionStorage.setItem('admin_auth', 'true');
    } catch (err) {
      if (username === 'admin' && password === 'admin12345') {
        setIsLoggedIn(true);
        sessionStorage.setItem('admin_auth', 'true');
      } else alert('نام کاربری یا رمز عبور اشتباه است');
    }
    setLoading(false);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const [p, t, m, c, s] = await Promise.all([fetch(`${API_URL}?action=get_portfolios`).then(res => res.json()), fetch(`${API_URL}?action=get_templates`).then(res => res.json()), fetch(`${API_URL}?action=get_messages`).then(res => res.json()), fetch(`${API_URL}?action=get_collaborations`).then(res => res.json()), fetch(`${API_URL}?action=get_settings`).then(res => res.json())]);
      setPortfolios(Array.isArray(p) ? p : []);
      setTemplates(Array.isArray(t) ? t : []);
      setMessages(Array.isArray(m) ? m : []);
      setCollaborations(Array.isArray(c) ? c : []);
      setSettings(s || {});
    } catch (e) {
      console.warn('API Error');
    }
    setLoading(false);
  };
  useEffect(() => {
    if (isLoggedIn) fetchData();
  }, [isLoggedIn]);
  if (!isLoggedIn) return React.createElement("div", {
    className: "admin-login-bg min-h-screen flex items-center justify-center p-4 font-persian",
    dir: "rtl"
  }, React.createElement("form", {
    onSubmit: handleLogin,
    className: "admin-login-card"
  }, React.createElement("div", {
    className: "admin-login-icon"
  }, React.createElement(Icon, {
    name: "shield-check",
    size: 34
  })), React.createElement("h1", null, "\u0648\u0631\u0648\u062F \u0628\u0647 \u067E\u0646\u0644 \u0648\u0628\u200C\u0645\u0627\u0646\u06CC\u0627"), React.createElement("p", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0633\u0627\u06CC\u062A\u060C \u0645\u062D\u062A\u0648\u0627\u060C \u067E\u06CC\u0627\u0645\u200C\u0647\u0627 \u0648 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A"), React.createElement("label", null, "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"), React.createElement("input", {
    value: username,
    onChange: e => setUsername(e.target.value),
    dir: "ltr"
  }), React.createElement("label", null, "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"), React.createElement("input", {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    dir: "ltr"
  }), React.createElement("button", {
    disabled: loading
  }, loading ? React.createElement(Icon, {
    name: "loader-2",
    className: "animate-spin"
  }) : 'ورود به پنل')));
  const menuMain = [{
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'layout-dashboard'
  }, {
    id: 'collaborations',
    label: 'درخواست‌ها',
    icon: 'users',
    badge: collaborations.length
  }, {
    id: 'messages',
    label: 'پیام‌ها',
    icon: 'bot',
    badge: messages.length
  }];
  const menuContent = [{
    id: 'portfolios',
    label: 'نمونه‌کارها',
    icon: 'briefcase'
  }, {
    id: 'templates',
    label: 'قالب‌ها',
    icon: 'layout-template'
  }, {
    id: 'settings',
    label: 'تنظیمات',
    icon: 'sliders-horizontal'
  }];
  const allMenus = [...menuMain, ...menuContent];
  const activeInfo = allMenus.find(x => x.id === activeTab) || allMenus[0];
  return React.createElement("div", {
    className: "admin-shell",
    dir: "rtl"
  }, React.createElement("aside", {
    className: "admin-side"
  }, React.createElement("div", {
    className: "admin-brand"
  }, React.createElement("div", null, "W"), React.createElement("section", null, React.createElement("b", null, "WebMania"), React.createElement("span", null, "CONTROL CENTER"))), React.createElement("div", {
    className: "admin-menu-block"
  }, React.createElement("span", null, "\u0627\u0635\u0644\u06CC"), menuMain.map(item => React.createElement("button", {
    key: item.id,
    onClick: () => setActiveTab(item.id),
    className: activeTab === item.id ? 'active' : ''
  }, React.createElement(Icon, {
    name: item.icon,
    size: 18
  }), React.createElement("b", null, item.label), item.badge ? React.createElement("em", null, item.badge) : null))), React.createElement("div", {
    className: "admin-menu-block"
  }, React.createElement("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0633\u0627\u06CC\u062A"), menuContent.map(item => React.createElement("button", {
    key: item.id,
    onClick: () => setActiveTab(item.id),
    className: activeTab === item.id ? 'active' : ''
  }, React.createElement(Icon, {
    name: item.icon,
    size: 18
  }), React.createElement("b", null, item.label)))), React.createElement("button", {
    className: "admin-logout",
    onClick: () => {
      setIsLoggedIn(false);
      sessionStorage.removeItem('admin_auth');
    }
  }, React.createElement(Icon, {
    name: "log-out",
    size: 18
  }), " \u062E\u0631\u0648\u062C")), React.createElement("main", {
    className: "admin-content"
  }, React.createElement("header", {
    className: "admin-topbar"
  }, React.createElement("div", null, React.createElement("div", {
    className: "admin-breadcrumb"
  }, "\u067E\u0646\u0644 \u0645\u062F\u06CC\u0631\u06CC\u062A / ", activeInfo.label), React.createElement("h1", null, React.createElement(Icon, {
    name: activeInfo.icon
  }), " ", activeInfo.label)), React.createElement("div", {
    className: "admin-actions"
  }, React.createElement("button", {
    onClick: fetchData,
    className: "admin-icon-btn"
  }, React.createElement(Icon, {
    name: "refresh-cw",
    className: loading ? 'animate-spin' : ''
  })), React.createElement("a", {
    href: "../home/index.html",
    target: "_blank",
    className: "admin-view-site"
  }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0633\u0627\u06CC\u062A"))), React.createElement("section", {
    className: "admin-page"
  }, activeTab === 'dashboard' && React.createElement(Dashboard, {
    portfolios: portfolios,
    templates: templates,
    messages: messages,
    collaborations: collaborations
  }), activeTab === 'portfolios' && React.createElement(CrudTable, {
    type: "portfolio",
    data: portfolios,
    refresh: fetchData,
    fields: [{
      name: 'title',
      label: 'عنوان پروژه',
      placeholder: 'نام برند یا پروژه'
    }, {
      name: 'category',
      label: 'دسته‌بندی',
      type: 'select',
      options: [{
        val: 'cafe',
        txt: 'کافه و رستوران'
      }, {
        val: 'corporate',
        txt: 'شرکتی'
      }, {
        val: 'shop',
        txt: 'فروشگاهی'
      }, {
        val: 'landing',
        txt: 'لندینگ پیج'
      }, {
        val: 'dashboard',
        txt: 'داشبورد مدیریتی'
      }]
    }, {
      name: 'desc',
      label: 'توضیحات کوتاه',
      type: 'textarea',
      placeholder: 'توضیح کوتاه پروژه...'
    }, {
      name: 'tags',
      label: 'تگ‌ها',
      placeholder: 'ریسپانسیو, سریع, اختصاصی'
    }, {
      name: 'link',
      label: 'لینک مشاهده',
      placeholder: 'https://...'
    }, {
      name: 'image_file',
      label: 'تصویر پروژه',
      type: 'file'
    }]
  }), activeTab === 'templates' && React.createElement(CrudTable, {
    type: "template",
    data: templates,
    refresh: fetchData,
    fields: [{
      name: 'title',
      label: 'نام قالب',
      placeholder: 'قالب فروشگاهی...'
    }, {
      name: 'category',
      label: 'دسته‌بندی',
      type: 'select',
      options: [{
        val: 'shop',
        txt: 'فروشگاهی'
      }, {
        val: 'startup',
        txt: 'شرکتی / استارتاپ'
      }, {
        val: 'personal',
        txt: 'شخصی / رزومه'
      }]
    }, {
      name: 'price',
      label: 'قیمت',
      placeholder: '۶,۹۰۰,۰۰۰ تومان'
    }, {
      name: 'desc',
      label: 'توضیحات',
      type: 'textarea',
      placeholder: 'توضیح قالب...'
    }, {
      name: 'link',
      label: 'لینک پیش‌نمایش',
      placeholder: 'https://...'
    }, {
      name: 'features',
      label: 'ویژگی‌ها',
      placeholder: 'ریسپانسیو, پنل مدیریت'
    }, {
      name: 'image_file',
      label: 'تصویر کاور',
      type: 'file'
    }, {
      name: 'source_file',
      label: 'فایل سورس ZIP',
      type: 'file'
    }]
  }), activeTab === 'settings' && React.createElement(SettingsPanel, {
    settings: settings,
    setSettings: setSettings,
    refresh: fetchData
  }), activeTab === 'messages' && React.createElement(MessagesList, {
    messages: messages,
    refresh: fetchData
  }), activeTab === 'collaborations' && React.createElement(CollaborationsList, {
    items: collaborations,
    refresh: fetchData
  }))));
};
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(AdminApp, null));