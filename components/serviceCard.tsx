import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <div
      className="group relative p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/80"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 rounded-lg shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default ServiceCard;
