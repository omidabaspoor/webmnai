const {
  useState,
  useEffect,
  useRef
} = React;
const {
  motion,
  AnimatePresence
} = window.Motion || {};
const Icon = ({
  name,
  size = 24,
  className = ""
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const iconElement = document.createElement('i');
      const uniqueAttr = `data-lucide-id-${Math.random().toString(36).substr(2, 9)}`;
      iconElement.setAttribute(uniqueAttr, name);
      iconElement.setAttribute('width', size);
      iconElement.setAttribute('height', size);
      ref.current.appendChild(iconElement);
      window.lucide.createIcons({
        nameAttr: uniqueAttr,
        attrs: {
          class: `lucide lucide-${name} ${className}`
        }
      });
    }
  }, [name, className, size]);
  return React.createElement("span", {
    ref: ref,
    className: "inline-flex items-center justify-center",
    style: {
      verticalAlign: 'middle'
    }
  });
};
const SpotlightCard = ({
  children,
  className = "",
  onClick
}) => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [gradient, setGradient] = useState('');
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    const {
      left,
      top
    } = currentTarget.getBoundingClientRect();
    mouseX.current = clientX - left;
    mouseY.current = clientY - top;
    setGradient(`radial-gradient(600px circle at ${mouseX.current}px ${mouseY.current}px, rgba(139, 92, 246, 0.1), transparent 40%)`);
  }
  return React.createElement("div", {
    className: `group relative border border-border bg-card/50 overflow-hidden rounded-3xl ${className}`,
    onMouseMove: handleMouseMove,
    onClick: onClick
  }, React.createElement("div", {
    className: "pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100",
    style: {
      background: gradient
    }
  }), React.createElement("div", {
    className: "relative h-full"
  }, children));
};
const IntroOverlay = ({
  onComplete
}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width,
      height,
      stars = [];
    let animationId;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };
    const initStars = () => {
      stars = [];
      const count = width < 768 ? 60 : 150;
      for (let i = 0; i < count; i++) stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width
      });
    };
    const draw = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      const cx = width / 2,
        cy = height / 2;
      for (let star of stars) {
        star.z -= 15;
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }
        const x = star.x / star.z * width + cx;
        const y = star.y / star.z * height + cy;
        const size = (1 - star.z / width) * 4;
        const opacity = 1 - star.z / width;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize);
    resize();
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return React.createElement(motion.div, {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden",
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0,
      pointerEvents: 'none'
    },
    transition: {
      duration: 1,
      delay: 4.5,
      ease: "easeInOut"
    },
    onAnimationComplete: onComplete
  }, React.createElement("canvas", {
    ref: canvasRef,
    id: "warp-canvas"
  }), React.createElement("div", {
    className: "relative z-10 flex flex-col items-center"
  }, React.createElement(motion.div, {
    initial: {
      scale: 0.5,
      opacity: 0,
      filter: "blur(20px)"
    },
    animate: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)"
    },
    transition: {
      duration: 0.5,
      delay: 2
    },
    className: "mb-4"
  }, React.createElement("div", {
    className: "text-6xl md:text-8xl font-black text-white tracking-tighter glitch-text",
    "data-text": "WEB MANIA"
  }, "WEB MANIA")), React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      delay: 2.8
    },
    className: "font-mono text-accent text-sm md:text-lg"
  }, React.createElement("span", {
    className: "text-white"
  }, ">"), " INITIALIZING_SYSTEM...")), React.createElement(motion.div, {
    className: "absolute top-0 left-0 w-full h-1/2 bg-black border-b border-zinc-800",
    animate: {
      y: "-100%"
    },
    transition: {
      duration: 1.2,
      delay: 4,
      ease: [0.76, 0, 0.24, 1]
    }
  }), React.createElement(motion.div, {
    className: "absolute bottom-0 left-0 w-full h-1/2 bg-black border-t border-zinc-800",
    animate: {
      y: "100%"
    },
    transition: {
      duration: 1.2,
      delay: 4,
      ease: [0.76, 0, 0.24, 1]
    }
  }));
};
const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(hover: none)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 900;
    if (isTouchDevice) return;
    let rafId;
    const moveCursor = e => {
      if (!isVisible) setIsVisible(true);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };
    const handleMouseOver = e => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', moveCursor, {
      passive: true
    });
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);
  if (!isVisible) return null;
  return React.createElement(React.Fragment, null, React.createElement(motion.div, {
    className: "fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference",
    animate: {
      x: position.x - 10,
      y: position.y - 10,
      scale: isHovering ? 1.8 : 1
    },
    transition: {
      type: "tween",
      duration: 0
    }
  }, React.createElement("div", {
    className: "w-5 h-5 rounded-full border-2 border-accent shadow-[0_0_20px_rgba(139,92,246,0.8)] bg-accent/20"
  })), React.createElement(motion.div, {
    className: "fixed top-0 left-0 pointer-events-none z-[9998]",
    animate: {
      x: position.x - 3,
      y: position.y - 3
    },
    transition: {
      type: "tween",
      duration: 0
    }
  }, React.createElement("div", {
    className: "w-1.5 h-1.5 rounded-full bg-accent/80"
  })));
};
const ParticleField = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    const resize = () => {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    };
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        const dx = this.x - mouseRef.current.x;
        const dy = this.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.fill();
      }
    }
    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) particles.push(new Particle());
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    const handleMouseMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    const handleMouseLeave = () => {
      mouseRef.current = {
        x: -1000,
        y: -1000
      };
    };
    resize();
    init();
    animate();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return React.createElement("canvas", {
    ref: canvasRef,
    className: "absolute inset-0 pointer-events-auto",
    style: {
      mixBlendMode: 'screen'
    }
  });
};