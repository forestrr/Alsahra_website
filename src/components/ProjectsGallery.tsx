import { useState } from 'react';
import { projects, type Project } from '../data/projects';

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Car Parking Shades',
    'Tensile Shades',
    'Pergolas & Louvers',
    'Customized Tents',
    'Steel & Sheds',
    'Recreation & Play',
    'Trades & Panels'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="bg-navy-darker py-24 px-6 sm:px-10 lg:px-16 border-t border-navy-mid relative">
      <div className="max-w-7xl mx-auto">
        {/* Header and Category Filters */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-primary text-xs uppercase tracking-[2px] font-semibold block mb-3">
              Selected Works & References
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] text-canvas tracking-tight">
              Engineered Across the UAE
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold-accent text-navy-darker border-gold-accent font-semibold shadow-md'
                    : 'bg-navy-card/60 text-ink-secondary border-white/10 hover:text-canvas hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-navy-card rounded-2xl overflow-hidden border border-navy-border hover:border-gold-accent/50 transition-all duration-300 flex flex-col shadow-lg hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-navy-darker overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Category Pill */}
                <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded bg-navy-darker/80 backdrop-blur-sm text-gold-accent border border-white/10">
                  {project.category}
                </span>

                {/* Click to Expand Prompt */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy-darker/70 backdrop-blur-sm flex items-center justify-center text-canvas opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-ink-muted font-mono mb-2">
                    <span>{project.location || 'UAE Project'}</span>
                  </div>
                  <h3 className="font-body font-bold text-lg text-canvas group-hover:text-gold-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  {project.details && (
                    <p className="font-body text-ink-secondary text-xs leading-relaxed line-clamp-2">
                      {project.details}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-navy-mid/60 flex items-center justify-between text-xs text-gold-accent font-semibold">
                  <span>View High-Res Photo</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Res Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-navy-darker/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-navy-card max-w-4xl w-full rounded-3xl overflow-hidden border border-navy-border shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-navy-mid flex items-center justify-between bg-navy-darker/80">
              <div>
                <span className="font-mono text-xs text-gold-accent uppercase tracking-wider">{selectedProject.category}</span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-canvas">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-navy-mid flex items-center justify-center text-canvas hover:bg-primary transition-colors"
                aria-label="Close Preview"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative bg-black flex-1 overflow-hidden flex items-center justify-center min-h-[300px] max-h-[60vh]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-navy-darker flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-mono text-xs text-ink-muted mb-1">Location: {selectedProject.location}</div>
                <p className="font-body text-xs sm:text-sm text-ink-secondary">{selectedProject.details}</p>
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="bg-primary hover:bg-primary-soft text-canvas text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors shrink-0"
              >
                Inquire Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
