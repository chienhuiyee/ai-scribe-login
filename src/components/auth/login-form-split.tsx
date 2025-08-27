import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chrome } from "lucide-react";

interface LoginFormSplitProps {
  onToggleMode: () => void;
  onForgotPassword: () => void;
}

export function LoginFormSplit({ onToggleMode, onForgotPassword }: LoginFormSplitProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Log in to your account.</h1>
        <p className="text-muted-foreground">
          Enter your email address and password to log in.
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 px-4 bg-background border-border focus:border-primary transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-12 px-4 bg-background border-border focus:border-primary transition-colors"
          />
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-primary hover:text-primary-glow transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 bg-primary hover:bg-primary-glow text-primary-foreground font-medium rounded-lg transition-all duration-300"
        >
          Login
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleLogin}
          className="w-full h-12 border-border hover:bg-muted/50 transition-colors"
        >
          <Chrome className="mr-2 h-5 w-5" />
          Google
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't you have an account?{" "}
          <button
            type="button"
            onClick={onToggleMode}
            className="text-primary hover:text-primary-glow transition-colors font-medium"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}