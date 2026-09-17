export interface AboutContent {
  topLabel: string;
  heading: string;
  paragraphs: string[];
  illustrationUrl: string;
  illustrationAlt: string;
  ctaPrimary: {
    label: string;
    link: string;
  };
  ctaSecondary: {
    label: string;
    link: string;
  };
  scrollText: string;
}

export const ABOUT_DATA: AboutContent = {
  topLabel: "ABOUT ME",
  heading: "I am <span class=\"font-italic\">Ronika.</span><br/>A visual designer<br/>and illustrator based<br/>in Mumbai & Worldwide.",
  paragraphs: [
    "I am dedicated to crafting brand identities, editorial publications, typography, and comprehensive visual systems.",
    "My approach balances conceptual research with hands-on graphic experimentation—drawing inspiration from vernacular typography, street signages, and physical print production.",
    "I collaborate with studios, brands, and independent cultural projects to create visual identity systems that reflect connection, clarity, and enduring aesthetic impact."
  ],
  illustrationUrl: "/assets/AboutMe/about-image.png",
  illustrationAlt: "Ronika Illustration",
  ctaPrimary: {
    label: "Services",
    link: "#services"
  },
  ctaSecondary: {
    label: "Get In Touch",
    link: "/contact"
  },
  scrollText: "SCROLL TO EXPLORE"
};
