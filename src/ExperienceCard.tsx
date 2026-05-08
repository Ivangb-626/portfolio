interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

export function ExperienceCard({
  company,
  position,
  duration,
  location,
  description,
  achievements
}: ExperienceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-l-4 border-blue-600">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{position}</h3>
          <p className="text-blue-600 font-semibold text-sm">{company}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
          {duration}
        </span>
      </div>
      
      <p className="text-slate-500 text-sm mb-4">📍 {location}</p>
      
      <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
      
      <div>
        <p className="text-sm font-semibold text-slate-900 mb-2">Key Achievements:</p>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-slate-600 text-sm flex items-start">
              <span className="text-blue-600 mr-2 font-bold">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
