interface SkillCardProps {
  title: string;
  skills: string[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
