import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_DATA, AboutContent } from '../data/about.ts';
import ServicesSection from '../components/ServicesSection';
import './AboutPage.css';

export default function AboutPage() {
  const [content, setContent] = useState<AboutContent | null>(null);

  // In the future, this is where the API call will happen.
  // For now, it loads from the frontend config object.
  useEffect(() => {
    // Simulate API fetch delay
    const loadContent = async () => {
      // try {
      //   const res = await fetch('/api/about');
      //   const data = await res.json();
      //   setContent(data);
      // } catch (error) {
      //   console.error("Failed to fetch About content, using fallback.", error);
      //   setContent(ABOUT_DATA);
      // }
      setContent(ABOUT_DATA);
    };

    loadContent();
  }, []);

  if (!content) return null; // Or a loading spinner

  return (
    <main className="about-page animate-fade-in">
      <section className="about-editorial-page">
        <div className="container about-container">
        
        <div className="about-content-wrapper">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="about-text-column">
            
            <div className="about-top-label">
              <span>{content.topLabel}</span>
              <div className="about-label-line"></div>
            </div>

            <h1 
              className="about-main-heading"
              dangerouslySetInnerHTML={{ __html: content.heading }}
            />
            
            <div className="about-body-text">
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="about-cta-group">
              {content.ctaPrimary.link.startsWith('#') ? (
                <a 
                  href={content.ctaPrimary.link} 
                  className="btn-editorial-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(content.ctaPrimary.link)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {content.ctaPrimary.label} &rarr;
                </a>
              ) : (
                <Link to={content.ctaPrimary.link} className="btn-editorial-dark">
                  {content.ctaPrimary.label} &rarr;
                </Link>
              )}
              
              <Link to={content.ctaSecondary.link} className="btn-pill-cta">
                {content.ctaSecondary.label} &rarr;
              </Link>
            </div>
            
            <div className="about-scroll-indicator">
              <div className="about-scroll-line"></div>
              <span>{content.scrollText}</span>
            </div>

          </div>

          {/* RIGHT: ILLUSTRATION */}
          <div className="about-visual-column">
            <img 
              src={content.illustrationUrl} 
              alt={content.illustrationAlt} 
              className="about-illustration"
            />
          </div>

        </div>
        </div>
      </section>

      <ServicesSection />
    </main>
  );
}
