import { cn } from "@/lib/utils";

interface AudioWavesProps {
  className?: string;
}

export function AudioWaves({ className }: AudioWavesProps) {
  return (
    <div className={cn("flex items-end gap-1 h-8", className)}>
      <div className="audio-wave w-1 bg-primary rounded-full h-4"></div>
      <div className="audio-wave w-1 bg-accent rounded-full h-6"></div>
      <div className="audio-wave w-1 bg-primary-glow rounded-full h-3"></div>
      <div className="audio-wave w-1 bg-primary rounded-full h-7"></div>
      <div className="audio-wave w-1 bg-accent rounded-full h-4"></div>
      <div className="audio-wave w-1 bg-primary-glow rounded-full h-6"></div>
      <div className="audio-wave w-1 bg-primary rounded-full h-2"></div>
    </div>
  );
}