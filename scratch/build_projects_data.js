import fs from 'fs';
import path from 'path';

const projectsDir = path.resolve('public/assets/projects');

const projectFolderMapping = {
  "bombayphilia": "Bombayphilia",
  "bombayphilia-shoot": "Bombayphilia Shoot",
  "illustration-sketches": "Illustration & Sketches",
  "packaging-design": "Packaging Design",
  "text-me": "Text Me",
  "thinking-cap": "Thinking Cap",
  "live-and-breathe": "Live & Breathe"
};

const projectFilesMap = {};

for (const [slug, folderName] of Object.entries(projectFolderMapping)) {
  const dirPath = path.join(projectsDir, folderName);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.'));
    projectFilesMap[slug] = files.map(f => `/assets/projects/${folderName}/${f}`);
  }
}

console.log("Found files for projects:");
for (const [slug, files] of Object.entries(projectFilesMap)) {
  console.log(`- ${slug}: ${files.length} images`);
}

// Now read src/data/projects.ts, update the images array for each project, and save
const projectsTsPath = path.resolve('src/data/projects.ts');
let content = fs.readFileSync(projectsTsPath, 'utf8');

// We will construct the updated PROJECTS array cleanly
const projectsData = [
  {
    id: "proj-bombayphilia",
    slug: "bombayphilia",
    title: "Bombayphilia",
    category: "Publication & Brand Identity",
    year: "2024",
    role: "Visual Designer & Illustrator",
    description: "Editorial and brand identity examining vernacular typography, street signages, graphic motifs, and textures of Mumbai. Includes publication design and custom typography.",
    heroImage: "/assets/Cover Image/1033294708259918845.jpg",
    aspect: "landscape",
    featured: true,
    tags: ["Publication Design", "Visual Identity", "Typography", "Print Production"],
    images: projectFilesMap["bombayphilia"]
  },
  {
    id: "proj-bombayphilia-shoot",
    slug: "bombayphilia-shoot",
    title: "Bombayphilia — Editorial Shoot",
    category: "Art Direction & Photography",
    year: "2024",
    role: "Art Director",
    description: "Photographic shoot and art direction for the physical publication of Bombayphilia. Focuses on paper textures, natural lighting, and object staging.",
    heroImage: "/assets/Cover Image/1600x900 Resolution Monkey Luffy 4k One Piece 2024 Art 1600x900 Resolution Wallpaper - Wallpapers Den.jpg",
    aspect: "portrait",
    featured: true,
    tags: ["Art Direction", "Photography Styling", "Spatial Curation"],
    images: projectFilesMap["bombayphilia-shoot"]
  },
  {
    id: "proj-illustration-sketches",
    slug: "illustration-sketches",
    title: "Illustration & Sketches",
    category: "Editorial & Vector Artwork",
    year: "2024",
    role: "Illustrator",
    description: "Selected editorial illustrations, character sketches, vector artwork, and digital sketchbook entries exploring contemporary visual motifs.",
    heroImage: "/assets/Cover Image/719801952986309322.jpg",
    aspect: "square",
    featured: true,
    tags: ["Editorial Illustration", "Vector Art", "Digital Sketching"],
    images: projectFilesMap["illustration-sketches"]
  },
  {
    id: "proj-packaging-design",
    slug: "packaging-design",
    title: "Packaging Design Showcase",
    category: "Packaging & Structural Design",
    year: "2023",
    role: "Graphic Designer",
    description: "Packaging design series exploring sustainable materials, unboxing mechanics, custom die-lines, and typographic labeling.",
    heroImage: "/assets/Cover Image/download.jpg",
    aspect: "landscape",
    featured: true,
    tags: ["Packaging Design", "Label Design", "Structural Die-lines"],
    images: projectFilesMap["packaging-design"]
  },
  {
    id: "proj-text-me",
    slug: "text-me",
    title: "Text Me",
    category: "Poster Series & Typography",
    year: "2023",
    role: "Graphic Designer",
    description: "Graphic poster and typography series exploring contemporary messaging, typography layouts, and screen graphics.",
    heroImage: "/assets/Cover Image/HD wallpaper_ Dodge, Dodge Challenger SRT, Dodge Challenger SRT Hellcat.jpg",
    aspect: "portrait",
    featured: false,
    tags: ["Poster Design", "Typography", "Interface Graphics"],
    images: projectFilesMap["text-me"]
  },
  {
    id: "proj-thinking-cap",
    slug: "thinking-cap",
    title: "Thinking Cap",
    category: "Visual Identity & Guidelines",
    year: "2023",
    role: "Student Designer",
    description: "Academic branding project including visual identity guidelines, workbook design, and exhibition print materials.",
    heroImage: "/assets/Cover Image/Japanese Castle Pixel Art Wallpaper.jpg",
    aspect: "landscape",
    featured: false,
    tags: ["Visual Identity", "Publication Layout", "Research"],
    images: projectFilesMap["thinking-cap"]
  },
  {
    id: "proj-live-and-breathe",
    slug: "live-and-breathe",
    title: "Live & Breathe",
    category: "Wellness Brand & Editorial",
    year: "2023",
    role: "Designer & Illustrator",
    description: "Branding and editorial layout project examining wellness identity design and digital compositions.",
    heroImage: "/assets/Cover Image/Painting.jpg",
    aspect: "portrait",
    featured: false,
    tags: ["Brand Exploration", "Illustration", "Digital Collateral"],
    images: projectFilesMap["live-and-breathe"]
  }
];

const fileContent = `/**
 * Ronika Bhatia Portfolio — Project Data Store (Typed TS CMS Schema)
 */
import type { Project, ProjectCategory } from '../types/portfolio';

export const PROJECTS: Project[] = ${JSON.stringify(projectsData, null, 2)};

export const CATEGORIES: ProjectCategory[] = [
  "All",
  "Branding",
  "Graphic Design",
  "Illustration",
  "Art Direction",
  "Personal Project",
  "University Project"
];

export function getProjects(category: ProjectCategory = "All"): Project[] {
  if (!category || category === "All") return PROJECTS;
  return PROJECTS.filter(p => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}
`;

fs.writeFileSync(projectsTsPath, fileContent);
console.log("Successfully updated src/data/projects.ts with all project images!");
