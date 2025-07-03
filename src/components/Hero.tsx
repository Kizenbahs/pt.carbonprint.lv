import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  video?: {
    youtubeId: string;
    title: string;
  };
  primaryButtonClassName?: string;
}

const Hero = ({
  badge = "✨ Bem-vindo ao mundo da impressão 3D",
  heading = "Build Beautiful Apps with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project to create stunning applications.",
  buttons = {
    primary: {
      text: "Contacte-nos",
      url: "#",
    },
    secondary: {
      text: "View Documentation",
      url: "#",
    },
  },
  video = {
    youtubeId: "MAFuVi_Zgyw",
    title: "YouTube video player",
  },
  primaryButtonClassName,
}: Hero1Props) => {
  return (
    <section className="pt-6 pb-32 bg-black lg:py-32 relative overflow-hidden">
      {/* Gradient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808040_1px,transparent_1px),linear-gradient(to_bottom,#80808040_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline" className="mb-6 animate-fade-in">
                {badge}
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-slide-in-left">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start animate-scale-in" style={{animationDelay: '0.4s'}}>
              {buttons.primary && (
                <Button asChild variant="outline" className={`w-full sm:w-auto hover-scale ${primaryButtonClassName || ''}`}>
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto hover-scale">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="animate-slide-in-right" style={{animationDelay: '0.3s'}}>
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-300 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
