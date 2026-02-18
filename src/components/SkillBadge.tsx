interface SkillBadgeProps {
  name: string;
  category?: "finance" | "tech" | "leadership";
}

export default function SkillBadge({ name, category = "finance" }: SkillBadgeProps) {
  const categoryStyles = {
    finance: "bg-primary/10 text-primary border-primary/20",
    tech: "bg-muted text-foreground border-border",
    leadership: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${categoryStyles[category]} transition-all hover:scale-105`}
    >
      {name}
    </span>
  );
}
