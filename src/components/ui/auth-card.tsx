import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <Card className={cn(
      "glass-card p-8 w-full max-w-md mx-auto glow-effect",
      "border-glass-border backdrop-blur-xl",
      className
    )}>
      {children}
    </Card>
  );
}