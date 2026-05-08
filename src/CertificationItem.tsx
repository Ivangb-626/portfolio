interface CertificationItemProps {
  title: string;
  issuer: string;
  description: string;
}

export function CertificationItem({ title, issuer, description }: CertificationItemProps) {
  return (
    <div className="border-l-4 border-emerald-500 pl-4 py-2">
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-emerald-600 text-sm font-medium">{issuer}</p>
      <p className="text-slate-600 text-sm mt-1">{description}</p>
    </div>
  );
}
