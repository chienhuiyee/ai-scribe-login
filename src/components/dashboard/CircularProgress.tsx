import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CircularProgressProps {
  title: string;
  percentage: number;
  icon: React.ReactNode;
  color?: string;
}

export function CircularProgress({ title, percentage, icon, color = "stroke-primary" }: CircularProgressProps) {
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="glass-card text-center">
      <CardContent className="p-6">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-muted/20"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className={color}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background p-2 rounded-full">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{percentage}%</p>
      </CardContent>
    </Card>
  );
}