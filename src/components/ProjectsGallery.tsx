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

  const getGridClasses = (idx: number) => {
    // Dynamic masonry pattern — only grid column classes (no arbitrary min-h values)
    const pos = idx % 6;
    switch(pos) {
      case 0: return "col-span-12 lg:col-span-8";
      case 1: return "col-span-12 sm:col-span-6 lg:col-span-4";
      case 2: return "col-span-12 sm:col-span-6 lg:col-span-4";
      case 3: return "col-span-12 sm:col-span-6 lg:col-span-4";
      case 4: return "col-span-12 sm:col-span-6 lg:col-span-4";
      case 5: return "col-span-12 lg:col-span-12";
      default: return "col-span-12 lg:col-span-4";
    }
  };

  const getMinHeight = (idx: number): string => {
    const pos = idx % 6;
    switch(pos) {
      case 0: return "500px";
      case 1: return "500px";
      case 5: return "600px";
      default: return "400px";
    }
  };

  return (
    <section id="projects" className="bg-navy-darker py-24 px-6 sm:px-10 lg:px-16 border-t border-navy-mid relative">
      <div className="max-w-7xl mx-auto">
        {/* Header and Category Filters */}
        <div className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-gold-accent"></span>
              <span className="font-mono text-gold-accent text-xs uppercase tracking-[0.2em] font-semibold">
                Selected Works & References
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-canvas tracking-tight">
              Engineered Across the UAE.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 xl:justify-end max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs sm:text-sm px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold-accent text-navy-darker border-gold-accent font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-navy-darker text-ink-secondary border-white/10 hover:text-canvas hover:border-gold-accent/50 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{ minHeight: getMinHeight(idx) }}
              className={`group cursor-pointer rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-500 hover:-translate-y-2 ${getGridClasses(idx)}`}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Cinematic Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-darker via-navy-darker/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gold-accent mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Category Pill - Top Right */}
              <div className="absolute top-6 right-6 z-20">
                <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-canvas border border-white/20 group-hover:bg-gold-accent group-hover:text-navy-darker group-hover:border-gold-accent transition-colors duration-300">
                  {project.category}
                </span>
              </div>

              {/* Content - Bottom Aligned */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-20 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 text-xs text-gold-accent font-mono mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="w-4 h-[1px] bg-gold-accent"></span>
                  <span>{project.location || 'UAE Project'}</span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-canvas leading-tight mb-3 group-hover:text-gold-accent transition-colors duration-300">
                  {project.title}
                </h3>
                {project.details && (
                  <p className="font-body text-ink-secondary text-sm md:text-base leading-relaxed line-clamp-2 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Res Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-navy-darker/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-6xl max-h-[90vh] flex flex-col lg:flex-row rounded-[32px] overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Area (Left) */}
            <div className="relative flex-1 bg-black overflow-hidden group min-h-[300px] lg:min-h-[600px]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover lg:object-contain"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 left-6 w-12 h-12 rounded-full bg-navy-darker/80 backdrop-blur-md flex items-center justify-center text-canvas hover:bg-gold-accent hover:text-navy-darker transition-colors z-10 border border-white/20 lg:hidden"
                aria-label="Close Preview"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content Area (Right) */}
            <div className="lg:w-[400px] bg-navy-card p-8 md:p-12 flex flex-col justify-between shrink-0">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs text-gold-accent uppercase tracking-[0.2em]">{selectedProject.category}</span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full bg-navy-darker flex items-center justify-center text-canvas hover:bg-gold-accent hover:text-navy-darker transition-colors hidden lg:flex border border-white/10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-canvas mb-6 leading-tight">{selectedProject.title}</h3>
                <div className="space-y-6 font-body text-sm text-ink-secondary">
                  <div>
                    <strong className="block text-canvas font-mono text-xs uppercase tracking-wider mb-2">Location</strong>
                    {selectedProject.location}
                  </div>
                  <div>
                    <strong className="block text-canvas font-mono text-xs uppercase tracking-wider mb-2">Project Scope</strong>
                    <p className="leading-relaxed">{selectedProject.details}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="block w-full text-center bg-white text-navy-darker font-body font-bold text-sm px-6 py-4 rounded-xl hover:bg-gold-accent transition-colors shadow-lg"
                >
                  Inquire About Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
