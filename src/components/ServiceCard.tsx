import type { ReactNode } from "react";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ image, title, description, icon }: ServiceCardProps) {
  return (
    <div className="group rounded-[2rem] overflow-hidden bg-surface-container-lowest shadow-[0_8px_32px_-4px_rgba(27,28,26,0.02)] hover:shadow-[0_16px_48px_-8px_rgba(27,28,26,0.05)] transition-all duration-500">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-surface/90 backdrop-blur rounded-xl flex items-center justify-center text-primary shadow-lg">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-on-surface font-headline">{title}</h3>
        <p className="mt-3 text-on-surface-variant leading-relaxed font-body">{description}</p>
      </div>
    </div>
  );
}
