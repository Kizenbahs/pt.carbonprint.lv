import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import React, { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero 
        badge="✨ Bem-vindo ao mundo da impressão 3D"
        heading="Impressão 3D e Design de Alta Performance"
        description="Impressão em nylon de carbono e serviços personalizados de design 3D para profissionais, entusiastas e empresas"
        buttons={{
          primary: {
            text: "Contacte-nos",
            url: "#contact"
          },
          secondary: {
            text: "Pedir orçamento",
            url: "#faq"
          }
        }}
        video={{
          youtubeId: "MAFuVi_Zgyw",
          title: "YouTube video player"
        }}
        primaryButtonClassName="bg-[#f3b112] hover:bg-[#e0a20f] text-black border-none"
      />
      <div id="faq">
        <Faq 
          heading="Perguntas Frequentes"
          description="Encontre respostas para perguntas comuns sobre impressão 3D e os nossos serviços. Não encontrou o que procura? Contacte a nossa equipa de apoio."
          supportHeading="Need personalized help?"
          supportDescription="Our experienced developers are here to help you implement these components successfully in your projects."
          supportButtonText="Get Support"
          supportButtonUrl="#"
        />
      </div>
      {/* Gallery Grid Below FAQ */}
      <div className="w-full py-0 flex flex-col items-center bg-black pt-16">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Galeria
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Veja alguns dos nossos projetos de impressão 3D e design de alta performance realizados para clientes e parceiros.
          </p>
        </div>
        {/* Responsive Gallery: Marquee on desktop, swipeable with dots on mobile */}
        <GalleryWithDots />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

const galleryImages = [
  { src: "/img/3d-print-10.jpg" },
  { src: "/img/3d-print-09.jpg" },
  { src: "/img/3d-print-08.jpg" },
  { src: "/img/3d-print-07.jpg" },
  { src: "/img/3d-print-01.jpg" },
  { src: "/img/3d-print-02.jpg" },
  { src: "/img/3d-print-03.jpg" },
  { src: "/img/3d-print-04.jpg" },
  { src: "/img/3d-print-05.jpg" },
  { src: "/img/3d-print-06.jpg" },
];

function GalleryWithDots() {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Show all images in marquee on desktop, one at a time on mobile
  if (!isMobile) {
    return (
      <div className="overflow-x-hidden w-full mt-8">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="bg-gray-800 rounded-md shadow-lg p-2 min-w-[270px] flex flex-col items-center cursor-pointer mb-24">
                  <img
                    src={img.src}
                    alt="Gallery image"
                    className="w-72 h-72 object-cover rounded-md transition-transform duration-200 hover:scale-110"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center bg-transparent border-none shadow-none p-0">
                <img
                  src={img.src}
                  alt="Gallery image"
                  className="w-[80vw] max-w-3xl h-auto max-h-[80vh] rounded-lg shadow-2xl transition-transform duration-200 hover:scale-105"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    );
  }

  // Mobile: show one image at a time with dots
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-gray-800 rounded-md shadow-lg p-2 w-full max-w-xs flex flex-col items-center cursor-pointer mb-8">
            <img
              src={galleryImages[current].src}
              alt="Gallery image"
              className="w-72 h-72 object-cover rounded-md transition-transform duration-200 hover:scale-110"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="flex flex-col items-center bg-transparent border-none shadow-none p-0">
          <img
            src={galleryImages[current].src}
            alt="Gallery image"
            className="w-[90vw] max-w-2xl h-auto max-h-[80vh] rounded-lg shadow-2xl transition-transform duration-200 hover:scale-105"
          />
        </DialogContent>
      </Dialog>
      <div className="flex gap-2 mt-4">
        {galleryImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded ${current === idx ? 'bg-yellow-400' : 'bg-gray-500'} transition-colors`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir para imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
