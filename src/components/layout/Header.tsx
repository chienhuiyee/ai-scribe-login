import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mic, User, LogOut, ChevronDown } from "lucide-react";
import { AudioWaves } from "@/components/ui/audio-waves";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [user] = useState({
    email: "chien.hui.yee@gmail.com",
    initials: "CH",
    memberSince: "Aug 2025"
  });

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-xl">
            <Mic className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-bold text-xl gradient-text">PodcastAI</div>
            <div className="flex items-center gap-2 mt-1">
              <AudioWaves className="scale-75" />
            </div>
          </div>
        </div>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center gap-3 px-3 py-2 h-auto hover:bg-accent/50 transition-colors"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{user.email}</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <div className="px-3 py-2">
              <p className="font-medium text-sm">{user.email}</p>
              <p className="text-xs text-muted-foreground">Member since {user.memberSince}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            >
              <User className="h-4 w-4 mr-2" />
              My Library
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => navigate("/")}
              className="cursor-pointer text-destructive focus:text-destructive"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}