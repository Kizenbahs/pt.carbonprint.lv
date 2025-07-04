import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const images = [
  { src: "/img/3d-print-01.jpg", alt: "3D Print 1", title: "3D Print 1" },
  { src: "/img/3d-print-02.jpg", alt: "3D Print 2", title: "3D Print 2" },
  { src: "/img/3d-print-03.jpg", alt: "3D Print 3", title: "3D Print 3" },
  { src: "/img/3d-print-04.jpg", alt: "3D Print 4", title: "3D Print 4" },
  { src: "/img/3d-print-05.jpg", alt: "3D Print 5", title: "3D Print 5" },
  { src: "/img/3d-print-06.jpg", alt: "3D Print 6", title: "3D Print 6" },
  { src: "/img/3d-print-07.jpg", alt: "3D Print 7", title: "3D Print 7" },
  { src: "/img/3d-print-08.jpg", alt: "3D Print 8", title: "3D Print 8" },
  { src: "/img/3d-print-09.jpg", alt: "3D Print 9", title: "3D Print 9" },
  { src: "/img/3d-print-10.jpg", alt: "3D Print 10", title: "3D Print 10" },
  { src: "/img/3d-print-11.jpg", alt: "3D Print 11", title: "3D Print 11" },
  { src: "/img/3d-print-12.jpg", alt: "3D Print 12", title: "3D Print 12" },
  { src: "/img/3d-print-13.jpg", alt: "3D Print 13", title: "3D Print 13" },
  { src: "/img/3d-print-14.jpg", alt: "3D Print 14", title: "3D Print 14" },
  { src: "/img/3d-print-15.jpg", alt: "3D Print 15", title: "3D Print 15" },
  { src: "/img/3d-print-16.jpg", alt: "3D Print 16", title: "3D Print 16" },
  { src: "/img/3d-print-17.jpg", alt: "3D Print 17", title: "3D Print 17" },
  { src: "/img/3d-print-18.jpg", alt: "3D Print 18", title: "3D Print 18" },
  { src: "/img/3d-print-19.jpg", alt: "3D Print 19", title: "3D Print 19" },
  { src: "/img/3d-print-20.jpg", alt: "3D Print 20", title: "3D Print 20" },
];

export default function GalleryWithLightbox() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case "Escape":
          event.preventDefault();
          closeLightbox();
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, currentIndex]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Galeria de Fotos</h1>
        <p className="text-muted-foreground text-center">Clique em qualquer imagem para ver em lightbox</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-opacity group-hover:opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-7xl w-full h-full max-h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="absolute top-4 left-4 z-50 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
            {selectedIndex !== null && (
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="relative max-w-full max-h-full">
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="max-w-full max-h-[70vh] object-contain"
                    style={{ margin: "0 auto" }}
                  />
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
                  <h3 className="text-lg font-medium">{images[currentIndex].title}</h3>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 