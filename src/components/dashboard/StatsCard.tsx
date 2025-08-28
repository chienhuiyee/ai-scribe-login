import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
  trend?: "up" | "down";
}

export function StatsCard({ title, value, change, icon, trend }: StatsCardProps) {
  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs",
                  trend === "up" && "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
                  trend === "down" && "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                )}
              >
                {change}
              </Badge>
            )}
          </div>
          <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}