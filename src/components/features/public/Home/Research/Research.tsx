"use client";

import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import ResearchCard from "./ResearchCard";
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

const RESEARCH_WORKS: Research[] = [
  {
    id: "1",
    title: "Geography and the Rise of Global Empires",
    description:
      "A comprehensive analysis examining how strategic geographical locations, access to natural resources, and control of major trade routes enabled historical empires to expand their territorial and cultural influence across continents.",
    findings:
      "Identified 5 key geographical advantages that consistently led to global dominance throughout history.",
    field: "Geopolitics",
    year: "2025",
    image:
      "https://www.worldatlas.com/r/w768/upload/57/7f/b8/shutterstock-209342908-1-converted-01.png",
    stats: [
      { label: "Empires Studied", value: "10+" },
      { label: "Key Factors Found", value: "5" },
    ],
  },
  {
    id: "2",
    title: "The Impact of Geography on War Strategies",
    description:
      "An in-depth exploration of how terrain, climate, and geographical borders influenced military strategies, tactics, and outcomes in major historical conflicts across different eras.",
    findings:
      "Revealed consistent patterns showing geography as a decisive factor in military success and strategic planning.",
    field: "Military History",
    year: "2025",
    image:
      "https://cdn.britannica.com/26/143126-050-3FAD2ADB/US-Army-soldiers-security-duty-province-Paktika-2010.jpg",
    stats: [
      { label: "Wars Analyzed", value: "20+" },
      { label: "Strategic Patterns", value: "12" },
    ],
  },
  {
    id: "3",
    title: "Silk Road: The First Global Trade Network",
    description:
      "An extensive study of how the ancient Silk Road connected continents, facilitating not only trade but also the exchange of ideas, religions, technologies, and cultural practices.",
    findings:
      "Demonstrated the profound long-term influence of trade routes on cultural exchange and geopolitical relationships.",
    field: "Economic History",
    year: "2024",
    image:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/silk-road-traded-goods-gettyimages-152191859?_a=BAVAZGID0",
    stats: [
      { label: "Cultural Impact", value: "High" },
      { label: "Trade Routes", value: "4 Major" },
    ],
  },
];

export default function ResearchSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#02590F]/10 text-[#02590F] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <BookOpen className="w-4 h-4" />
          Academic Research
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
          Our Research Portfolio
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Exploring the deep connections between geography, history, and human
          civilization through rigorous academic research and evidence-based
          analysis
        </p>
      </div>

      {/* Featured Research */}
      <div className="mb-16">
        <Link href={"/research/military-geography-strategy"}>
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#02590F]/20 to-[#02590F]/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-card rounded-lg overflow-hidden border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-96 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={RESEARCH_WORKS[0].image || "/placeholder.svg"}
                    alt={RESEARCH_WORKS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-semibold text-[#02590F] bg-[#02590F]/10 px-3 py-1 rounded-full">
                        {RESEARCH_WORKS[0].field}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {RESEARCH_WORKS[0].year}
                      </span>
                      <span className="text-xs text-[#02590F] bg-[#02590F]/5 px-2 py-1 rounded">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                      {RESEARCH_WORKS[0].title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {RESEARCH_WORKS[0].description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-lg border border-border">
                      {RESEARCH_WORKS[0].stats.map((stat, idx) => (
                        <div key={idx}>
                          <p className="text-2xl font-bold text-[#02590F]">
                            {stat.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                        Key Findings
                      </p>
                      <span className="text-sm font-medium text-foreground">
                        {RESEARCH_WORKS[0].findings}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#02590F] group-hover:translate-x-2 transition duration-300 flex-shrink-0 ml-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Research Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {RESEARCH_WORKS.slice(1).map((research) => (
          <ResearchCard
            key={research.id}
            research={research}
            isHovered={hoveredId === research.id}
            onHover={setHoveredId}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 text-center">
        <Link href={"/research"}>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#02590F] text-white rounded-lg font-semibold hover:bg-[#02590F]/90 transition duration-300 group cursor-pointer">
            View All Research Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
}
