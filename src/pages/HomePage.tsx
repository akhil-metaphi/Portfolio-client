import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Layers, MousePointer, Layout, Palette } from 'lucide-react';
import { PROJECTS, getStandoutWorks, StandoutWork } from '../data/projects.ts';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import ServicesSection from '../components/ServicesSection';
import './HomePage.css';

export default function HomePage() {
  const standoutWorks = React.useMemo(() => getStandoutWorks(), []);
  const [colCount, setColCount] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setColCount(1);
      else if (window.innerWidth < 1024) setColCount(2);
      else setColCount(3);
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getColumns = (items: StandoutWork[], count: number) => {
    const cols: StandoutWork[][] = Array.from({ length: count }, () => []);
    items.forEach((item, i) => {
      cols[i % count].push(item);
    });
    return cols;
  };

  const masonryColumns = getColumns(standoutWorks, colCount);
  const scrollToWork = () => {
    const workElem = document.getElementById('featured-work-section');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="home-page animate-fade-in">

      {/* 1. HERO SECTION - Editorial Artwork Led */}
      <section className="editorial-hero-section">
        <div className="container editorial-hero-container">
          <div className="editorial-hero-composition full-bleed-wrapper">
            <img
              src="/assets/Client/HeroImage.png"
              alt="Ronika Bhatia Artwork"
              className="editorial-hero-bg-img"
            />

            <div className="editorial-hero-overlay-left">
              <ScrollReveal delay={0}>
                <p className="editorial-styled-quote">
                  Works of art<br />
                  make rules,<br />
                  rules do not make<br />
                  works of art.
                </p>
                <p className="editorial-quote-author">
                  — Claude Debussy
                </p>
              </ScrollReveal>
            </div>
          </div>
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

          {/* Standout Work Masonry Showcase */}
          <div className="standout-masonry-grid" style={{ '--col-count': colCount } as React.CSSProperties}>
            {masonryColumns.map((col, colIndex) => (
              <div key={`col-${colIndex}`} className="standout-masonry-column">
                {col.map((work) => (
                  <ScrollReveal key={work.id}>
                    <Link to={`/project/${work.projectSlug}`} className="standout-item">
                      <img
                        src={work.imageUrl}
                        alt={work.title}
                        className="standout-image"
                        loading="lazy"
                      />
                      <div className="standout-label-overlay">
                        <h3 className="standout-title">{work.title}</h3>
                        <p className="standout-category">{work.category}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
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
              Hello, I am Ronika. I am a Visual Designer &amp; Illustrator based in India. Graphic design is my passion. I create thoughtful branding with human visual narratives which are sure to captivate people.
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
            <img
              src="/assets/AboutMe/IMG_1423_JPG.avif"
              alt="Ronika Bhatia"
              className="about-clean-img"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <ServicesSection />

    </main>
  );
}