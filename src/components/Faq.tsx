import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "How do I integrate these components into my project?",
    answer:
      "Simply copy the component code and paste it into your React project. Make sure you have Tailwind CSS and Shadcn UI properly configured.",
  },
  {
    id: "faq-2",
    question: "Are these components compatible with Next.js?",
    answer:
      "Yes! All components are built with React and are fully compatible with Next.js, Vite, and other React frameworks.",
  },
  {
    id: "faq-3",
    question: "Do you provide TypeScript support?",
    answer:
      "Absolutely! All components are written in TypeScript with full type definitions for better development experience.",
  },
  {
    id: "faq-4",
    question: "Can I customize the styling of these components?",
    answer:
      "Yes, you can easily customize the styling using Tailwind CSS classes or by modifying the component code directly.",
  },
  {
    id: "faq-5",
    question: "What's included in the component library?",
    answer: "We include navigation, hero sections, features, FAQs, forms, cards, and many more essential UI components.",
  },
  {
    id: "faq-6",
    question: "Is there documentation available?",
    answer:
      "Yes, comprehensive documentation is provided with examples, props documentation, and implementation guides for each component.",
  },
  {
    id: "faq-7",
    question: "Do you offer updates and new components?",
    answer:
      "We regularly update existing components and add new ones based on community feedback and modern design trends.",
  },
];

const Faq = ({
  heading = "Frequently Asked Questions",
  description = "Find answers to common questions about our React components. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need personalized help?",
  supportDescription = "Our experienced developers are here to help you implement these components successfully in your projects.",
  supportButtonText = "Get Support",
  supportButtonUrl = "#",
}: Faq3Props) => {
  return (
    <section className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center animate-fade-in">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-all duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg text-left">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-xl bg-gradient-to-r from-accent to-accent/70 p-4 text-center md:p-6 lg:p-8 animate-scale-in shadow-lg" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border-2 border-background md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border-2 border-background md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b5c3?w=400&h=400&fit=crop&crop=face" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border-2 border-background md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto hover-scale" asChild>
              <a href={supportButtonUrl}>
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };
