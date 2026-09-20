  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <span>EduHub • Smart Kindergarten</span>
          <span>+998 93 448 55 99</span>
        </div>
      </header>

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="EduHub home">
            <span className="brand-mark">EH</span>
            <span>
              <strong>EduHub</strong>
              <small>Smart Kindergarten</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#systems">{t.navSystems}</a>
            <a href="#play">{t.navPlay}</a>
            <a href="#activities">{t.navActivities}</a>
            <a href="#academy">{t.navAcademy}</a>
            <a href="#tools">{t.navTools}</a>
            <a href="#videos">{t.navVideos}</a>
            <a href="#resources">{t.navResources}</a>
            <a href="#contact">{t.navContact}</a>
          </div>

          <div className="nav-actions">
            <div className="lang-switcher" aria-label="Language selector">
              {['uz', 'ru', 'en'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === language ? 'active' : ''}
                  onClick={() => setLanguage(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="menu-button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              ☰
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-menu container">
            <a href="#systems" onClick={() => setMobileOpen(false)}>{t.navSystems}</a>
            <a href="#play" onClick={() => setMobileOpen(false)}>{t.navPlay}</a>
            <a href="#activities" onClick={() => setMobileOpen(false)}>{t.navActivities}</a>
            <a href="#academy" onClick={() => setMobileOpen(false)}>{t.navAcademy}</a>
            <a href="#tools" onClick={() => setMobileOpen(false)}>{t.navTools}</a>
            <a href="#videos" onClick={() => setMobileOpen(false)}>{t.navVideos}</a>
            <a href="#resources" onClick={() => setMobileOpen(false)}>{t.navResources}</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>{t.navContact}</a>
          </div>
        )}
      </nav>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{t.heroTag}</span>
              <div className="hero-badges" aria-label="EduHub strengths">
                <span>Playful</span>
                <span>Research-inspired</span>
                <span>Teacher-first</span>
              </div>
              <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
              <p>{t.heroText}</p>
              <div className="cta-row">
                <a href="#systems" className="btn btn-primary">{t.heroPrimary}</a>
                <a href="#activities" className="btn btn-secondary">{t.heroSecondary}</a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Education overview visual">
              <div className="floating-badge floating-badge-top">Global learning design</div>
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="panel">
                <div className="panel-label">Smart Classroom</div>
                <h3>Discover • Play • Observe • Reflect</h3>
                <div className="mini-grid">
                  <div className="mini-card">
                    <strong>🎭 Play</strong>
                    <span>Role play & storytelling</span>
                  </div>
                  <div className="mini-card">
                    <strong>🔎 Explore</strong>
                    <span>Inquiry & discovery</span>
                  </div>
                  <div className="mini-card">
                    <strong>🤝 Grow</strong>
                    <span>Social & life skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
