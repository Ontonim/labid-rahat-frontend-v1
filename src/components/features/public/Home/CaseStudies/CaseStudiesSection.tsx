"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";
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
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    title: "Mapping the Rise of Global Superpowers",
    description:
      "Analyzed how geography, natural resources, and trade routes helped shape the rise of major world powers throughout history.",
    results:
      "Identified key geographical advantages and historical turning points that influenced global dominance.",
    industry: "Geopolitics",
    year: "2025",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Superpower.svg/1200px-Superpower.svg.png",
    metrics: [
      { label: "Historical Accuracy", value: "95%" },
      { label: "Geographical Insights", value: "High" },
    ],
  },
  {
    id: "2",
    title: "The Impact of Geography on War Strategies",
    description:
      "Explored how terrain, climate, and borders influenced military strategies in major historical wars.",
    results:
      "Provided in-depth understanding of how geography shaped victory, defense, and diplomacy.",
    industry: "Military History",
    year: "2025",
    image:
      "https://cdn.britannica.com/26/143126-050-3FAD2ADB/US-Army-soldiers-security-duty-province-Paktika-2010.jpg",
    metrics: [
      { label: "Case Studies Covered", value: "20+" },
      { label: "Strategic Insights", value: "Extensive" },
    ],
  },
  {
    id: "3",
    title: "Silk Road: The First Global Trade Network",
    description:
      "Studied how the ancient Silk Road connected continents, spreading culture, religion, and economic power.",
    results:
      "Revealed the long-term influence of trade routes on cultural exchange and geopolitical relationships.",
    industry: "History & Trade",
    year: "2024",
    image:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/silk-road-traded-goods-gettyimages-152191859?_a=BAVAZGID0",
    metrics: [
      { label: "Cultural Exchange", value: "High Impact" },
      { label: "Coverage Area", value: "Asia to Europe" },
    ],
  },
];

export default function CaseStudiesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
          Our Case Studies
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Explore how we&apos;ve helped businesses achieve remarkable results through
          innovative solutions and strategic implementation
        </p>
      </div>

      {/* Featured Case Study */}
      <div className="mb-16">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#02590F]/20 to-[#02590F]/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
          <div className="relative bg-card rounded-lg overflow-hidden border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full min-h-96 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={CASE_STUDIES[0].image || "/placeholder.svg"}
                  alt={CASE_STUDIES[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-semibold text-[#02590F] bg-[#02590F]/10 px-3 py-1 rounded-full">
                      {CASE_STUDIES[0].industry}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {CASE_STUDIES[0].year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    {CASE_STUDIES[0].title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {CASE_STUDIES[0].description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {CASE_STUDIES[0].metrics.map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-2xl font-bold text-[#02590F]">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {CASE_STUDIES[0].results}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#02590F] group-hover:translate-x-2 transition duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {CASE_STUDIES.slice(1).map((study) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            isHovered={hoveredId === study.id}
            onHover={setHoveredId}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 text-center">
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#02590F] text-white rounded-lg font-semibold hover:bg-[#02590F]/90 transition duration-300 group cursor-pointer">
          View All Case Studies
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
        </button>
      </div>
    </div>
  );
}
