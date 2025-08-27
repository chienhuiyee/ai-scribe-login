import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/components/ui/auth-card";
import { AudioWaves } from "@/components/ui/audio-waves";
import { Chrome } from "lucide-react";

interface LoginFormProps {
  onToggleMode: () => void;
  onForgotPassword: () => void;
}

export function LoginForm({ onToggleMode, onForgotPassword }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase auth
    console.log("Login attempt:", { email, password });
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth with Supabase
    console.log("Google login");
  };

  return (
    <AuthCard>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <AudioWaves />
          </div>
          <h1 className="text-2xl font-bold gradient-text">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your AI Podcast Studio
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-muted/50 border-border focus:border-primary transition-colors"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-muted/50 border-border focus:border-primary transition-colors"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent/80 transition-all duration-300"
          >
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        {/* Google Login */}
        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleLogin}
          className="w-full border-border hover:bg-muted/50 transition-colors"
        >
          <Chrome className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>

        {/* Footer Links */}
        <div className="text-center space-y-2">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-primary hover:text-primary-glow transition-colors"
          >
            Forgot your password?
          </button>
          
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={onToggleMode}
              className="text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </AuthCard>
  );
}