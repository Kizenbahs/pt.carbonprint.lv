
import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  heading?: string;
  reasons?: Reason[];
}

const Feature = ({
  heading = "Why Choose Our Components?",
  reasons = [
    {
      title: "Premium Quality",
      description:
        "Every component is meticulously crafted with attention to detail, ensuring your applications look professional and polished.",
      icon: <GitPullRequest className="size-6" />,
    },
    {
      title: "Developer Experience",
      description:
        "Built with TypeScript and modern React patterns, providing excellent IntelliSense and type safety for faster development.",
      icon: <SquareKanban className="size-6" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team provides comprehensive support and documentation to help you succeed with your projects.",
      icon: <RadioTower className="size-6" />,
    },
    {
      title: "Continuous Innovation",
      description:
        "We constantly update and improve our components with the latest design trends and React best practices.",
      icon: <WandSparkles className="size-6" />,
    },
    {
      title: "Proven Results",
      description:
        "Thousands of developers trust our components to build successful applications that scale and perform beautifully.",
      icon: <Layers className="size-6" />,
    },
    {
      title: "High Performance",
      description:
        "Optimized for speed and efficiency, our components ensure your applications load fast and run smoothly.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
}: Feature43Props) => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl animate-fade-in">
            {heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className="flex flex-col hover-scale animate-fade-in-up" 
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <div className="text-primary">
                  {reason.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature };
