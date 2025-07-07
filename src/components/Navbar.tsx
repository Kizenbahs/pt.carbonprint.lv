"use client";

import { MenuIcon, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);
  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto lg:px-16">
        <nav className="flex items-center justify-between">
          <a
            href="https://pt.carbonprint.lv/"
            className="flex items-center gap-2"
          >
            <img
              src="/img/3d-print-logo.png"
              className="max-h-8"
              alt="3d printing"
            />
            <span className="text-xl font-semibold tracking-tighter">
              carbonprint
            </span>
          </a>
          
          {/* Etsy Shop Button */}
          <Button
            asChild
            variant="outline"
            className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600 hover:border-orange-700"
          >
            <a
              href="https://www.etsy.com/shop/carbonprintlv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Etsy Shop
            </a>
          </Button>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
