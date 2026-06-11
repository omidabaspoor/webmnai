/* ===== ویجت پشتیبانی هوشمند وب‌مانیا ===== */
const SupportWidget = ({ t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: 'سلام 👋\nمن دستیار هوشمند وب‌مانیا هستم. درباره طراحی سایت ساده، سایت هوشمند با AI، قیمت حدودی، امکانات و شروع پروژه راهنمایی‌ات می‌کنم.', isUser: false, time: 'الان' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [userData, setUserData] = useState({ name: '', phone: '' });
    const messagesEndRef = useRef(null);

    useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isOpen, isTyping]);

    const quickPrompts = [
        'سایت هوشمند یعنی چی؟',
        'قیمت حدودی طراحی سایت چقدره؟',
        'سایت ساده هم می‌سازید؟'
    ];

    const handleSend = async (customText) => {
        const textToSend = (customText || inputText).trim();
        if (!registered) return;
        if (!textToSend || blocked || isTyping) return;
        const newMsg = { id: Date.now(), text: textToSend, isUser: true, time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) };
        setMessages(prev => [...prev, newMsg]);
        setInputText('');
        setIsTyping(true);
        try {
            const res = await fetch('../admin/api.php?action=ai_chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: textToSend, name: userData.name, phone: userData.phone })
            });
            const data = await res.json();
            if (data.blocked) setBlocked(true);
            const reply = data.reply || 'برای راهنمایی دقیق‌تر، لطفاً درباره نوع کسب‌وکارت و چیزی که از سایت می‌خوای بگو.';
            setMessages(prev => [...prev, { id: Date.now() + 1, text: reply, isUser: false, time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) }]);
        } catch (e) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: 'الان اتصال دستیار هوشمند برقرار نشد. لطفاً کمی بعد دوباره پیام بده یا فرم همکاری را پر کن.', isUser: false, time: 'الان' }]);
        }
        setIsTyping(false);
    };

    return (
        <div className="fixed bottom-6 left-6 z-[50] flex flex-col items-start gap-4" dir="ltr">
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, scale: 0.88, x: -20, y: 20 }} animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} exit={{ opacity: 0, scale: 0.88, x: -20, y: 20 }} transition={{ type: "spring", damping: 24, stiffness: 280 }} className="w-[370px] max-w-[calc(100vw-32px)] h-[560px] max-h-[calc(100dvh-96px)] bg-surface border border-border rounded-[1.6rem] shadow-2xl flex flex-col overflow-hidden mb-2 font-persian origin-bottom-left">
                        <div className="p-4 flex items-center justify-between text-white shrink-0 relative overflow-hidden" dir="rtl">
                            <div className="absolute inset-0 bg-gradient-to-l from-accent via-purple-700 to-blue-700"></div>
                            <div className="relative z-10 flex items-center gap-3"><div className="w-11 h-11 bg-white/18 rounded-2xl flex items-center justify-center backdrop-blur-sm"><Icon name="bot" size={22} /></div><div><div className="font-black">دستیار هوشمند وب‌مانیا</div><div className="text-xs opacity-90 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>راهنمای طراحی سایت</div></div></div>
                            <button onClick={() => setIsOpen(false)} className="relative z-10 text-white/80 hover:text-white"><Icon name="x" size={20} /></button>
                        </div>
                        <div className="flex-1 overflow-y-auto bg-[#0b0b0f] relative flex flex-col" dir="rtl">
                            {!registered ? (
                                <div className="p-5 flex-1 flex flex-col justify-center text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/15 text-accent flex items-center justify-center"><Icon name="user-round" size={30} /></div>
                                    <h3 className="text-primary font-black text-lg mb-2">قبل از شروع گفتگو</h3>
                                    <p className="text-secondary text-sm leading-7 mb-5">برای اینکه پیام‌ها در پنل ثبت شوند، نام و شماره تماس را وارد کنید.</p>
                                    <div className="space-y-3">
                                        <input value={userData.name} onChange={e => setUserData({ ...userData, name: e.target.value })} placeholder="نام و نام خانوادگی" className="w-full bg-zinc-900 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-accent text-right" />
                                        <input value={userData.phone} onChange={e => setUserData({ ...userData, phone: e.target.value })} placeholder="شماره تماس" className="w-full bg-zinc-900 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-accent text-right" />
                                        <button onClick={() => userData.name.length > 2 && userData.phone.length > 9 ? setRegistered(true) : alert('نام و شماره تماس را کامل وارد کنید')} className="w-full py-3 bg-accent text-white rounded-xl font-black">شروع گفتگو</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4 space-y-4 z-10 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-1">
                                        {quickPrompts.map(q => <button key={q} onClick={() => handleSend(q)} disabled={blocked || isTyping} className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300 hover:bg-accent/15 hover:text-white transition-colors disabled:opacity-50">{q}</button>)}
                                    </div>
                                    {messages.map((msg) => <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={msg.id} className={`flex ${msg.isUser ? 'justify-start' : 'justify-end'}`}><div className={`max-w-[84%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.isUser ? 'bg-accent text-white rounded-tr-sm' : 'bg-zinc-800 text-zinc-200 rounded-tl-sm border border-white/5'}`}>{msg.text}<div className={`text-[10px] mt-1 opacity-60 ${msg.isUser ? 'text-left' : 'text-right'}`}>{msg.time}</div></div></motion.div>)}
                                    {isTyping && <div className="flex justify-end"><div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-sm flex gap-1"><span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></span><span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span><span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span></div></div>}
                                    <div ref={messagesEndRef} />
                                </div>
                            )}
                        </div>
                        <div className="p-3 bg-surface border-t border-border flex items-center gap-2 shrink-0" dir="rtl">
                            <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} disabled={blocked || !registered} placeholder={!registered ? 'ابتدا نام و شماره را وارد کنید' : (blocked ? 'گفتگو موقتاً محدود شده' : 'درباره پروژه سایتت بپرس...')} className="flex-1 bg-zinc-900 border-none rounded-xl px-3 py-3 text-sm focus:ring-1 focus:ring-accent outline-none text-right disabled:opacity-50" />
                            <button onClick={() => handleSend()} disabled={!inputText.trim() || blocked || isTyping || !registered} className="p-3 bg-accent text-white rounded-full hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100"><Icon name="send" size={18} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={() => setIsOpen(!isOpen)} className="group relative w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/40 z-50 cursor-pointer">
                <span className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-70 pointer-events-none"></span>
                {isOpen ? <Icon name="x" size={28} /> : <div className="ai-chat-orb"><span className="ai-chat-eye left"></span><span className="ai-chat-eye right"></span></div>}
            </motion.button>
        </div>
    );
};
