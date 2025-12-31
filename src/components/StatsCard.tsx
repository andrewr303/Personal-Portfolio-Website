interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatsCard({ value, label, description }: StatsCardProps) {
  return (
    <div className="group p-6 rounded-2xl glass hover:glow transition-all duration-300">
      <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
        {value}
      </div>
      <div className="font-medium text-foreground">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  );
}
