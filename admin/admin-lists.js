/* ===== لیست پیام‌های پشتیبانی و درخواست‌های همکاری ===== */
const AdminDeleteButton = ({ action, id, refresh }) => {
    const remove = async () => {
        if (!confirm('حذف شود؟')) return;
        await fetch(`${API_URL}?action=${action}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
        refresh && refresh();
    };
    return <button onClick={remove} className="text-xs flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"><Icon name="trash-2" size={14} /> حذف</button>;
};

const MessagesList = ({ messages, refresh }) => (
    <div className="grid gap-4">
        {messages.map(msg => (
            <div key={msg.id} className="bg-[#18181b] p-5 md:p-6 rounded-[1.5rem] border border-white/5 hover:border-purple-500/20 transition-colors flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white font-bold shrink-0"><Icon name="user" size={20} /></div>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                        <div><h4 className="font-bold text-white text-lg">{msg.name}</h4><span className="text-purple-400 text-sm font-mono" dir="ltr">{msg.phone}</span></div>
                        <span className="text-xs text-zinc-500 bg-black/30 px-2 py-1 rounded-lg w-fit" dir="ltr">{msg.created_at}</span>
                    </div>
                    <div className="bg-black/20 p-4 rounded-2xl rounded-tr-none text-zinc-300 text-sm leading-relaxed border border-white/5 whitespace-pre-wrap">{msg.message}</div>
                    <div className="mt-3 flex justify-end gap-4">
                        <a href={`tel:${msg.phone}`} className="text-xs flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"><Icon name="phone" size={14} /> تماس</a>
                        <AdminDeleteButton action="delete_message" id={msg.id} refresh={refresh} />
                    </div>
                </div>
            </div>
        ))}
        {messages.length === 0 && <div className="text-center text-zinc-500 p-12 md:p-20 bg-[#18181b] rounded-3xl border border-white/5">صندوق پیام‌ها خالی است.</div>}
    </div>
);

const CollaborationsList = ({ items, refresh }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map(item => (
            <div key={item.id} className="bg-[#18181b] p-6 md:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden hover:border-green-500/30 transition-colors group">
                <div className="absolute top-0 left-0 p-3 bg-gradient-to-br from-emerald-500 to-green-600 text-white text-xs font-bold rounded-br-2xl shadow-lg">{item.business_type}</div>
                <div className="flex items-start justify-between mb-6 mt-4">
                    <div className="flex items-center gap-4"><div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-green-400 border border-white/5"><Icon name="briefcase" size={24} /></div><div><h3 className="font-black text-xl text-white">{item.name}</h3><div className="text-zinc-400 text-sm mt-1 font-mono" dir="ltr">{item.phone}</div></div></div>
                </div>
                <div className="space-y-4">
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5"><div className="text-xs font-bold text-zinc-500 mb-2 flex items-center gap-1"><Icon name="info" size={12} /> درباره کسب‌وکار</div><p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{item.description}</p></div>
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5"><div className="text-xs font-bold text-zinc-500 mb-2 flex items-center gap-1"><Icon name="lightbulb" size={12} /> ایده و هدف</div><p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{item.idea}</p></div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5 gap-3">
                    <div className="flex flex-col"><span className="text-[10px] text-zinc-500">بودجه پیشنهادی</span><span className="font-bold text-green-400 text-lg">{item.budget}</span></div>
                    <div className="flex items-center gap-4"><a href={`tel:${item.phone}`} className="text-xs text-zinc-400 hover:text-white">تماس</a><AdminDeleteButton action="delete_collaboration" id={item.id} refresh={refresh} /></div>
                </div>
            </div>
        ))}
        {items.length === 0 && <div className="col-span-full text-center text-zinc-500 p-12 md:p-20 bg-[#18181b] rounded-3xl border border-white/5">هنوز فرم همکاری ثبت نشده است.</div>}
    </div>
);
