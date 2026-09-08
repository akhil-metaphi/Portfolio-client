import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export interface SocialLink {
  name: string;
  url: string;
  isExternal?: boolean;
}

export default function Footer() {
  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const socialLinks: SocialLink[] = [
    { name: 'Instagram', url: 'https://instagram.com/ronika2304', isExternal: true },
    { name: 'LinkedIn', url: 'https://linkedin.com', isExternal: true },
    { name: 'GMail', url: 'mailto:ronikbhatia@gmail.com', isExternal: false }
  ];

  return (
    <footer className="minimal-footer">
      <div className="container minimal-footer-container">

        {/* Banner Headline Callout */}
        <h3 className="footer-cta-headline font-74">
          LETS BUILD SOMETHING COOL TOGETHER :)
        </h3>

        {/* Secondary Nav Links */}
        <div className="footer-link">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className="footer-nav-link">
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Contact Block */}
        <div className="footer-contact-block">
          <h3 className="footer-contact-title font-36">Contact</h3>
          <div className="footet-social">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noreferrer' : undefined}
                className="footer-pill-btn"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
