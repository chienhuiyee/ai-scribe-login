import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mic,
  LayoutDashboard,
  Library,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Plus,
  Sparkles
} from "lucide-react";
import { AudioWaves } from "@/components/ui/audio-waves";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "PodcastAI", href: "/ai-studio", icon: Sparkles },
  { name: "My Library", href: "/library", icon: Library },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Messages", href: "/messages", icon: MessageSquare, badge: "2" },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

const projects = [
  { name: "Tech Podcast Series", color: "bg-purple-500" },
  { name: "Business Insights", color: "bg-blue-500" },
  { name: "Health & Wellness", color: "bg-green-500" },
  { name: "Daily Updates", color: "bg-orange-500" },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useState({
    name: "Keira Gibs",
    status: "Online"
  });

  return (
    <div className="flex h-screen w-64 flex-col bg-background border-r border-border">
      {/* User Profile */}
      <div className="flex items-center gap-3 p-4 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <span className="text-sm font-medium text-primary">KG</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{user.name}</p>
          <p className="text-xs text-green-500">{user.status}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-6">
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            General
          </h3>
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-9",
                    isActive && "bg-primary/10 text-primary"
                  )}
                  onClick={() => navigate(item.href)}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1 text-left">{item.name}</span>
                  {item.badge && (
                    <Badge variant="destructive" className="ml-auto h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </nav>
        </div>

        <Separator />

        {/* My Projects */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              My Projects
            </h3>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-1">
            {projects.map((project) => (
              <Button
                key={project.name}
                variant="ghost"
                className="w-full justify-start gap-3 h-8"
              >
                <div className={cn("h-3 w-3 rounded-full", project.color)} />
                <span className="text-sm truncate">{project.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 space-y-2 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-9"
          onClick={() => navigate("/settings")}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-9"
        >
          <HelpCircle className="h-4 w-4" />
          Help Center
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-9 text-destructive hover:text-destructive"
          onClick={() => navigate("/")}
        >
          <LogOut className="h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
}