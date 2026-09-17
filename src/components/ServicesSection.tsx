import React from 'react';
import { Layout, MousePointer, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ServicesSection() {
  const servicesData = [
    {
      num: '01.',
      icon: Layout,
      title: 'Illustration',
      desc: 'Editorial artwork, character sketches, vector art, digital sketchbook entries, and custom brand motifs.',
      bgClass: 'service-card-white',
      titleColor: '#e06e9b' // subtle pink
    },
    {
      num: '02.',
      icon: MousePointer,
      title: 'Design',
      desc: 'Visual identities, brand strategy, typography systems, editorial layouts, poster series, and packaging.',
      bgClass: 'service-card-white',
      titleColor: '#8aab18' // subtle green
    },
    {
      num: '03.',
      icon: Palette,
      title: 'Artwork Commissions',
      desc: 'Custom artistic commissions, spatial curation, object staging, and narrative storytelling for contemporary spaces.',
      bgClass: 'service-card-white',
      titleColor: '#d89728' // subtle yellow/orange
    }
  ];

  return (
    <section id="services" className="home-services-section">
      <div className="container">
        <ScrollReveal>
          <p className="services-section-title">Services I offer:</p>
        </ScrollReveal>
        <div className="home-services-grid">
          {servicesData.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <ScrollReveal key={s.num} delay={idx * 100} className="service-card-wrapper">
                <div className={`service-card ${s.bgClass}`}>
                  <div className="service-card-top">
                    <IconComp className="service-card-icon" size={24} />
                    <span className="service-card-num">{s.num}</span>
                    <h3 className="service-card-title" style={{ color: s.titleColor }}>{s.title}</h3>
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
  );
}
