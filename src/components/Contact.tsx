import React from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactProps {
  title?: string;
  description?: string;
}

const Contact = ({
  title = "Contacte-nos",
  description = "Envie a sua ideia por e-mail ou pergunte pelo WhatsApp.",
}: ContactProps) => {
  return (
    <section id="contact" className="py-32">
      <div className="container w-full">
        <div className="flex w-full flex-col justify-between gap-6 lg:flex-row lg:gap-12">
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="text-center lg:text-left">
              <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                {title}
              </h2>
              <p className="text-muted-foreground mb-2">{description}</p>
              <div className="mx-auto w-fit lg:mx-0 mt-2">
                <ul className="space-y-2">
                  <li>
                    <span>T: <a href="tel:37126236432" className="text-yellow-400 no-underline">371 26 236 432</a></span>
                  </li>
                  <li>
                    <span>E: <span className="text-yellow-400">info@carbonprint.lv</span></span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/37126236432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#075e54] hover:bg-[#064C45] text-white font-bold rounded-lg text-sm shadow transition-colors"
                  style={{ minWidth: '120px', justifyContent: 'center' }}
                >
                  <FaWhatsapp className="size-5" />
                  Enviar ideia para WhatsApp
                </a>
                <div className="block md:hidden text-center text-muted-foreground text-base mt-2 mb-2">ou</div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-lg border bg-gray-800 text-white shadow-xl p-10">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname">Nome</Label>
              <Input type="text" id="firstname" placeholder="Nome" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Assunto</Label>
              <Input type="text" id="subject" placeholder="Assunto" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea placeholder="Conte-nos sua ideia ou mande uma pergunta!" id="message" />
            </div>
            <Button className="w-full bg-[#f3b112] hover:bg-[#e0a20f] text-black font-bold rounded-lg border-none flex items-center justify-center">
              Enviar ideia
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact }; 