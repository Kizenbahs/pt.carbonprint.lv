import React, { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const Contact = ({
  title = "Contacte-nos",
  description = "Envie a sua ideia por e-mail ou pergunte pelo WhatsApp.",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: ContactProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files && e.target.files[0] ? e.target.files[0] : null);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
              <Textarea placeholder="Digite sua mensagem aqui." id="message" />
            </div>
            <div className="grid w-full gap-1.5 relative">
              <Label htmlFor="file">Arquivo</Label>
              <div className="flex w-full items-start">
                <Input
                  type="file"
                  id="file"
                  className="w-full bg-gray-800 text-white file:w-auto file:h-8 file:px-3 file:py-1 file:rounded file:font-medium file:bg-white file:text-black file:shadow file:transition-colors file:hover:bg-gray-200 file:text-center file:border-0 file:m-0 pr-10"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  title="pievieno savu failu"
                />
                {selectedFile && (
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700 text-3xl"
                    aria-label="Remove file"
                  >
                    &times;
                  </button>
                )}
              </div>
            </div>
            <Button className="w-full bg-[#f3b112] hover:bg-[#e0a20f] text-black font-bold rounded-lg border-none flex items-center justify-center">
              Enviar
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact }; 