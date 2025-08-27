import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

interface ForgotPasswordFormSplitProps {
  onBack: () => void;
}

export function ForgotPasswordFormSplit({ onBack }: ForgotPasswordFormSplitProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold text-foreground">Check your email.</h1>
          <p className="text-muted-foreground">
            We've sent a password reset link to <br />
            <span className="text-primary font-medium">{email}</span>
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="w-full h-12 border-border hover:bg-muted/50 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Reset your password.</h1>
        <p className="text-muted-foreground">
          Enter your email address and we'll send you a reset link.
        </p>
      </div>

      {/* Reset Form */}
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

        <Button 
          type="submit" 
          className="w-full h-12 bg-primary hover:bg-primary-glow text-primary-foreground font-medium rounded-lg transition-all duration-300"
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
  );
}