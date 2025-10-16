"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  results: string;
  industry: string;
  year: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

interface CaseStudyCardProps {
  study: CaseStudy;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function CaseStudyCard({ study, onHover }: CaseStudyCardProps) {
  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => onHover(study.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative bg-card rounded-lg overflow-hidden border border-border hover:border-[#02590F]/30 transition duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            width={500}
            height={500}
            src={study.image || "/placeholder.svg"}
            alt={study.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[#02590F] bg-[#02590F]/10 px-2 py-1 rounded">
              {study.industry}
            </span>
            <span className="text-xs text-muted-foreground">{study.year}</span>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#02590F] transition duration-300">
            {study.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {study.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-border">
            {study.metrics.map((metric, idx) => (
              <div key={idx}>
                <p className="text-sm font-bold text-[#02590F]">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-medium text-muted-foreground line-clamp-1">
              {study.results}
            </span>
            <ArrowRight className="w-4 h-4 text-[#02590F] group-hover:translate-x-1 transition duration-300 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
