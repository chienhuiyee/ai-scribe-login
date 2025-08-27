import { Mic, AudioWaveform, Sparkles, Users, TrendingUp, Play } from "lucide-react";
import { AudioWaves } from "@/components/ui/audio-waves";

export function PodcastPreview() {
  return (
    <div className="h-full bg-gradient-to-br from-primary to-accent p-8 flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />

      {/* Main preview content */}
      <div className="relative z-10 max-w-md text-center space-y-8">
        {/* App logo/icon */}
        <div className="flex justify-center">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
            <Mic className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold leading-tight">
            The easiest way to create
            <br />
            <span className="text-white/90">AI-powered podcasts.</span>
          </h2>
          <p className="text-white/80 text-lg">
            Join the AI podcast revolution today!
          </p>
        </div>

        {/* Feature preview mockup */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex-1 text-left">
              <div className="h-3 bg-white/30 rounded-full w-32 mb-2" />
              <div className="h-2 bg-white/20 rounded-full w-24" />
            </div>
          </div>

          <div className="flex justify-center py-4">
            <AudioWaves className="scale-150" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <AudioWaveform className="h-4 w-4" />
              </div>
            </div>
            <div className="text-white/70 text-sm">2:34 / 15:42</div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="text-white/80">AI Generated</div>
          </div>
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
              <Users className="h-5 w-5" />
            </div>
            <div className="text-white/80">Multi-Voice</div>
          </div>
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="text-white/80">Analytics</div>
          </div>
        </div>
      </div>
    </div>
  );
}