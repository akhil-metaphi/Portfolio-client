import React from 'react';
import { PROJECTS } from '../data/projects.ts';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import './WorkPage.css';

export default function WorkPage() {
  return (
    <main className="psycolops-work-page animate-fade-in">
      <section className="psycolops-projects-exhibition">
        <div className="container">
          <ScrollReveal>
            <div className="exhibition-header-row work-page-header">
              <h1 className="work-page-title">All Projects</h1>
            </div>
          </ScrollReveal>

          <div className="psycolops-projects-stack">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={PROJECTS.length}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
