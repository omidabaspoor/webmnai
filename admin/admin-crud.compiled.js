const CrudTable = ({
  type,
  data,
  refresh,
  fields
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [uploading, setUploading] = useState(false);
  const handleInputChange = (e, field) => {
    if (field.type === 'file') {
      setFormData({
        ...formData,
        [field.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [field.name]: e.target.value
      });
    }
  };
  const handleSubmit = async e => {
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
      const res = await fetch(`${API_URL}?action=save_${type}`, {
        method: 'POST',
        body: data
      });
      const result = await res.json();
      if (result.success) {
        setIsModalOpen(false);
        refresh();
      } else {
        alert("خطا: " + result.error);
      }
    } catch (err) {
      alert("خطا در اتصال به سرور");
    }
    setUploading(false);
  };
  const handleDelete = async id => {
    if (!confirm('آیا از حذف اطمینان دارید؟')) return;
    try {
      await fetch(`${API_URL}?action=delete_${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        })
      });
      refresh();
    } catch (err) {
      alert("خطا در حذف");
    }
  };
  const openEdit = item => {
    setEditingItem(item);
    setFormData({
      ...item
    });
    setIsModalOpen(true);
  };
  const openNew = () => {
    setEditingItem(null);
    setFormData({});
    setIsModalOpen(true);
  };
  return React.createElement("div", null, React.createElement("button", {
    onClick: openNew,
    className: "mb-8 px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center gap-2 hover:bg-purple-50 transition-colors shadow-lg hover:shadow-white/20"
  }, React.createElement(Icon, {
    name: "plus-circle",
    size: 20
  }), " \u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F"), React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
  }, data.map(item => React.createElement("div", {
    key: item.id,
    className: "admin-card bg-[#18181b] border border-white/5 rounded-3xl p-5 flex flex-col gap-4 group"
  }, React.createElement("div", {
    className: "relative h-48 rounded-2xl overflow-hidden bg-black/50"
  }, item.image ? React.createElement("img", {
    src: item.image,
    className: "w-full h-full object-cover"
  }) : React.createElement("div", {
    className: "w-full h-full flex items-center justify-center text-zinc-600"
  }, React.createElement(Icon, {
    name: "image-off",
    size: 32
  })), React.createElement("div", {
    className: "absolute top-3 right-3 flex gap-2"
  }, React.createElement("button", {
    onClick: () => openEdit(item),
    className: "p-2 bg-white/90 text-black rounded-lg hover:scale-110 transition-transform"
  }, React.createElement(Icon, {
    name: "edit-2",
    size: 16
  })), React.createElement("button", {
    onClick: () => handleDelete(item.id),
    className: "p-2 bg-red-500/90 text-white rounded-lg hover:scale-110 transition-transform"
  }, React.createElement(Icon, {
    name: "trash-2",
    size: 16
  })))), React.createElement("div", null, React.createElement("h3", {
    className: "font-bold text-lg text-white mb-1 truncate"
  }, item.title), React.createElement("div", {
    className: "flex items-center gap-2 text-xs text-zinc-500 mb-3"
  }, item.category && React.createElement("span", {
    className: "px-2 py-1 bg-white/5 rounded-md text-zinc-300"
  }, item.category), item.price && React.createElement("span", {
    className: "text-green-400"
  }, item.price, " \u062A\u0648\u0645\u0627\u0646"), item.read_time && React.createElement("span", null, item.read_time)), React.createElement("p", {
    className: "text-sm text-zinc-400 line-clamp-2 h-10"
  }, item.excerpt || item.description || item.desc || "بدون توضیحات")), item.file_path && React.createElement("a", {
    href: item.file_path,
    target: "_blank",
    className: "mt-auto py-3 bg-white/5 rounded-xl text-center text-sm font-bold text-purple-400 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
  }, React.createElement(Icon, {
    name: "download",
    size: 16
  }), " \u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644 \u0636\u0645\u06CC\u0645\u0647")))), data.length === 0 && React.createElement("div", {
    className: "text-center p-20 text-zinc-500 bg-[#18181b] rounded-3xl border border-white/5"
  }, "\u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u0622\u06CC\u062A\u0645\u06CC \u062B\u0628\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A."), isModalOpen && React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
  }, React.createElement("div", {
    className: "admin-modal-enter bg-[#18181b] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] p-8 border border-white/10 shadow-2xl"
  }, React.createElement("div", {
    className: "flex justify-between items-center mb-8"
  }, React.createElement("h3", {
    className: "text-2xl font-black text-white flex items-center gap-3"
  }, editingItem ? React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: "edit",
    className: "text-purple-500"
  }), " \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0622\u06CC\u062A\u0645") : React.createElement(React.Fragment, null, React.createElement(Icon, {
    name: "plus-square",
    className: "text-purple-500"
  }), " \u0627\u0641\u0632\u0648\u062F\u0646 \u062C\u062F\u06CC\u062F")), React.createElement("button", {
    onClick: () => setIsModalOpen(false),
    className: "p-2 hover:bg-white/10 rounded-full transition-colors"
  }, React.createElement(Icon, {
    name: "x"
  }))), React.createElement("form", {
    onSubmit: handleSubmit,
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, fields.map(field => React.createElement("div", {
    key: field.name,
    className: field.type === 'textarea' ? "md:col-span-2" : ""
  }, React.createElement("label", {
    className: "block text-xs font-bold text-zinc-400 mb-2 mr-1"
  }, field.label), field.type === 'textarea' ? React.createElement("textarea", {
    value: formData[field.name] || '',
    onChange: e => handleInputChange(e, field),
    placeholder: field.placeholder,
    className: "w-full p-4 rounded-2xl bg-black/30 border border-white/5 focus:border-purple-500 transition-all min-h-[120px] text-right text-white outline-none resize-y"
  }) : field.type === 'file' ? React.createElement("div", {
    className: "relative"
  }, React.createElement("input", {
    type: "file",
    id: field.name,
    onChange: e => handleInputChange(e, field),
    className: "hidden"
  }), React.createElement("label", {
    htmlFor: field.name,
    className: "flex flex-col items-center justify-center w-full p-8 rounded-2xl border-2 border-dashed border-white/10 bg-black/20 hover:bg-black/40 hover:border-purple-500/50 transition-all cursor-pointer group"
  }, React.createElement(Icon, {
    name: "upload-cloud",
    size: 32,
    className: "text-zinc-500 group-hover:text-purple-400 mb-2 transition-colors"
  }), React.createElement("span", {
    className: "text-xs font-bold text-zinc-400 group-hover:text-white"
  }, formData[field.name] ? formData[field.name].name : 'انتخاب فایل')), editingItem && editingItem[field.name === 'image_file' ? 'image' : 'file_path'] && React.createElement("div", {
    className: "absolute top-2 left-2 bg-green-500/20 text-green-400 text-[10px] px-2 py-1 rounded-full"
  }, "\u0641\u0627\u06CC\u0644 \u062F\u0627\u0631\u062F")) : field.type === 'select' ? React.createElement("select", {
    value: formData[field.name] || '',
    onChange: e => handleInputChange(e, field),
    className: "w-full p-4 rounded-2xl bg-black/30 border border-white/5 focus:border-purple-500 transition-all text-right text-white outline-none appearance-none"
  }, React.createElement("option", {
    value: ""
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F..."), field.options.map(opt => React.createElement("option", {
    key: opt.val,
    value: opt.val
  }, opt.txt))) : React.createElement("input", {
    type: "text",
    value: formData[field.name] || '',
    onChange: e => handleInputChange(e, field),
    placeholder: field.placeholder,
    className: "w-full p-4 rounded-2xl bg-black/30 border border-white/5 focus:border-purple-500 transition-all text-right text-white outline-none"
  }))), React.createElement("div", {
    className: "md:col-span-2 flex gap-4 pt-6 border-t border-white/5 mt-2"
  }, React.createElement("button", {
    type: "button",
    onClick: () => setIsModalOpen(false),
    className: "flex-1 p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-bold text-zinc-400"
  }, "\u0627\u0646\u0635\u0631\u0627\u0641"), React.createElement("button", {
    type: "submit",
    disabled: uploading,
    className: "flex-1 p-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/20 flex justify-center gap-2"
  }, uploading ? React.createElement(Icon, {
    name: "loader-2",
    className: "animate-spin"
  }) : "ذخیره تغییرات"))))));
};