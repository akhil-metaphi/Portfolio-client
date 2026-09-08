import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, MousePointer, Layout, Palette } from 'lucide-react';
import { PROJECTS } from '../data/projects.ts';
import ProjectCarousel from '../components/ProjectCarousel';
import './AboutPage.css';

export default function AboutPage() {
  const portraitMain = "/assets/AboutMe/IMG_1423_JPG.avif";
  const portraitSecondary = "/assets/projects/Bombayphilia/d8b75e_8c4bb68c06464764be3a23d978863346~mv2.webp";

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
    <article className="psycolops-about-page animate-fade-in">
      
      {/* 1. Hero Intro Section (2-Column) */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            
            <div className="about-hero-left">
              <div className="about-portrait-wrapper">
                <img 
                  src={portraitMain} 
                  alt="Ronika Bhatia" 
                  className="about-portrait-img"
                />
              </div>
            </div>

            <div className="about-hero-right">
              <h3 className="about-greeting-title">Hello!</h3>
              <h1 className="about-headline">
                I am Ronika. I am a visual designer based in Mumbai &amp; Worldwide.
              </h1>
              <div className="about-cta-wrapper">
                <Link to="/contact" className="about-cta-btn">
                  GET IN TOUCH WITH ME
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Narrative Bio & Secondary Photo (2-Column) */}
      <section className="about-bio-section">
        <div className="container">
          <div className="about-bio-grid">
            
            <div className="about-bio-text">
              <p>
                I am a visual designer and illustrator dedicated to crafting brand identities, editorial publications, typography, and comprehensive visual systems.
              </p>
              <p>
                My approach balances conceptual research with hands-on graphic experimentation—drawing inspiration from vernacular typography, street signages, and physical print production.
              </p>
              <p>
                I collaborate with studios, brands, and independent cultural projects to create visual identity systems that reflect connection, clarity, and enduring aesthetic impact.
              </p>
            </div>

            <div className="about-bio-photo">
              <div className="secondary-photo-wrapper">
                <img 
                  src={portraitSecondary} 
                  alt="Ronika Bhatia Design Studio" 
                  className="secondary-photo-img"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Section (Matches Homepage 1:1) */}
      <section className="about-services-section">
        <div className="container">
          <p className="services-section-title">Services I offer:</p>

          <div className="services-grid">
            {servicesData.map((s) => {
              const IconComp = s.icon;
              return (
                <div key={s.num} className={`service-card ${s.bgClass}`}>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. See More Work Showcase (Interactive Carousel displaying 3 at a time) */}
      <ProjectCarousel projects={PROJECTS} title="When I'm not working, I like to explore new mediums:" />

    </article>
  );
}
