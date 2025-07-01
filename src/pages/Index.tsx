import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

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
            text: "Get Started",
            url: "#features"
          },
          secondary: {
            text: "View Documentation",
            url: "#faq"
          }
        }}
        video={{
          youtubeId: "MAFuVi_Zgyw",
          title: "YouTube video player"
        }}
      />
      <div id="features">
        <Feature 
          heading="Why Choose Our Components?"
        />
      </div>
      <div id="faq">
        <Faq 
          heading="Perguntas Frequentes"
          description="Encontre respostas para perguntas comuns sobre impressão 3D e os nossos serviços.\nNão encontrou o que procura? Contacte a nossa equipa de apoio."
          supportHeading="Need personalized help?"
          supportDescription="Our experienced developers are here to help you implement these components successfully in your projects."
          supportButtonText="Get Support"
          supportButtonUrl="#"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
