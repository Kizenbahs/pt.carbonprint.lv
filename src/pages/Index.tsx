import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import React from "react";
import { SobreNos } from "@/components/SobreNos";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero 
        badge="🏆 Laipni lūdzam 3D drukas pasaulē"
        heading="We make AI physical"
        description="Izturīga oglekļa neilona druka un pielāgoti 3D dizaina pakalpojumi profesionāļiem, entuziastiem un uzņēmumiem"
        buttons={{
          primary: {
            text: "Sazinies ar mums",
            url: "#contact",
          },
          secondary: {
            text: "Kāpēc mēs",
            url: "#faq",
          },
        }}
        video={{
          youtubeId: "NO9clg6l_M8",
          title: "YouTube video player",
        }}
        primaryButtonClassName="bg-[#f3b112] hover:bg-[#e0a20f] text-black border-none"
      />
      <SobreNos />
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
      <Contact />
      <Footer />
    </div>
  );
};



export default Index;
