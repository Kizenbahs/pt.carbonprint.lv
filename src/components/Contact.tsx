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
                <a
                  href="https://wa.me/37126236432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold rounded-lg text-sm shadow transition-colors"
                  style={{ minWidth: '120px', justifyContent: 'center' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.18-1.62A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9.86.16.18.32.2.6.07.28.14-1.18.44-2.25 1.4-.83.74 1.39.16.28.02.43.12.57.13.13.28.34.42.51.14.17.18.29.28.48.09.18.05.36.02.5.07.14.61 1.47.84 2.01.22.53.45.46.62.47.16.01.36.01.56.01.2 0 .52-.07.8-.34.28-.28 1.08-1.06 1.08-2.58 0-1.52-1.1-2.99-1.25-3.2-.15-.21-2.16-3.3-5.23-4.5-.73-.29-1.3-.46-1.75-.59-.74-.23-1.41-.2-1.94-.12-.59.09-1.65.67-1.88 1.32-.23.65-.23 1.21-.16 1.32.07.11.25.18.53.32.78.6.14.28.32.46.46.64.6.28.14.54.22.78.22 1.06z" />
                  </svg>
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