import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const steps = [
  {
    title: "Research",
    description:
      "Gather information and analyze requirements to understand the problem and define objectives.",
    completed: true,
  },
  {
    title: "Planning",
    description:
      "Create a roadmap, define the scope, and outline the necessary steps to achieve the goal.",
    completed: true,
  },
  {
    title: "Design",
    description:
      "Develop wireframes, mockups, and prototypes to visualize the structure and user experience.",
    completed: true,
  },
  {
    title: "Development",
    description:
      "Write code, integrate features, and build the core functionality of the application.",
  },
  {
    title: "Deployment",
    description:
      "Launch the project in a live environment and ensure smooth deployment.",
  },
];

export default function Timeline() {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Nosso processo de serviço
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Veja como trabalhamos do início ao fim para entregar o melhor resultado para você.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1">
          {steps.map(({ title, description }, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow p-6 h-[180px] flex flex-col justify-center">
              <div className="font-medium text-lg mb-2">{title}</div>
              <div className="text-muted-foreground lg:text-lg">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 