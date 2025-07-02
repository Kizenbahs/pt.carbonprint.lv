import React, { useRef, useState } from "react";

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
  title = "Contact Us",
  description = "Estamos disponíveis para perguntas, feedback ou oportunidades de colaboração. Informe-nos como podemos ajudar!",
  phone = "T: +371 26 236 432",
  email = "E: info@carbonprint.lv",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: ContactProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files && e.target.files[0] ? e.target.files[0] : null);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { firstname: '', lastname: '', email: '', subject: '', message: '' };
    if (!(document.getElementById('firstname') as HTMLInputElement).value) {
      newErrors.firstname = 'Este campo é obrigatório.';
      valid = false;
    }
    if (!(document.getElementById('lastname') as HTMLInputElement).value) {
      newErrors.lastname = 'Este campo é obrigatório.';
      valid = false;
    }
    if (!(document.getElementById('email') as HTMLInputElement).value) {
      newErrors.email = 'Este campo é obrigatório.';
      valid = false;
    }
    if (!(document.getElementById('subject') as HTMLInputElement).value) {
      newErrors.subject = 'Este campo é obrigatório.';
      valid = false;
    }
    if (!(document.getElementById('message') as HTMLTextAreaElement).value) {
      newErrors.message = 'Este campo é obrigatório.';
      valid = false;
    }
    setErrors(newErrors);
    if (!valid) return;
    // ... existing code ...
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 lg:flex-row lg:gap-12">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-4">
            <div className="text-center lg:text-left">
              <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                {title}
              </h2>
              <p className="text-muted-foreground mb-2">{description}</p>
              <div className="mx-auto w-fit lg:mx-0 mt-2">
                <h3 className="mb-2 text-center text-2xl font-semibold lg:text-left">
                  Contact Details
                </h3>
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="text-yellow-400 font-semibold">{phone}</span>
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">{email}</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-6">
                <div className="grid w-full items-center gap-6">
                  <Label htmlFor="firstname">Nome</Label>
                  <Input type="text" id="firstname" placeholder="Nome" className="rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 px-4 py-2 bg-gray-900 text-white placeholder:text-gray-400" />
                  {errors.firstname && <span className="text-red-500 text-xs">{errors.firstname}</span>}
                </div>
                <div className="grid w-full items-center gap-6">
                  <Label htmlFor="lastname">Sobrenome</Label>
                  <Input type="text" id="lastname" placeholder="Sobrenome" className="rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 px-4 py-2 bg-gray-900 text-white placeholder:text-gray-400" />
                  {errors.lastname && <span className="text-red-500 text-xs">{errors.lastname}</span>}
                </div>
              </div>
              <div className="grid w-full items-center gap-6">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" className="rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 px-4 py-2 bg-gray-900 text-white placeholder:text-gray-400" />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
              <div className="grid w-full items-center gap-6">
                <Label htmlFor="subject">Assunto</Label>
                <Input type="text" id="subject" placeholder="Assunto" className="rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 px-4 py-2 bg-gray-900 text-white placeholder:text-gray-400" />
                {errors.subject && <span className="text-red-500 text-xs">{errors.subject}</span>}
              </div>
              <div className="grid w-full gap-6">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea placeholder="Digite sua mensagem aqui." id="message" className="rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-500 px-4 py-2 bg-gray-900 text-white placeholder:text-gray-400" />
                {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
              </div>
              <div className="grid w-full gap-6 relative">
                <Label htmlFor="file">Arquivo</Label>
                <div className="relative flex items-center">
                  <Input
                    type="file"
                    id="file"
                    className="bg-gray-800 text-white file:bg-blue-600 file:text-white file:hover:bg-blue-700 pr-10"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    title="Escolher arquivo"
                  />
                  {selectedFile && (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700 text-3xl"
                      aria-label="Remover arquivo"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Enviar consulta</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact }; 