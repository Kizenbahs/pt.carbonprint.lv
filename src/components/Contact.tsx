import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactProps {
  title?: string;
}

const Contact = ({
  title = "Contacte-nos",
}: ContactProps) => {
  return (
    <section id="contact" className="pt-24 pb-24 bg-white">
      <div className="container w-full">
        <div className="text-center flex flex-col items-center">
          <Badge className="mb-6 mx-auto text-black bg-gray-100 border-gray-300">
            Contacte-nos
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-black">
            {title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-10 flex flex-col justify-center items-center text-black">
            <div className="text-center w-full">
              <div className="mx-auto w-fit mt-2">
                <ul className="space-y-2">
                  <li>
                    <span>T: <a href="tel:37126236432" className="text-black hover:underline font-medium">371 26 236 432</a></span>
                  </li>
                  <li>
                    <span>E: <span className="text-black font-medium">info@carbonprint.lv</span></span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/37126236432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#25d366] hover:bg-[#20ba5a] text-white font-medium rounded-md text-sm shadow transition-colors"
                  style={{ minWidth: '120px', justifyContent: 'center' }}
                >
                  <FaWhatsapp className="size-5" />
                  Enviar ideia para WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-lg shadow border border-gray-200 p-10 flex flex-col justify-center text-white">
            <form className="flex flex-col gap-6 w-full">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-white">Nome</Label>
                <Input type="text" id="firstname" placeholder="Nome" className="bg-white border-black border-2 focus:border-black focus:ring-0" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input type="email" id="email" placeholder="Email" className="bg-white border-black border-2 focus:border-black focus:ring-0" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject" className="text-white">Assunto</Label>
                <Input type="text" id="subject" placeholder="Assunto" className="bg-white border-black border-2 focus:border-black focus:ring-0" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message" className="text-white">Mensagem</Label>
                <Textarea placeholder="Conte-nos sua ideia ou mande uma pergunta!" id="message" className="bg-white border-black border-2 focus:border-black focus:ring-0" />
              </div>
              <Button className="w-full bg-[#f3b112] hover:bg-[#e0a20f] text-black">
                Enviar ideia
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact }; 