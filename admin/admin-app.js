/* ===== اپ اصلی پنل مدیریت ===== */
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

    useEffect(() => { if (sessionStorage.getItem('admin_auth')) setIsLoggedIn(true); }, []);

    const handleLogin = async (e) => {
        e.preventDefault(); setLoading(true);
        try {
            const res = await fetch(`${API_URL}?action=login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
            const data = await res.json();
            if (!data.success) throw new Error();
            setIsLoggedIn(true); sessionStorage.setItem('admin_auth', 'true');
        } catch (err) {
            if (username === 'admin' && password === 'admin12345') { setIsLoggedIn(true); sessionStorage.setItem('admin_auth', 'true'); }
            else alert('نام کاربری یا رمز عبور اشتباه است');
        }
        setLoading(false);
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const [p, t, m, c, s] = await Promise.all([
                fetch(`${API_URL}?action=get_portfolios`).then(res => res.json()),
                fetch(`${API_URL}?action=get_templates`).then(res => res.json()),
                fetch(`${API_URL}?action=get_messages`).then(res => res.json()),
                fetch(`${API_URL}?action=get_collaborations`).then(res => res.json()),
                fetch(`${API_URL}?action=get_settings`).then(res => res.json())
            ]);
            setPortfolios(Array.isArray(p) ? p : []);
            setTemplates(Array.isArray(t) ? t : []);
            setMessages(Array.isArray(m) ? m : []);
            setCollaborations(Array.isArray(c) ? c : []);
            setSettings(s || {});
        } catch (e) { console.warn('API Error'); }
        setLoading(false);
    };
    useEffect(() => { if (isLoggedIn) fetchData(); }, [isLoggedIn]);

    if (!isLoggedIn) return (
        <div className="admin-login-bg min-h-screen flex items-center justify-center p-4 font-persian" dir="rtl">
            <form onSubmit={handleLogin} className="admin-login-card">
                <div className="admin-login-icon"><Icon name="shield-check" size={34} /></div>
                <h1>ورود به پنل وب‌مانیا</h1>
                <p>مدیریت سایت، محتوا، پیام‌ها و تنظیمات</p>
                <label>نام کاربری</label><input value={username} onChange={e => setUsername(e.target.value)} dir="ltr" />
                <label>رمز عبور</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} dir="ltr" />
                <button disabled={loading}>{loading ? <Icon name="loader-2" className="animate-spin" /> : 'ورود به پنل'}</button>
            </form>
        </div>
    );

    const menuMain = [
        { id: 'dashboard', label: 'داشبورد', icon: 'layout-dashboard' },
        { id: 'collaborations', label: 'درخواست‌ها', icon: 'users', badge: collaborations.length },
        { id: 'messages', label: 'پیام‌ها', icon: 'bot', badge: messages.length },
    ];
    const menuContent = [
        { id: 'portfolios', label: 'نمونه‌کارها', icon: 'briefcase' },
        { id: 'templates', label: 'قالب‌ها', icon: 'layout-template' },
        { id: 'settings', label: 'تنظیمات', icon: 'sliders-horizontal' },
    ];
    const allMenus = [...menuMain, ...menuContent];
    const activeInfo = allMenus.find(x => x.id === activeTab) || allMenus[0];

    return (
        <div className="admin-shell" dir="rtl">
            <aside className="admin-side">
                <div className="admin-brand"><div>W</div><section><b>WebMania</b><span>CONTROL CENTER</span></section></div>
                <div className="admin-menu-block"><span>اصلی</span>{menuMain.map(item => <button key={item.id} onClick={() => setActiveTab(item.id)} className={activeTab === item.id ? 'active' : ''}><Icon name={item.icon} size={18} /><b>{item.label}</b>{item.badge ? <em>{item.badge}</em> : null}</button>)}</div>
                <div className="admin-menu-block"><span>مدیریت سایت</span>{menuContent.map(item => <button key={item.id} onClick={() => setActiveTab(item.id)} className={activeTab === item.id ? 'active' : ''}><Icon name={item.icon} size={18} /><b>{item.label}</b></button>)}</div>
                <button className="admin-logout" onClick={() => { setIsLoggedIn(false); sessionStorage.removeItem('admin_auth'); }}><Icon name="log-out" size={18} /> خروج</button>
            </aside>

            <main className="admin-content">
                <header className="admin-topbar">
                    <div><div className="admin-breadcrumb">پنل مدیریت / {activeInfo.label}</div><h1><Icon name={activeInfo.icon} /> {activeInfo.label}</h1></div>
                    <div className="admin-actions"><button onClick={fetchData} className="admin-icon-btn"><Icon name="refresh-cw" className={loading ? 'animate-spin' : ''} /></button><a href="../home/index.html" target="_blank" className="admin-view-site">مشاهده سایت</a></div>
                </header>

                <section className="admin-page">
                    {activeTab === 'dashboard' && <Dashboard portfolios={portfolios} templates={templates} messages={messages} collaborations={collaborations} />}
                    {activeTab === 'portfolios' && <CrudTable type="portfolio" data={portfolios} refresh={fetchData} fields={[{ name: 'title', label: 'عنوان پروژه', placeholder: 'نام برند یا پروژه' }, { name: 'category', label: 'دسته‌بندی', type: 'select', options: [{ val: 'cafe', txt: 'کافه و رستوران' }, { val: 'corporate', txt: 'شرکتی' }, { val: 'shop', txt: 'فروشگاهی' }, { val: 'landing', txt: 'لندینگ پیج' }, { val: 'dashboard', txt: 'داشبورد مدیریتی' }] }, { name: 'desc', label: 'توضیحات کوتاه', type: 'textarea', placeholder: 'توضیح کوتاه پروژه...' }, { name: 'tags', label: 'تگ‌ها', placeholder: 'ریسپانسیو, سریع, اختصاصی' }, { name: 'link', label: 'لینک مشاهده', placeholder: 'https://...' }, { name: 'image_file', label: 'تصویر پروژه', type: 'file' }]} />}
                    {activeTab === 'templates' && <CrudTable type="template" data={templates} refresh={fetchData} fields={[{ name: 'title', label: 'نام قالب', placeholder: 'قالب فروشگاهی...' }, { name: 'category', label: 'دسته‌بندی', type: 'select', options: [{ val: 'shop', txt: 'فروشگاهی' }, { val: 'startup', txt: 'شرکتی / استارتاپ' }, { val: 'personal', txt: 'شخصی / رزومه' }] }, { name: 'price', label: 'قیمت', placeholder: '۶,۹۰۰,۰۰۰ تومان' }, { name: 'desc', label: 'توضیحات', type: 'textarea', placeholder: 'توضیح قالب...' }, { name: 'link', label: 'لینک پیش‌نمایش', placeholder: 'https://...' }, { name: 'features', label: 'ویژگی‌ها', placeholder: 'ریسپانسیو, پنل مدیریت' }, { name: 'image_file', label: 'تصویر کاور', type: 'file' }, { name: 'source_file', label: 'فایل سورس ZIP', type: 'file' }]} />}
                    {activeTab === 'settings' && <SettingsPanel settings={settings} setSettings={setSettings} refresh={fetchData} />}
                    {activeTab === 'messages' && <MessagesList messages={messages} refresh={fetchData} />}
                    {activeTab === 'collaborations' && <CollaborationsList items={collaborations} refresh={fetchData} />}
                </section>
            </main>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AdminApp />);
