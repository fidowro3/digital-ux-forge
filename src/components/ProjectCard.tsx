
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  color?: 'blue' | 'magenta';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  tags,
  color = 'blue'
}) => {
  const neonBorderClass = color === 'blue' ? 'neon-border-blue' : 'neon-border-magenta';
  const neonTextClass = color === 'blue' ? 'neon-text-blue' : 'neon-text-magenta';
  const hoverClass = color === 'blue' ? 'hover:shadow-neon-blue' : 'hover:shadow-neon-magenta';
  
  return (
    <article 
      className={`group bg-card rounded-lg overflow-hidden transition-all duration-300 ${hoverClass} h-full flex flex-col`}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className={`text-xs px-3 py-1 rounded-full ${color === 'blue' ? 'bg-accent-neon-blue/10 text-accent-neon-blue' : 'bg-accent-neon-magenta/10 text-accent-neon-magenta'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
        </div>
        
        <Link 
          to={`/projects/${id}`} 
          className={`btn border-2 ${color === 'blue' ? 'border-accent-neon-blue hover:shadow-neon-blue' : 'border-accent-neon-magenta hover:shadow-neon-magenta'} bg-background text-foreground`}
        >
          View Project
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
