const SupportWidget = ({
  t
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    id: 1,
    text: 'سلام 👋\nمن دستیار هوشمند وب‌مانیا هستم. درباره طراحی سایت ساده، سایت هوشمند با AI، قیمت حدودی، امکانات و شروع پروژه راهنمایی‌ات می‌کنم.',
    isUser: false,
    time: 'الان'
  }]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    phone: ''
  });
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isOpen, isTyping]);
  const quickPrompts = ['سایت هوشمند یعنی چی؟', 'قیمت حدودی طراحی سایت چقدره؟', 'سایت ساده هم می‌سازید؟'];
  const handleSend = async customText => {
    const textToSend = (customText || inputText).trim();
    if (!registered) return;
    if (!textToSend || blocked || isTyping) return;
    const newMsg = {
      id: Date.now(),
      text: textToSend,
      isUser: true,
      time: new Date().toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);
    try {
      const res = await fetch('../admin/api.php?action=ai_chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: textToSend,
          name: userData.name,
          phone: userData.phone
        })
      });
      const data = await res.json();
      if (data.blocked) setBlocked(true);
      const reply = data.reply || 'برای راهنمایی دقیق‌تر، لطفاً درباره نوع کسب‌وکارت و چیزی که از سایت می‌خوای بگو.';
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: reply,
        isUser: false,
        time: new Date().toLocaleTimeString('fa-IR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      }]);
    } catch (e) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: 'الان اتصال دستیار هوشمند برقرار نشد. لطفاً کمی بعد دوباره پیام بده یا فرم همکاری را پر کن.',
        isUser: false,
        time: 'الان'
      }]);
    }
    setIsTyping(false);
  };
  return React.createElement("div", {
    className: "fixed bottom-6 left-6 z-[50] flex flex-col items-start gap-4",
    dir: "ltr"
  }, React.createElement(AnimatePresence, null, isOpen && React.createElement(motion.div, {
    initial: {
      opacity: 0,
      scale: 0.88,
      x: -20,
      y: 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0
    },
    exit: {
      opacity: 0,
      scale: 0.88,
      x: -20,
      y: 20
    },
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 280
    },
    className: "w-[370px] max-w-[calc(100vw-32px)] h-[560px] max-h-[calc(100dvh-96px)] bg-surface border border-border rounded-[1.6rem] shadow-2xl flex flex-col overflow-hidden mb-2 font-persian origin-bottom-left"
  }, React.createElement("div", {
    className: "p-4 flex items-center justify-between text-white shrink-0 relative overflow-hidden",
    dir: "rtl"
  }, React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-l from-accent via-purple-700 to-blue-700"
  }), React.createElement("div", {
    className: "relative z-10 flex items-center gap-3"
  }, React.createElement("div", {
    className: "w-11 h-11 bg-white/18 rounded-2xl flex items-center justify-center backdrop-blur-sm"
  }, React.createElement(Icon, {
    name: "bot",
    size: 22
  })), React.createElement("div", null, React.createElement("div", {
    className: "font-black"
  }, "\u062F\u0633\u062A\u06CC\u0627\u0631 \u0647\u0648\u0634\u0645\u0646\u062F \u0648\u0628\u200C\u0645\u0627\u0646\u06CC\u0627"), React.createElement("div", {
    className: "text-xs opacity-90 flex items-center gap-1"
  }, React.createElement("span", {
    className: "w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
  }), "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A"))), React.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "relative z-10 text-white/80 hover:text-white"
  }, React.createElement(Icon, {
    name: "x",
    size: 20
  }))), React.createElement("div", {
    className: "flex-1 overflow-y-auto bg-[#0b0b0f] relative flex flex-col",
    dir: "rtl"
  }, !registered ? React.createElement("div", {
    className: "p-5 flex-1 flex flex-col justify-center text-center"
  }, React.createElement("div", {
    className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/15 text-accent flex items-center justify-center"
  }, React.createElement(Icon, {
    name: "user-round",
    size: 30
  })), React.createElement("h3", {
    className: "text-primary font-black text-lg mb-2"
  }, "\u0642\u0628\u0644 \u0627\u0632 \u0634\u0631\u0648\u0639 \u06AF\u0641\u062A\u06AF\u0648"), React.createElement("p", {
    className: "text-secondary text-sm leading-7 mb-5"
  }, "\u0628\u0631\u0627\u06CC \u0627\u06CC\u0646\u06A9\u0647 \u067E\u06CC\u0627\u0645\u200C\u0647\u0627 \u062F\u0631 \u067E\u0646\u0644 \u062B\u0628\u062A \u0634\u0648\u0646\u062F\u060C \u0646\u0627\u0645 \u0648 \u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."), React.createElement("div", {
    className: "space-y-3"
  }, React.createElement("input", {
    value: userData.name,
    onChange: e => setUserData({
      ...userData,
      name: e.target.value
    }),
    placeholder: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
    className: "w-full bg-zinc-900 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-accent text-right"
  }), React.createElement("input", {
    value: userData.phone,
    onChange: e => setUserData({
      ...userData,
      phone: e.target.value
    }),
    placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633",
    className: "w-full bg-zinc-900 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-accent text-right"
  }), React.createElement("button", {
    onClick: () => userData.name.length > 2 && userData.phone.length > 9 ? setRegistered(true) : alert('نام و شماره تماس را کامل وارد کنید'),
    className: "w-full py-3 bg-accent text-white rounded-xl font-black"
  }, "\u0634\u0631\u0648\u0639 \u06AF\u0641\u062A\u06AF\u0648"))) : React.createElement("div", {
    className: "p-4 space-y-4 z-10 flex flex-col"
  }, React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-1"
  }, quickPrompts.map(q => React.createElement("button", {
    key: q,
    onClick: () => handleSend(q),
    disabled: blocked || isTyping,
    className: "px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300 hover:bg-accent/15 hover:text-white transition-colors disabled:opacity-50"
  }, q))), messages.map(msg => React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0
    },
    key: msg.id,
    className: `flex ${msg.isUser ? 'justify-start' : 'justify-end'}`
  }, React.createElement("div", {
    className: `max-w-[84%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.isUser ? 'bg-accent text-white rounded-tr-sm' : 'bg-zinc-800 text-zinc-200 rounded-tl-sm border border-white/5'}`
  }, msg.text, React.createElement("div", {
    className: `text-[10px] mt-1 opacity-60 ${msg.isUser ? 'text-left' : 'text-right'}`
  }, msg.time)))), isTyping && React.createElement("div", {
    className: "flex justify-end"
  }, React.createElement("div", {
    className: "bg-zinc-800 p-3 rounded-2xl rounded-tl-sm flex gap-1"
  }, React.createElement("span", {
    className: "w-2 h-2 bg-zinc-500 rounded-full animate-bounce"
  }), React.createElement("span", {
    className: "w-2 h-2 bg-zinc-500 rounded-full animate-bounce",
    style: {
      animationDelay: '0.1s'
    }
  }), React.createElement("span", {
    className: "w-2 h-2 bg-zinc-500 rounded-full animate-bounce",
    style: {
      animationDelay: '0.2s'
    }
  }))), React.createElement("div", {
    ref: messagesEndRef
  }))), React.createElement("div", {
    className: "p-3 bg-surface border-t border-border flex items-center gap-2 shrink-0",
    dir: "rtl"
  }, React.createElement("input", {
    type: "text",
    value: inputText,
    onChange: e => setInputText(e.target.value),
    onKeyDown: e => e.key === 'Enter' && handleSend(),
    disabled: blocked || !registered,
    placeholder: !registered ? 'ابتدا نام و شماره را وارد کنید' : blocked ? 'گفتگو موقتاً محدود شده' : 'درباره پروژه سایتت بپرس...',
    className: "flex-1 bg-zinc-900 border-none rounded-xl px-3 py-3 text-sm focus:ring-1 focus:ring-accent outline-none text-right disabled:opacity-50"
  }), React.createElement("button", {
    onClick: () => handleSend(),
    disabled: !inputText.trim() || blocked || isTyping || !registered,
    className: "p-3 bg-accent text-white rounded-full hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100"
  }, React.createElement(Icon, {
    name: "send",
    size: 18
  }))))), React.createElement(motion.button, {
    whileHover: {
      scale: 1.08
    },
    whileTap: {
      scale: 0.92
    },
    onClick: () => setIsOpen(!isOpen),
    className: "group relative w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/40 z-50 cursor-pointer"
  }, React.createElement("span", {
    className: "absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-70 pointer-events-none"
  }), isOpen ? React.createElement(Icon, {
    name: "x",
    size: 28
  }) : React.createElement("div", {
    className: "ai-chat-orb"
  }, React.createElement("span", {
    className: "ai-chat-eye left"
  }), React.createElement("span", {
    className: "ai-chat-eye right"
  }))));
};