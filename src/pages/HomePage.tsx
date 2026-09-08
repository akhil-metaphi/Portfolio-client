import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Layers, MousePointer, Layout, Palette } from 'lucide-react';
import { PROJECTS } from '../data/projects.ts';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import './HomePage.css';

export default function HomePage() {
  const scrollToWork = () => {
    const workElem = document.getElementById('featured-work-section');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicesData = [
    {
      num: '01.',
      icon: Layers,
      title: 'Branding',
      desc: 'Visual identities, brand strategy, typography systems, logo design, and brand guidelines for contemporary projects.',
      bgClass: 'service-card-1'
    },
    {
      num: '02.',
      icon: MousePointer,
      title: 'Graphic Design',
      desc: 'Publication design, editorial layouts, poster series, signage, packaging, and print production collateral.',
      bgClass: 'service-card-2'
    },
    {
      num: '03.',
      icon: Layout,
      title: 'Illustration',
      desc: 'Editorial artwork, character sketches, vector art, digital sketchbook entries, and custom brand motifs.',
      bgClass: 'service-card-3'
    },
    {
      num: '04.',
      icon: Palette,
      title: 'Art Direction',
      desc: 'Photographic styling, spatial curation, object staging, visual atmosphere, and narrative storytelling.',
      bgClass: 'service-card-4'
    }
  ];

  return (
    <main className="home-page animate-fade-in">

      {/* 1. HERO SECTION */}
      <section className="hero-intro-section">
        <div className="container hero-intro-container">

          {/* Broad Widescreen 2-Column Grid */}
          <div className="hero-broad-grid">

            {/* Left Column: Greeting Speech Bubble */}
            <ScrollReveal className="hero-grid-left" delay={0}>
              <div className="speech-bubble-wrapper">
                <div className="speech-bubble-box">
                  <p className="speech-bubble-text">
                    Hi! I'm <span className="bubble-pink-name">Ronika</span>.<br />
                    I design, illustrate &amp; explore ideas<br />
                    that feel <span className="bubble-yellow-underline">human.</span>
                  </p>

                  <div className="speech-bubble-beak">
                    <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
                      <path d="M2 2 L30 14 L2 26 Z" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" strokeLinejoin="round" />
                      <line x1="2" y1="3" x2="2" y2="25" stroke="#FFFFFF" strokeWidth="4" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Layered Editorial Article & Photo Collage */}
            <ScrollReveal className="hero-grid-right" delay={150}>

              {/* Back Layer: Magazine / Article Page Mockup */}
              <div className="hero-art-layer">
                <div className="editorial-article-card">
                  <div className="article-column-text">
                    <p>
                      Designing visual narrative ecosystems that connect deeply with human emotions and brand identities.
                    </p>
                    <p>
                      Through intentional typography, organic sketch motifs, and editorial curation, every visual artifact tells a unique story across physical &amp; digital media.
                    </p>
                    <p>
                      Exploring visual concepts, editorial layouts, poster design, and identity systems.
                    </p>
                  </div>
                  <div className="article-footer-row">
                    <div className="article-artwork-doodle">
                      <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                        <path d="M5 35 C 15 10, 35 10, 45 35 Z" fill="#9333EA" opacity="0.75" />
                        <circle cx="25" cy="18" r="7" fill="#F59E0B" />
                        <path d="M10 38 Q 25 20 40 38" stroke="#111111" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <div className="article-title-label">EDITORIAL ART ✦</div>
                  </div>
                </div>
              </div>

              {/* Front Layer: Ronika's Main Portrait Card */}
              <div className="hero-portrait-layer">
                <div className="polaroid-tape-strip" />

                <div className="doodle-sparkle-star">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M17 0L19.5 14.5L34 17L19.5 19.5L17 34L14.5 19.5L0 17L14.5 14.5L17 0Z" fill="#111111" />
                  </svg>
                </div>

                <div className="portrait-photo-container">
                  <img
                    src="/assets/AboutMe/IMG_1423_JPG.avif"
                    alt="Ronika Bhatia"
                    className="portrait-photo-img"
                  />

                  <div className="portrait-designer-tag">
                    VISUAL DESIGNER
                  </div>
                </div>
              </div>

            </ScrollReveal>

          </div>

          {/* Positioning Statement & Scroll Chevron */}
          <ScrollReveal className="positioning-container" delay={250}>
            <p className="positioning-statement-text">
              *Designs experiences with emphasis on visual design strategies &amp; systems
            </p>
            <button
              className="scroll-indicator-btn"
              onClick={scrollToWork}
              aria-label="Scroll down to featured work"
              title="Scroll down"
            >
              <ChevronDown size={18} />
            </button>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. FEATURED WORK SHOWCASE (5 Featured Projects) */}
      <section id="featured-work-section" className="psycolops-projects-exhibition">
        <div className="container">

          {/* Header Row with "See All Projects +" Pill Button */}
          <ScrollReveal>
            <div className="exhibition-header-row">
              <h2 className="heading-2">Some Projects I’ve Worked on</h2>
              <Link to="/work" className="btn-pill-cta">
                See All Projects +
              </Link>
            </div>
          </ScrollReveal>

          {/* Alternating Project Stack (Top 5 Featured Projects) */}
          <div className="psycolops-projects-stack">
            {PROJECTS.slice(0, 5).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={5}
              />
            ))}
          </div>

          {/* Centered "See More Work >" Button */}
          <ScrollReveal delay={100}>
            <div className="see-more-work-wrapper">
              <Link to="/work" className="btn-see-more-work">
                See More Work &gt;
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. ABOUT / BIO SECTION */}
      <section className="home-about-section">
        <div className="container home-about-container">
          <ScrollReveal className="home-about-content" delay={0}>
            <h2 className="home-about-text">
              Hello, I am Ronika ✨. I am a Visual Designer &amp; Illustrator based in India. Graphic design is my passion 🙏. I create thoughtful branding with human visual narratives 💥 which are sure to captivate people 👀.
            </h2>
            <div className="home-about-actions">
              <Link to="/about" className="btn-editorial-dark">
                See About Me
              </Link>
              <Link to="/contact" className="btn-pill-cta">
                Get In Touch
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="home-about-visual" delay={150}>
            <div className="portrait-frame secondary">
              <img
                src="/assets/AboutMe/IMG_1423_JPG.avif"
                alt="Ronika Bhatia"
                className="portrait-img"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="home-services-section">
        <div className="container">
          <ScrollReveal>
            <p className="services-section-title">Services I offer:</p>
          </ScrollReveal>
          <div className="services-grid">
            {servicesData.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <ScrollReveal key={s.num} delay={idx * 100}>
                  <div className={`service-card ${s.bgClass}`}>
                    <div className="service-card-top">
                      <IconComp className="service-card-icon" size={36} />
                      <span className="service-card-num">{s.num}</span>
                      <h3 className="service-card-title">{s.title}</h3>
                    </div>
                    <div className="service-card-bottom">
                      <div className="service-card-divider" />
                      <p className="service-card-desc">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}