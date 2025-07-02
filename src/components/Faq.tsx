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
    question: "1. Imprimem produtos personalizados?",
          answer:
        "Sim, somos especializados em impressão 3D personalizada! Podemos imprimir os seus próprios designs ou ajudá-lo a criar produtos personalizados do zero. Basta enviar-nos a sua ideia ou ficheiro de design, e trabalharemos consigo para dar-lhe vida.",
  },
  {
    id: "faq-2",
    question: "2. Em que formato devo submeter a minha ideia?",
          answer:
        "Pode enviar a sua ideia em praticamente qualquer formato — desde uma simples fotografia até a um esboço ou desenho detalhado. Assim que a recebermos, entraremos em contacto para discutir como podemos transformar a sua ideia num modelo 3D imprimível.",
  },
  {
    id: "faq-3",
    question: "3. Conseguem transformar o meu esboço num ficheiro 3D imprimível ?",
    answer:
      "Claro! Se tiver um esboço feito à mão ou apenas um conceito, podemos ajudá-lo a transformá-lo num modelo 3D devidamente preparado para impressão. A nossa equipa acompanha todo o processo de design para garantir que o ficheiro final corresponde às suas expectativas e está optimizado para impressão 3D",
  },
  {
    id: "faq-4",
    question: "4. Can I change my order after it has been placed?",
    answer:
      "You can change your order within 24 hours of placing it by contacting our customer service team.",
  },
  {
    id: "faq-5",
    question: "5. What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    id: "faq-6",
    question: "6. How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or by calling 1-800-123-4567.",
  },
  {
    id: "faq-7",
    question: "7. Are there any discounts for bulk purchases?",
    answer:
      "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.",
  },
];

const Faq = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://www.shadcnblocks.com",
}: Faq3Props) => {
  return (
    <section id="faq" className="py-32 bg-[#181e25]">
      <div className="container space-y-16">
        <div className="mx-auto flex flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-white lg:text-lg">{description}</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#181e25] rounded-xl shadow-xl border border-[#232a32] p-10 flex flex-col justify-center text-white w-full max-w-2xl">
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-1"
              className="w-full"
            >
              {items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 text-white data-[state=open]:text-yellow-400 font-medium sm:py-1 lg:py-2 lg:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="sm:mb-1 lg:mb-2 text-white">
                    <div className="lg:text-lg text-white">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };
