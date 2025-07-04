import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GalleryWithLightbox from "./GalleryWithLightbox";

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
    id: "faq-0",
    question: "1. Porque escolher-nos?",
    answer:
      "Da ideia ao produto final – fornecemos peças de alto desempenho em nylon reforçado com fibra de carbono. Os nossos produtos são duráveis, precisos e produzidos com prazos de execução rápidos.",
  },
  {
    id: "faq-1",
    question: "2. Imprimem produtos personalizados?",
    answer:
      "Sim, somos especializados em impressão 3D personalizada! Podemos imprimir os seus próprios designs ou ajudá-lo a criar produtos personalizados do zero. Basta enviar-nos a sua ideia ou ficheiro de design, e trabalharemos consigo para dar-lhe vida.",
  },
  {
    id: "faq-2",
    question: "3. Em que formato devo submeter a minha ideia?",
    answer:
      "Pode enviar a sua ideia em praticamente qualquer formato — desde uma simples fotografia até a um esboço ou desenho detalhado. Assim que a recebermos, entraremos em contacto para discutir como podemos transformar a sua ideia num modelo 3D imprimível.",
  },
  {
    id: "faq-3",
    question: "4. Conseguem transformar o meu esboço num ficheiro 3D imprimível ?",
    answer:
      "Claro! Se tiver um esboço feito à mão ou apenas um conceito, podemos ajudá-lo a transformá-lo num modelo 3D devidamente preparado para impressão. A nossa equipa acompanha todo o processo de design para garantir que o ficheiro final corresponde às suas expectativas e está optimizado para impressão 3D",
  },
  {
    id: "faq-4",
    question: "5. As peças impressas são precisas ?",
    answer:
      "Sim, os nossos produtos são resistentes e precisos. Utilizamos impressoras e materiais de alta qualidade para garantir que todos os detalhes são reproduzidos com exactidão e que o resultado final cumpre as tolerâncias exigidas.",
  },
  {
    id: "faq-5",
    question: "6. Utilizam materiais de alta qualidade ?",
    answer: "Sim, utilizamos apenas materiais de alta qualidade, provenientes dos principais fabricantes do sector. Isto garante excelente durabilidade, precisão e um acabamento profissional em cada peça impressa.",
  },
  {
    id: "faq-6",
    question: "7. Como receberei o meu pedido ?",
    answer:
      "Todas as encomendas são entregues exclusivamente através dos serviços da DPD em Portugal. Pode escolher entre entrega ao domicílio ou um cacifo DPD próximo. Receberá uma notificação assim que a sua encomenda estiver pronta para levantamento ou entrega.",
  },
  {
    id: "faq-7",
    question: "8. Como é feito o pagamento da encomenda?",
    answer:
      "O pagamento é feito através da nossa loja no Etsy ou por transferência bancária com base na fatura que fornecemos.",
  },
  {
    id: "faq-8",
    question: "9. Como posso entrar em contacto convosco?",
    answer:
      "A forma mais fácil de nos contactar é por telefone ou WhatsApp. Também pode preencher o formulário de contacto no nosso site e entraremos em contacto consigo o mais breve possível.",
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
    <section id="faq" className="pt-24 pb-32 bg-black">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-start">
          {/* Left FAQ Block - Complete Clone */}
          <div className="w-full max-w-xl mx-auto flex flex-col items-center">
            <Badge className="mt-0 mb-6 mx-auto text-gray-900 bg-gray-200 border border-gray-300">
              Porque é que os clientes nos escolhem
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-4xl mb-8 text-center">
              {heading}
            </h2>
            <div className="bg-black rounded-xl shadow-xl border border-gray-700 p-8 flex flex-col justify-center text-white w-full">
              <Accordion
                type="single"
                collapsible
                defaultValue="left-faq-0"
                className="w-full"
              >
                {items.map((item) => (
                  <AccordionItem key={`left-${item.id}`} value={`left-${item.id}`}>
                    <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 text-white data-[state=open]:text-yellow-400 font-medium sm:py-1 lg:py-2 lg:text-lg text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="sm:mb-1 lg:mb-2 text-white text-left">
                      <div className="lg:text-lg text-white text-left">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Gallery Block */}
          <div className="flex flex-col">
            <GalleryWithLightbox />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };
