/* ===== پیکربندی Tailwind ===== */
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--bg-primary)',
                surface: 'var(--bg-surface)',
                card: 'var(--bg-card)',
                border: 'var(--border-color)',
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                accent: '#8b5cf6',
                neon: '#00f3ff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                persian: ['Vazirmatn', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
};
