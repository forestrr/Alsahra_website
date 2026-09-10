import { useState } from 'react';
import { projects } from '../data/projects';

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Get unique categories from projects, add "All" at the beginning
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="bg-navy-canvas py-[80px] px-6 md:px-16 border-t border-navy-mid">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-primary text-xs uppercase tracking-[1px] block mb-4">Our Work</span>
            <h2 className="font-display text-[44px] leading-tight tracking-[-0.4px] text-canvas">
              Engineered across the UAE
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-body text-sm px-4 py-2 rounded-full border transition-colors ${
                  activeFilter === category 
                    ? 'bg-canvas text-ink border-canvas font-medium' 
                    : 'bg-transparent text-ink-secondary border-navy-mid hover:text-canvas hover:border-canvas'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group relative rounded-[20px] overflow-hidden bg-navy-darker aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-canvas/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-primary text-xs uppercase tracking-[1px] block mb-1">{project.category}</span>
                <p className="font-body text-canvas font-medium">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
