"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Research {
  id: string;
  title: string;
  description: string;
  findings: string;
  field: string;
  year: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

interface ResearchCardProps {
  research: Research;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function ResearchCard({ research, onHover }: ResearchCardProps) {
  return (
    <Link href={"/research/military-geography-strategy"}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => onHover(research.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="relative bg-card rounded-lg overflow-hidden border border-border hover:border-[#02590F]/30 hover:shadow-xl hover:shadow-[#02590F]/10 transition-all duration-300 h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-muted">
            <Image
              width={500}
              height={500}
              src={research.image || "/placeholder.svg"}
              alt={research.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-[#02590F] bg-[#02590F]/10 px-2 py-1 rounded">
                {research.field}
              </span>
              <span className="text-xs text-muted-foreground">
                {research.year}
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#02590F] transition duration-300">
              {research.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
              {research.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-b border-border bg-muted/30 -mx-6 px-6">
              {research.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-sm font-bold text-[#02590F]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                Key Findings
              </p>
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-medium text-foreground line-clamp-2 flex-grow">
                  {research.findings}
                </span>
                <ArrowRight className="w-4 h-4 text-[#02590F] group-hover:translate-x-1 transition duration-300 flex-shrink-0 mt-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
