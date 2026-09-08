import React from 'react';
import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <main className="psycolops-contact-page animate-fade-in">
      <section className="contact-hero section">
        <div className="container contact-container">

          {/* Paper Airplane Motif Image */}
          <div className="paper-plane-wrapper" title="Ronika Bhatia Contact">
            <img 
              src="/assets/AboutMe/paper-plane-transparent.png" 
              alt="Paper Plane" 
              className="paper-plane-img"
            />
          </div>

          <h1 className="heading-1 contact-headline">
            Let's work together.
          </h1>
          
          {/* Direct Email CTA */}
          <div className="contact-info-block">
            <a href="mailto:ronikbhatia@gmail.com" className="huge-contact-link link-underline">
              ronikbhatia@gmail.com <ArrowUpRight size={28} style={{display:'inline', verticalAlign: 'middle'}}/>
            </a>

            {/* Handle Bar */}
            <div className="contact-handles-meta">
              <span>E-mail: <strong>ronikbhatia@gmail.com</strong></span>
              <span className="handle-divider">|</span>
              <span>Instagram: <strong>@ronika2304</strong></span>
            </div>

            {/* Client's Original Welcoming Message */}
            <p className="contact-welcome-text">
              If you have any questions, enquiries, or would like to discuss a potential collaboration, 
              please feel free to reach out. I look forward to connecting with you!
            </p>
          </div>

          {/* Social Row */}
          <div className="contact-social-row">
            <a href="https://instagram.com/ronika2304" target="_blank" rel="noreferrer" className="social-link">
              <Instagram size={18} /> Instagram (@ronika2304)
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:ronikbhatia@gmail.com" className="social-link">
              <Mail size={18} /> Gmail
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
