/* ===== جدول/گرید CRUD عمومی برای مدیریت وبلاگ، پروژه‌ها و قالب‌ها ===== */

const CrudTable = ({ type, data, refresh, fields }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({});
    const [uploading, setUploading] = useState(false);

    const handleInputChange = (e, field) => {
        if (field.type === 'file') {
            setFormData({ ...formData, [field.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [field.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
        const data = new FormData();

        Object.keys(formData).forEach(key => {
            if (key !== 'image_file' && key !== 'source_file') {
                data.append(key, formData[key]);
            }
        });

        if (formData.image_file instanceof File) data.append('image_file', formData.image_file);
        if (formData.source_file instanceof File) data.append('source_file', formData.source_file);

        if (editingItem) {
            data.append('id', editingItem.id);
            data.append('existing_image', editingItem.image);
            if (editingItem.file_path) data.append('existing_file', editingItem.file_path);
            if (editingItem.preview_path) data.append('existing_preview', editingItem.preview_path);
        }

        try {
            const res = await fetch(`${API_URL}?action=save_${type}`, { method: 'POST', body: data });
            const result = await res.json();
            if (result.success) {
                setIsModalOpen(false);
                refresh();
            } else {
                alert("خطا: " + result.error);
            }
        } catch (err) { alert("خطا در اتصال به سرور"); }
        setUploading(false);
    };

    const handleDelete = async (id) => {
        if (!confirm('آیا از حذف اطمینان دارید؟')) return;
        try {
            await fetch(`${API_URL}?action=delete_${type}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            refresh();
        } catch (err) { alert("خطا در حذف"); }
    };

    const openEdit = (item) => { setEditingItem(item); setFormData({ ...item }); setIsModalOpen(true); };
    const openNew = () => { setEditingItem(null); setFormData({}); setIsModalOpen(true); };

    return (
        <div>
            <button onClick={openNew} className="mb-8 px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center gap-2 hover:bg-purple-50 transition-colors shadow-lg hover:shadow-white/20">
                <Icon name="plus-circle" size={20} /> افزودن آیتم جدید
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {data.map(item => (
                    <div key={item.id} className="admin-card bg-[#18181b] border border-white/5 rounded-3xl p-5 flex flex-col gap-4 group">
                        <div className="relative h-48 rounded-2xl overflow-hidden bg-black/50">
                            {item.image ? (
                                <img src={item.image} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-600"><Icon name="image-off" size={32} /></div>
                            )}
                            <div className="absolute top-3 right-3 flex gap-2">
                                <button onClick={() => openEdit(item)} className="p-2 bg-white/90 text-black rounded-lg hover:scale-110 transition-transform"><Icon name="edit-2" size={16} /></button>
                                <button onClick={() => handleDelete(item.id)} className="p-2 bg-red-500/90 text-white rounded-lg hover:scale-110 transition-transform"><Icon name="trash-2" size={16} /></button>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white mb-1 truncate">{item.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                                {item.category && <span className="px-2 py-1 bg-white/5 rounded-md text-zinc-300">{item.category}</span>}
                                {item.price && <span className="text-green-400">{item.price} تومان</span>}
                                {item.read_time && <span>{item.read_time}</span>}
                            </div>
                            <p className="text-sm text-zinc-400 line-clamp-2 h-10">{item.excerpt || item.description || item.desc || "بدون توضیحات"}</p>
                        </div>
                        {item.file_path && (
                            <a href={item.file_path} target="_blank" className="mt-auto py-3 bg-white/5 rounded-xl text-center text-sm font-bold text-purple-400 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                <Icon name="download" size={16} /> دانلود فایل ضمیمه
                            </a>
                        )}
                    </div>
                ))}
            </div>
            {data.length === 0 && <div className="text-center p-20 text-zinc-500 bg-[#18181b] rounded-3xl border border-white/5">هنوز هیچ آیتمی ثبت نشده است.</div>}

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="admin-modal-enter bg-[#18181b] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] p-8 border border-white/10 shadow-2xl">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-black text-white flex items-center gap-3">
                                {editingItem ? <><Icon name="edit" className="text-purple-500" /> ویرایش آیتم</> : <><Icon name="plus-square" className="text-purple-500" /> افزودن جدید</>}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><Icon name="x" /></button>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {fields.map(field => (
                                <div key={field.name} className={field.type === 'textarea' ? "md:col-span-2" : ""}>
                                    <label className="block text-xs font-bold text-zinc-400 mb-2 mr-1">{field.label}</label>

                                    {field.type === 'textarea' ? (
                                        <textarea
                                            value={formData[field.name] || ''}
                                            onChange={e => handleInputChange(e, field)}
                                            placeholder={field.placeholder}
                                            className="w-full p-4 rounded-2xl bg-black/30 border border-white/5 focus:border-purple-500 transition-all min-h-[120px] text-right text-white outline-none resize-y"
                                        />
                                    ) : field.type === 'file' ? (
                                        <div className="relative">
                                            <input type="file" id={field.name} onChange={e => handleInputChange(e, field)} className="hidden" />
                                            <label htmlFor={field.name} className="flex flex-col items-center justify-center w-full p-8 rounded-2xl border-2 border-dashed border-white/10 bg-black/20 hover:bg-black/40 hover:border-purple-500/50 transition-all cursor-pointer group">
                                                <Icon name="upload-cloud" size={32} className="text-zinc-500 group-hover:text-purple-400 mb-2 transition-colors" />
                                                <span className="text-xs font-bold text-zinc-400 group-hover:text-white">{formData[field.name] ? formData[field.name].name : 'انتخاب فایل'}</span>
                                            </label>
                                            {editingItem && editingItem[field.name === 'image_file' ? 'image' : 'file_path'] && <div className="absolute top-2 left-2 bg-green-500/20 text-green-400 text-[10px] px-2 py-1 rounded-full">فایل دارد</div>}
                                        </div>
                                    ) : field.type === 'select' ? (
                                        <select value={formData[field.name] || ''} onChange={e => handleInputChange(e, field)} className="w-full p-4 rounded-2xl bg-black/30 border border-white/5 focus:border-purple-500 transition-all text-right text-white outline-none appearance-none">
                                            <option value="">انتخاب کنید...</option>
                                            {field.options.map(opt => <option key={opt.val} value={opt.val}>{opt.txt}</option>)}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            value={formData[field.name] || ''}
                                            onChange={e => handleInputChange(e, field)}
                                            placeholder={field.placeholder}
                                            className="w-full p-4 rounded-2xl bg-black/30 border border-white/5 focus:border-purple-500 transition-all text-right text-white outline-none"
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="md:col-span-2 flex gap-4 pt-6 border-t border-white/5 mt-2">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-bold text-zinc-400">انصراف</button>
                                <button type="submit" disabled={uploading} className="flex-1 p-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/20 flex justify-center gap-2">
                                    {uploading ? <Icon name="loader-2" className="animate-spin" /> : "ذخیره تغییرات"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
