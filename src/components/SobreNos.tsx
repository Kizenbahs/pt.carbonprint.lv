import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const sobreNosPosts = [
  {
    id: "sobre-1",
    title: "Serviço Personalizado",
    summary:
      "Oferecemos um serviço de impressão 3D de alta qualidade, com uma abordagem personalizada para cada projeto. Aconselhamos sobre melhorias nos ficheiros e otimização dos parâmetros de impressão para garantir uma produção mais rápida, custos mais baixos e peças mais fortes e duráveis.",
    image: "/img/3d-print-16.jpg",
  },
  {
    id: "sobre-2",
    title: "Modelação e Design",
    summary:
      "Se necessário, criamos modelos de raiz, utilizando software de design de nível mundial. Desenvolvemos soluções de forma rápida e eficiente – com todas as funcionalidades e otimizações necessárias – sem desperdiçar o seu tempo. Entregamos resultados prontos, com precisão e pontualidade.",
    image: "/img/3d-print-02.jpg",
  },
  {
    id: "sobre-3",
    title: "Experiência e Qualidade",
    summary:
      "A qualidade dos nossos serviços é sustentada por mais de 15 anos de experiência em metalomecânica, programação e operação de máquinas CNC. Esta experiência permite-nos compreender plenamente as necessidades dos nossos clientes e oferecer soluções práticas e tecnicamente bem fundamentadas.",
    image: "/img/3d-print-15.jpg",
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {sobreNosPosts.map((post) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export { SobreNos }; 