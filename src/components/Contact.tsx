import React, { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

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
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
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
    <section className="py-32">
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
                    <span className="font-bold">Phone:</span> <span>{phone}</span>
                  </li>
                  <li>
                    <span className="font-bold">Email:</span> <a href={`mailto:${email}`} className="underline">{email}</a>
                  </li>
                  <li>
                    <span className="font-bold">Web:</span> <a href={web.url} target="_blank" className="underline">{web.label}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-lg border bg-gray-800 text-white shadow-xl p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <div className="grid w-full gap-1.5 relative">
              <Label htmlFor="file">File</Label>
              <div className="relative flex items-center">
                <Input
                  type="file"
                  id="file"
                  className="bg-gray-800 text-white file:bg-gray-800 file:text-white pr-10"
                  ref={fileInputRef}
                  onChange={handleFileChange}
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
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact }; 