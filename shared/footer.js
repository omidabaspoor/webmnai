/* ===== فوتر خلاقانه وب‌مانیا ===== */
const MinimalFooter = ({ t }) => (
    <footer className="wm-footer relative z-10 mt-auto pb-28 md:pb-10 pt-10">
        <div className="max-w-6xl mx-auto px-4">
            <div className="wm-footer-shell">
                <div className="wm-footer-orbit" aria-hidden="true">
                    <span></span><span></span><span></span>
                </div>

                <div className="wm-footer-main">
                    <div className="wm-footer-brand">
                        <div className="wm-footer-logo">
                            <img src="../logo.jpg" alt="Web Mania logo" />
                        </div>
                        <div>
                            <div className="wm-footer-title">Web Mania</div>
                            <p>طراحی سایت اختصاصی، سریع و قابل توسعه؛ از سایت ساده تا تجربه‌های هوشمند.</p>
                        </div>
                    </div>

                    <div className="wm-footer-actions">
                        <button onClick={() => goToPage('contact')} className="wm-footer-cta">
                            شروع همکاری <Icon name="arrow-left" size={18} />
                        </button>
                        <button onClick={() => goToPage('portfolio')} className="wm-footer-link-btn">
                            نمونه‌کارها
                        </button>
                    </div>
                </div>

                <div className="wm-footer-grid">
                    <div className="wm-footer-mini-card">
                        <Icon name="code-2" size={20} />
                        <span>کدنویسی اختصاصی</span>
                    </div>
                    <div className="wm-footer-mini-card">
                        <Icon name="zap" size={20} />
                        <span>سرعت و تجربه روان</span>
                    </div>
                    <div className="wm-footer-mini-card">
                        <Icon name="search-check" size={20} />
                        <span>سئوی اولیه و زیرساخت</span>
                    </div>
                    <div className="wm-footer-mini-card">
                        <Icon name="bot" size={20} />
                        <span>آماده هوشمندسازی</span>
                    </div>
                </div>

                <div className="wm-footer-bottom">
                    <div className="wm-footer-copy">© ۲۰۲۶ وب‌مانیا — تمامی حقوق محفوظ است.</div>
                    <button onClick={() => window.location.href = '../privacy/index.html'} className="wm-privacy-link" aria-label="مشاهده صفحه حریم خصوصی">
                        <Icon name="shield-check" size={16} />
                        <span>حریم خصوصی</span>
                        <Icon name="external-link" size={14} />
                    </button>
                </div>
            </div>
        </div>
    </footer>
);
