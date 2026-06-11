const AdminDeleteButton = ({
  action,
  id,
  refresh
}) => {
  const remove = async () => {
    if (!confirm('حذف شود؟')) return;
    await fetch(`${API_URL}?action=${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    });
    refresh && refresh();
  };
  return React.createElement("button", {
    onClick: remove,
    className: "text-xs flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
  }, React.createElement(Icon, {
    name: "trash-2",
    size: 14
  }), " \u062D\u0630\u0641");
};
const MessagesList = ({
  messages,
  refresh
}) => React.createElement("div", {
  className: "grid gap-4"
}, messages.map(msg => React.createElement("div", {
  key: msg.id,
  className: "bg-[#18181b] p-5 md:p-6 rounded-[1.5rem] border border-white/5 hover:border-purple-500/20 transition-colors flex gap-4"
}, React.createElement("div", {
  className: "w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white font-bold shrink-0"
}, React.createElement(Icon, {
  name: "user",
  size: 20
})), React.createElement("div", {
  className: "flex-1 min-w-0"
}, React.createElement("div", {
  className: "flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2"
}, React.createElement("div", null, React.createElement("h4", {
  className: "font-bold text-white text-lg"
}, msg.name), React.createElement("span", {
  className: "text-purple-400 text-sm font-mono",
  dir: "ltr"
}, msg.phone)), React.createElement("span", {
  className: "text-xs text-zinc-500 bg-black/30 px-2 py-1 rounded-lg w-fit",
  dir: "ltr"
}, msg.created_at)), React.createElement("div", {
  className: "bg-black/20 p-4 rounded-2xl rounded-tr-none text-zinc-300 text-sm leading-relaxed border border-white/5 whitespace-pre-wrap"
}, msg.message), React.createElement("div", {
  className: "mt-3 flex justify-end gap-4"
}, React.createElement("a", {
  href: `tel:${msg.phone}`,
  className: "text-xs flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
}, React.createElement(Icon, {
  name: "phone",
  size: 14
}), " \u062A\u0645\u0627\u0633"), React.createElement(AdminDeleteButton, {
  action: "delete_message",
  id: msg.id,
  refresh: refresh
}))))), messages.length === 0 && React.createElement("div", {
  className: "text-center text-zinc-500 p-12 md:p-20 bg-[#18181b] rounded-3xl border border-white/5"
}, "\u0635\u0646\u062F\u0648\u0642 \u067E\u06CC\u0627\u0645\u200C\u0647\u0627 \u062E\u0627\u0644\u06CC \u0627\u0633\u062A."));
const CollaborationsList = ({
  items,
  refresh
}) => React.createElement("div", {
  className: "grid grid-cols-1 lg:grid-cols-2 gap-6"
}, items.map(item => React.createElement("div", {
  key: item.id,
  className: "bg-[#18181b] p-6 md:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden hover:border-green-500/30 transition-colors group"
}, React.createElement("div", {
  className: "absolute top-0 left-0 p-3 bg-gradient-to-br from-emerald-500 to-green-600 text-white text-xs font-bold rounded-br-2xl shadow-lg"
}, item.business_type), React.createElement("div", {
  className: "flex items-start justify-between mb-6 mt-4"
}, React.createElement("div", {
  className: "flex items-center gap-4"
}, React.createElement("div", {
  className: "w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-green-400 border border-white/5"
}, React.createElement(Icon, {
  name: "briefcase",
  size: 24
})), React.createElement("div", null, React.createElement("h3", {
  className: "font-black text-xl text-white"
}, item.name), React.createElement("div", {
  className: "text-zinc-400 text-sm mt-1 font-mono",
  dir: "ltr"
}, item.phone)))), React.createElement("div", {
  className: "space-y-4"
}, React.createElement("div", {
  className: "bg-black/30 p-5 rounded-2xl border border-white/5"
}, React.createElement("div", {
  className: "text-xs font-bold text-zinc-500 mb-2 flex items-center gap-1"
}, React.createElement(Icon, {
  name: "info",
  size: 12
}), " \u062F\u0631\u0628\u0627\u0631\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631"), React.createElement("p", {
  className: "text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap"
}, item.description)), React.createElement("div", {
  className: "bg-black/30 p-5 rounded-2xl border border-white/5"
}, React.createElement("div", {
  className: "text-xs font-bold text-zinc-500 mb-2 flex items-center gap-1"
}, React.createElement(Icon, {
  name: "lightbulb",
  size: 12
}), " \u0627\u06CC\u062F\u0647 \u0648 \u0647\u062F\u0641"), React.createElement("p", {
  className: "text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap"
}, item.idea))), React.createElement("div", {
  className: "flex items-center justify-between mt-6 pt-6 border-t border-white/5 gap-3"
}, React.createElement("div", {
  className: "flex flex-col"
}, React.createElement("span", {
  className: "text-[10px] text-zinc-500"
}, "\u0628\u0648\u062F\u062C\u0647 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC"), React.createElement("span", {
  className: "font-bold text-green-400 text-lg"
}, item.budget)), React.createElement("div", {
  className: "flex items-center gap-4"
}, React.createElement("a", {
  href: `tel:${item.phone}`,
  className: "text-xs text-zinc-400 hover:text-white"
}, "\u062A\u0645\u0627\u0633"), React.createElement(AdminDeleteButton, {
  action: "delete_collaboration",
  id: item.id,
  refresh: refresh
}))))), items.length === 0 && React.createElement("div", {
  className: "col-span-full text-center text-zinc-500 p-12 md:p-20 bg-[#18181b] rounded-3xl border border-white/5"
}, "\u0647\u0646\u0648\u0632 \u0641\u0631\u0645 \u0647\u0645\u06A9\u0627\u0631\u06CC \u062B\u0628\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A."));