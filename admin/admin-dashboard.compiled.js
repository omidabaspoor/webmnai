const StatCard = ({
  title,
  value,
  icon,
  color
}) => React.createElement("div", {
  className: "p-1 rounded-[2rem] bg-gradient-to-br relative group hover:-translate-y-1 transition-transform duration-300"
}, React.createElement("div", {
  className: `absolute inset-0 bg-gradient-to-br ${color} rounded-[2rem] blur-lg opacity-40 group-hover:opacity-60 transition-opacity`
}), React.createElement("div", {
  className: "bg-[#18181b] p-6 rounded-[1.8rem] relative h-full flex items-center gap-5 border border-purple-500/10"
}, React.createElement("div", {
  className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`
}, React.createElement(Icon, {
  name: icon,
  size: 28
})), React.createElement("div", null, React.createElement("div", {
  className: "text-zinc-400 text-sm font-medium mb-1"
}, title), React.createElement("div", {
  className: "text-3xl font-black text-white"
}, value))));
const Dashboard = ({
  portfolios,
  templates,
  messages,
  collaborations
}) => React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
}, React.createElement(StatCard, {
  title: "\u0646\u0645\u0648\u0646\u0647\u200C\u06A9\u0627\u0631\u0647\u0627",
  value: portfolios.length,
  icon: "briefcase",
  color: "from-purple-500 to-pink-500"
}), React.createElement(StatCard, {
  title: "\u0642\u0627\u0644\u0628\u200C\u0647\u0627",
  value: templates.length,
  icon: "layout",
  color: "from-orange-500 to-amber-400"
}), React.createElement(StatCard, {
  title: "\u067E\u06CC\u0627\u0645\u200C\u0647\u0627\u06CC \u0647\u0648\u0634\u0645\u0646\u062F",
  value: messages.length,
  icon: "bot",
  color: "from-blue-500 to-cyan-400"
}), React.createElement(StatCard, {
  title: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0647\u0645\u06A9\u0627\u0631\u06CC",
  value: collaborations.length,
  icon: "users",
  color: "from-emerald-500 to-green-400"
}), React.createElement("div", {
  className: "col-span-full mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
}, React.createElement("div", {
  className: "lg:col-span-2 bg-[#18181b] rounded-3xl border border-purple-500/10 p-8"
}, React.createElement("h3", {
  className: "text-xl font-black text-white mb-3 flex items-center gap-2"
}, React.createElement(Icon, {
  name: "activity",
  className: "text-purple-500"
}), " \u0648\u0636\u0639\u06CC\u062A \u0633\u0627\u06CC\u062A"), React.createElement("p", {
  className: "text-zinc-400 leading-8"
}, "\u0627\u0632 \u0628\u062E\u0634 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A\u060C \u0642\u06CC\u0645\u062A\u200C\u0647\u0627\u060C \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u0645\u0627\u0633\u060C \u0633\u0626\u0648\u060C \u0645\u062A\u0646 \u0647\u06CC\u0631\u0648\u060C \u0631\u0646\u06AF \u0627\u0635\u0644\u06CC \u0648 \u0686\u062A \u0647\u0648\u0634\u0645\u0646\u062F \u0631\u0627 \u06A9\u0646\u062A\u0631\u0644 \u06A9\u0646\u06CC\u062F.")), React.createElement("div", {
  className: "bg-gradient-to-br from-purple-600/20 to-blue-600/10 rounded-3xl border border-purple-500/20 p-8"
}, React.createElement("h3", {
  className: "text-white font-black mb-2"
}, "\u0645\u0631\u06A9\u0632 \u06A9\u0646\u062A\u0631\u0644"), React.createElement("p", {
  className: "text-zinc-400 text-sm leading-7"
}, "\u0647\u0645\u0647 \u0628\u062E\u0634\u200C\u0647\u0627\u06CC \u0645\u0647\u0645 \u0633\u0627\u06CC\u062A \u0627\u0632 \u0645\u0646\u0648\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u0642\u0627\u0628\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0647\u0633\u062A\u0646\u062F."))));