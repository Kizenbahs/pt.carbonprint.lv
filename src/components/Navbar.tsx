"use client";

import { MenuIcon, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect } from "react";

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
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a
            href="https://pt.carbonprint.lv/"
            className="flex items-center gap-2"
          >
            <img
              src="/img/3d-print-logo.png"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              carbonprint
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://www.etsy.com/shop/CarbonPrintLV"
                  className={navigationMenuTriggerStyle()}
                  target="_blank"
                >
                  Loja
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#faq"
                  className={navigationMenuTriggerStyle()}
                >
                  Porquê nós?
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Contactos
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="shrink-0"
              aria-label="Toggle dark mode"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://pt.carbonprint.lv/"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="/img/3d-print-logo.png"
                      className="max-h-8"
                      alt="carbonprint logo"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      carbonprint
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <a 
                    href="https://www.etsy.com/shop/CarbonPrintLV" 
                    className="font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Loja
                  </a>
                  <a href="#faq" className="font-medium">
                    Porquê nós?
                  </a>
                  <a href="#contact" className="font-medium">
                    Contactos
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="shrink-0 self-end"
                    aria-label="Toggle dark mode"
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
