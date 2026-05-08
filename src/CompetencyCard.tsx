interface CompetencyCardProps {
  icon: string;
  title: string;
  skills: string[];
}

export function CompetencyCard({ icon, title, skills }: CompetencyCardProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-slate-600 text-sm flex items-start">
            <span className="text-blue-600 mr-2 font-bold">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
