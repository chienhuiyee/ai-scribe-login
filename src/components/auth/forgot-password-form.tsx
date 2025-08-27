import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/components/ui/auth-card";
import { AudioWaves } from "@/components/ui/audio-waves";
import { ArrowLeft } from "lucide-react";

interface ForgotPasswordFormProps {
  onBack: () => void;
}

export function ForgotPasswordForm({ onBack }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase password reset
    console.log("Password reset for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AuthCard>
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <AudioWaves />
          </div>
          <h1 className="text-2xl font-bold gradient-text">Check Your Email</h1>
          <p className="text-muted-foreground">
            We've sent a password reset link to <br />
            <span className="text-primary font-medium">{email}</span>
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="w-full border-border hover:bg-muted/50 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sign In
          </Button>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <AudioWaves />
          </div>
          <h1 className="text-2xl font-bold gradient-text">Reset Password</h1>
          <p className="text-muted-foreground">
            Enter your email to receive a reset link
          </p>
        </div>

        {/* Reset Form */}
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

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent/80 transition-all duration-300"
          >
            Send Reset Link
          </Button>
        </form>

        {/* Back Button */}
        <Button
          type="button"
          variant="ghost"
          onClick={onBack}
          className="w-full hover:bg-muted/50 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sign In
        </Button>
      </div>
    </AuthCard>
  );
}