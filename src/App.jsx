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
