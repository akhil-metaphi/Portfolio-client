import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/portfolio';
import './ProjectCard.css';

export interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

export default function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setIsVisible(true);
              });
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  if (!project) return null;

  // Psycolops dynamic alternating alignment (10/12 col width with offset-md-2)
  const isRightAligned = index % 2 !== 0;
  const rowClass = `project-card-row ${isVisible ? 'is-visible' : ''}`;
  const staggerDelay = (index % 4) * 130;

  return (
    <article
      ref={cardRef}
      className={rowClass}
      style={{ '--card-delay': `${staggerDelay}ms` } as React.CSSProperties}
    >
      <div className={`project-card-wrapper ${isRightAligned ? 'align-right' : ''}`}>
        <Link to={`/project/${project.slug}`} className="psycolops-project-link" title={`View ${project.title}`}>

          {/* Artwork Display Container */}
          <div className="psycolops-project-visual">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={project.title}
                className="psycolops-project-img img-fluid rounded"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            ) : (
              <div className="psycolops-placeholder">
                <span className="text-label">[ Artwork Placeholder ]</span>
              </div>
            )}
          </div>

          {/* Metadata Split Block — Psycolops Exact Inspect Structure */}
          <div className="display-flex mt-3">
            <div className="width-custom position-relative">
              <h5 className="subtitle title-link">{project.title}</h5>
              <h6 className="color-grey">{project.category}</h6>
            </div>
            <div>
              <p className="mt-2 color-grey">
                {project.description}
              </p>
            </div>
          </div>

        </Link>
      </div>
    </article>
  );
}
