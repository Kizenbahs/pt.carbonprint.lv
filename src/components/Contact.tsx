import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import emailjs from '@emailjs/browser';

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
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // EmailJS configuration from environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Check if environment variables are configured
    if (!serviceId || !templateId || !publicKey) {
      setError('Configuração de email não encontrada. Por favor, configure as variáveis de ambiente.');
      setIsLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.firstname,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'carbonprint',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSuccess(true);
      setFormData({ firstname: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Erro ao enviar mensagem. Tente novamente ou contacte-nos pelo WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-24 pb-24 bg-white">
      <div className="container w-full">
        <div className="text-center flex flex-col items-center">
          <Badge className="mb-6 mx-auto text-black bg-gray-100 border-gray-300">
            Será um prazer conversar sobre a sua ideia
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
                    <span>T: <a href="tel:37126236432" className="text-black hover:underline font-medium">+371 26 236 432</a></span>
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              {isSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Mensagem enviada com sucesso! Entraremos em contacto em breve.
                </div>
              )}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-white">Nome</Label>
                <Input 
                  type="text" 
                  id="firstname" 
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Nome" 
                  className="bg-white border-black border-2 focus:border-black focus:ring-0 text-black" 
                  required 
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email" 
                  className="bg-white border-black border-2 focus:border-black focus:ring-0 text-black" 
                  required 
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject" className="text-white">Assunto</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Assunto" 
                  className="bg-white border-black border-2 focus:border-black focus:ring-0 text-black" 
                  required 
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message" className="text-white">Mensagem</Label>
                <Textarea 
                  placeholder="Conte-nos sua ideia ou mande uma pergunta!" 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white border-black border-2 focus:border-black focus:ring-0 text-black" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#f3b112] hover:bg-[#e0a20f] text-black disabled:opacity-50"
              >
                {isLoading ? 'A enviar...' : 'Enviar ideia'}
                {!isLoading && <ArrowRight className="size-4 ml-2" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact }; 