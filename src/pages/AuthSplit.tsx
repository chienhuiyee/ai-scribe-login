import { useState } from "react";
import { LoginFormSplit } from "@/components/auth/login-form-split";
import { SignupFormSplit } from "@/components/auth/signup-form-split";
import { ForgotPasswordFormSplit } from "@/components/auth/forgot-password-form-split";
import { PodcastPreview } from "@/components/auth/podcast-preview";
import { AudioWaves } from "@/components/ui/audio-waves";
import { Mic } from "lucide-react";

type AuthMode = "login" | "signup" | "forgot-password";

export default function AuthSplit() {
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
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Auth forms */}
      <div className="flex items-center justify-center p-8 lg:p-16 bg-background">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
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

          {/* Auth Forms */}
          {mode === "login" && (
            <LoginFormSplit 
              onToggleMode={toggleMode}
              onForgotPassword={showForgotPassword}
            />
          )}
          {mode === "signup" && (
            <SignupFormSplit onToggleMode={toggleMode} />
          )}
          {mode === "forgot-password" && (
            <ForgotPasswordFormSplit onBack={backToLogin} />
          )}
        </div>
      </div>

      {/* Right side - Preview */}
      <div className="hidden lg:block">
        <PodcastPreview />
      </div>
    </div>
  );
}