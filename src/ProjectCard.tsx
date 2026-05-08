interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  highlights: string[];
}

export function ProjectCard({ 
  title, 
  tech, 
  description,
  highlights 
}: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-blue-600 font-semibold text-sm mb-3">{tech}</p>
      <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-2 pt-4 border-t">
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition">View Code →</a>
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition">Live Demo →</a>
      </div>
    </div>
  );
}
