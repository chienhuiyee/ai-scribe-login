import { useState } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

type AuthMode = "login" | "signup" | "forgot-password";

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>("login");

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  const showForgotPassword = () => {
    setMode("forgot-password");
  };

  const backToLogin = () => {
    setMode("login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Auth Forms */}
      <div className="relative z-10 w-full max-w-md">
        {mode === "login" && (
          <LoginForm 
            onToggleMode={toggleMode}
            onForgotPassword={showForgotPassword}
          />
        )}
        {mode === "signup" && (
          <SignupForm onToggleMode={toggleMode} />
        )}
        {mode === "forgot-password" && (
          <ForgotPasswordForm onBack={backToLogin} />
        )}
      </div>
    </div>
  );
}