/* ===== داشبورد پنل مدیریت ===== */
const StatCard = ({ title, value, icon, color }) => (
    <div className="p-1 rounded-[2rem] bg-gradient-to-br relative group hover:-translate-y-1 transition-transform duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-[2rem] blur-lg opacity-40 group-hover:opacity-60 transition-opacity`}></div>
        <div className="bg-[#18181b] p-6 rounded-[1.8rem] relative h-full flex items-center gap-5 border border-purple-500/10">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}><Icon name={icon} size={28} /></div>
            <div><div className="text-zinc-400 text-sm font-medium mb-1">{title}</div><div className="text-3xl font-black text-white">{value}</div></div>
        </div>
    </div>
);
const Dashboard = ({ portfolios, templates, messages, collaborations }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="نمونه‌کارها" value={portfolios.length} icon="briefcase" color="from-purple-500 to-pink-500" />
        <StatCard title="قالب‌ها" value={templates.length} icon="layout" color="from-orange-500 to-amber-400" />
        <StatCard title="پیام‌های هوشمند" value={messages.length} icon="bot" color="from-blue-500 to-cyan-400" />
        <StatCard title="درخواست همکاری" value={collaborations.length} icon="users" color="from-emerald-500 to-green-400" />
        <div className="col-span-full mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#18181b] rounded-3xl border border-purple-500/10 p-8"><h3 className="text-xl font-black text-white mb-3 flex items-center gap-2"><Icon name="activity" className="text-purple-500" /> وضعیت سایت</h3><p className="text-zinc-400 leading-8">از بخش تنظیمات، قیمت‌ها، اطلاعات تماس، سئو، متن هیرو، رنگ اصلی و چت هوشمند را کنترل کنید.</p></div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/10 rounded-3xl border border-purple-500/20 p-8"><h3 className="text-white font-black mb-2">مرکز کنترل</h3><p className="text-zinc-400 text-sm leading-7">همه بخش‌های مهم سایت از منوی مدیریت قابل ویرایش هستند.</p></div>
        </div>
    </div>
);
