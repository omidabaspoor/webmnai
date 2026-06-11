/* ===== کامپوننت Icon ساده‌شده برای پنل ادمین ===== */
const { useState, useEffect, useRef } = React;

const Icon = ({ name, size = 20, className = "" }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (window.lucide && ref.current) {
            ref.current.innerHTML = `<i data-icon-name="${name}"></i>`;
            window.lucide.createIcons({
                root: ref.current,
                nameAttr: 'data-icon-name',
                attrs: { class: `lucide lucide-${name} ${className}`, width: size, height: size }
            });
        }
    }, [name, className, size]);
    return <span ref={ref} className="inline-flex items-center justify-center" style={{ verticalAlign: 'middle' }} />;
};

// آدرس API بک‌اند
const API_URL = 'api.php';
