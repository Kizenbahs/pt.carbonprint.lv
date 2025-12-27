import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as React from "react";

const sobreNosPosts = [
  {
    id: "sobre-1",
    title: "Serviço Personalizado",
    summary:
      "Oferecemos um serviço de impressão 3D de alta qualidade, com uma abordagem personalizada para cada projeto. Aconselhamos sobre melhorias nos ficheiros e otimização dos parâmetros de impressão para garantir uma produção mais rápida, custos mais baixos e peças mais fortes e duráveis.",
    // Use the requested image for the Serviço Personalizado card
    image: "/img/gennaker-spinnaker-furler-01.webp",
  },
  {
    id: "sobre-2",
    title: "Materiais ecológicos",
    summary: "A CarbonPrint combina inovação com sustentabilidade, utilizando materiais ecológicos e biodegradáveis, como o PLA e o Bio-Wood. O PLA é derivado de recursos renováveis, como o amido de milho, enquanto o Bio-Wood combina fibras naturais de madeira com polímeros de origem vegetal, oferecendo uma alternativa ao plástico tradicional. O nosso objetivo é criar produtos de impressão 3D de alta qualidade que respondam às necessidades modernas e, ao mesmo tempo, reduzam o impacto ambiental.",
    image: "/img/eco-3d-print-thumb.png",
  },
  {
    id: "sobre-3",
    title: "Experiência e Qualidade",
    summary:
      "A qualidade dos nossos serviços é sustentada por mais de 15 anos de experiência em metalomecânica, programação e operação de máquinas CNC. Esta experiência permite-nos compreender plenamente as necessidades dos nossos clientes e oferecer soluções práticas e tecnicamente bem fundamentadas.",
    image: "/img/3d-print-15.jpg",
  },
  {
    id: "sobre-4",
    title: "Modelação e Design",
    summary:
      "Se necessário, criamos modelos de raiz, utilizando software de design de nível mundial. Desenvolvemos soluções de forma rápida e eficiente – com todas as funcionalidades e otimizações necessárias – sem desperdiçar o seu tempo. Entregamos resultados prontos, com precisão e pontualidade.",
    image: "/img/3d-print-02.jpg",
  },
];

const SobreNos = () => {
  return (
    <section className="pt-24 pb-24 bg-white">
      <div className="container mx-auto flex flex-col items-center lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 mt-0 text-gray-900 bg-gray-100 border border-gray-300">
            Somos especialistas em impressão 3D
          </Badge>
          <h2 className="mb-3 mt-0 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-gray-900">
            Sobre nós
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch">
          {sobreNosPosts.map((post) => {
            // Special treatment for the second card (Videi draudzigi materiāli)
            if (post.id === "sobre-2") {
              return (
                <div key={post.id} className="relative">
                  <Card className="grid grid-rows-[auto_1fr] pt-0 bg-white border border-gray-200 h-full flex flex-col relative z-10">
                    <div className="aspect-[16/9] w-full bg-gray-100 border-b border-gray-200 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <h3 className="text-lg font-semibold md:text-xl text-gray-900 mb-0">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-700 mt-0">{post.summary}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Auto-running spotlight border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      zIndex: 20,
                    }}
                    animate={{
                      background: [
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 100% 0%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 100% 100%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 0% 100%, rgba(16, 185, 129, 0.2), transparent 40%)",
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.2), transparent 40%)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                  />
                  
                  {/* Auto-running border highlight */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-green-400 pointer-events-none"
                    style={{
                      zIndex: 21,
                    }}
                    animate={{
                      background: [
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 100% 0%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 100% 100%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 0% 100%, rgba(16, 185, 129, 0.3), transparent 40%)",
                        "radial-gradient(600px circle at 0% 0%, rgba(16, 185, 129, 0.3), transparent 40%)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                  />
                </div>
              );
            }

            // Default card rendering for other cards
            return (
              <Card key={post.id} className="grid grid-rows-[auto_1fr] pt-0 bg-white border border-gray-200">
                <div className="aspect-[16/9] w-full bg-gray-100 border-b border-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-lg font-semibold md:text-xl text-gray-900">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{post.summary}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { SobreNos }; 