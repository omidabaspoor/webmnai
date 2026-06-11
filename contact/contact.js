/* ===== صفحه همکاری / فرم مرحله‌ای پروژه ===== */
const ContactPage = ({ t }) => {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', business: '', customBusiness: '', siteType: 'simple', budget: '', timeline: '', description: '', idea: '' });

    const siteTypes = [
        { id: 'simple', title: 'سایت ساده و حرفه‌ای', icon: 'layout', desc: 'معرفی کسب‌وکار با ظاهر شیک و سرعت بالا' },
        { id: 'smart', title: 'وبسایت هوشمند', icon: 'bot', desc: 'اتصال به چت‌بات، فرم هوشمند و اتوماسیون' },
        { id: 'shop', title: 'فروشگاه / سفارش آنلاین', icon: 'shopping-bag', desc: 'محصولات، سفارش، پرداخت و پنل مدیریت' },
        { id: 'custom', title: 'مورد دیگر', icon: 'pencil', desc: 'نوع پروژه را خودتان بنویسید' }
    ];
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
            const res = await fetch('../admin/api.php?action=submit_collaboration', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            const data = await res.json();
            if (!data.success) throw new Error();
            setSuccess(true);
        } catch (e) { alert('ارسال فرم با خطا مواجه شد. لطفاً دوباره تلاش کنید.'); }
        setLoading(false);
    };

    const next = () => { if (!valid()) return alert('لطفاً اطلاعات این مرحله را کامل کنید.'); step < 3 ? setStep(step + 1) : submit(); };

    if (success) return <div className="max-w-4xl mx-auto pt-32 pb-20 px-4 min-h-screen flex items-center justify-center"><div className="text-center rounded-[2rem] bg-surface/50 border border-accent/20 p-10"><div className="w-20 h-20 mx-auto mb-5 bg-green-500 rounded-3xl flex items-center justify-center text-white"><Icon name="check" size={40} /></div><h1 className="text-3xl font-black text-primary mb-3">درخواست ثبت شد</h1><p className="text-secondary leading-8">اطلاعات پروژه رسید. برای بررسی مسیر مناسب با شما تماس می‌گیریم.</p></div></div>;

    return (
        <div className="max-w-6xl mx-auto pt-32 pb-20 px-4 contact-form">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-5 contact-side-panel">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold"><Icon name="rocket" size={14} /> شروع همکاری</div>
                    <h1 className="contact-hero-title text-3xl md:text-5xl font-black text-primary">پروژه‌ات را دقیق شروع کنیم</h1>
                    <p className="text-secondary contact-hero-sub">۴ مرحله کوتاه برای اینکه مسیر مناسب سایت، زمان و بودجه مشخص شود.</p>
                    <div className="contact-visual-card">
                        <div className="contact-visual-orb"><Icon name="sparkles" size={28} /></div>
                        <div className="contact-visual-lines"><span></span><span></span><span></span></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">{[['۶ ماه','پشتیبانی'],['SEO','زیرساخت'],['Code','اختصاصی'],['Mobile','ریسپانسیو']].map(([a,b])=><div key={a} className="rounded-2xl bg-surface/40 border border-accent/15 p-4"><div className="text-accent font-black text-xl">{a}</div><div className="text-secondary text-xs mt-1">{b}</div></div>)}</div>
                </div>
                <div className="lg:col-span-7 rounded-[2rem] bg-surface/55 border border-accent/15 p-5 md:p-7 shadow-2xl">
                    <div className="flex gap-2 mb-7">{steps.map((s,i)=><div key={s} className={`h-2 flex-1 rounded-full ${i<=step?'bg-accent':'bg-white/10'}`}></div>)}</div>
                    <div className="min-h-[360px]">
                        <AnimatePresence mode="wait">
                            <motion.div key={step} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} className="space-y-4">
                                <h2 className="text-2xl font-black text-primary mb-4">{steps[step]}</h2>
                                {step===0 && <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><input className="contact-input" placeholder="نام و نام خانوادگی *" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})}/><input className="contact-input" placeholder="شماره تماس *" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})}/><input className="contact-input md:col-span-2" placeholder="نوع کسب‌وکار؛ مثلاً کافه، شرکت، فروشگاه" value={formData.business} onChange={e=>setFormData({...formData,business:e.target.value})}/></div>}
                                {step===1 && <><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{siteTypes.map(type=><button type="button" key={type.id} onClick={()=>setFormData({...formData,siteType:type.id})} className={`text-right rounded-2xl border p-4 transition-all ${formData.siteType===type.id?'border-accent bg-accent/12':'border-accent/15 bg-black/15 hover:border-accent/40'}`}><div className="flex items-center gap-3 mb-2"><div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center"><Icon name={type.icon} size={20}/></div><div className="font-black text-primary">{type.title}</div></div><p className="text-secondary text-xs leading-7">{type.desc}</p></button>)}</div>{formData.siteType==='custom'&&<input className="contact-input" placeholder="نوع پروژه مورد نظر را بنویسید" value={formData.customBusiness} onChange={e=>setFormData({...formData,customBusiness:e.target.value})}/>}</>}
                                {step===2 && <div className="grid grid-cols-1 md:grid-cols-2 gap-5"><div><label className="block text-sm font-black text-primary mb-3">بودجه حدودی *</label><div className="grid gap-2">{budgets.map(b=><button type="button" key={b} onClick={()=>setFormData({...formData,budget:b})} className={`p-3 rounded-xl border text-right text-sm font-bold ${formData.budget===b?'border-accent bg-accent/10 text-accent':'border-accent/15 text-primary'}`}>{b}</button>)}</div></div><div><label className="block text-sm font-black text-primary mb-3">زمان مدنظر</label><div className="grid gap-2">{timelines.map(tl=><button type="button" key={tl} onClick={()=>setFormData({...formData,timeline:tl})} className={`p-3 rounded-xl border text-right text-sm font-bold ${formData.timeline===tl?'border-accent bg-accent/10 text-accent':'border-accent/15 text-primary'}`}>{tl}</button>)}</div></div></div>}
                                {step===3 && <><textarea className="contact-input min-h-[130px]" placeholder="هدف سایت و امکانات مهم را کوتاه بنویسید *" value={formData.description} onChange={e=>setFormData({...formData,description:e.target.value})}></textarea><textarea className="contact-input min-h-[100px]" placeholder="نمونه سایت، اتصال به هوش مصنوعی یا نکته خاص" value={formData.idea} onChange={e=>setFormData({...formData,idea:e.target.value})}></textarea></>}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="flex gap-3 pt-5 border-t border-accent/10"><button onClick={()=>setStep(Math.max(0,step-1))} disabled={step===0} className="px-5 py-3 rounded-xl bg-white/5 text-secondary font-bold disabled:opacity-40">قبلی</button><button onClick={next} disabled={loading} className="flex-1 py-3 rounded-xl bg-white text-black font-black flex items-center justify-center gap-2">{loading?<Icon name="loader-2" className="animate-spin"/>:step===3?'ارسال درخواست':'مرحله بعد'}</button></div>
                </div>
            </div>
        </div>
    );
};
renderPage('contact', ContactPage);
