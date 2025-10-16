import { ArrowRight } from "lucide-react";
import Background from "@/components/common/Background";
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
    title: "Geography and the Rise of Global Empires",
    description:
      "Analyzed how strategic locations, natural resources, and trade routes helped major empires expand their influence.",
    results:
      "Identified 5 key geographical advantages that consistently led to global dominance.",
    industry: "Geopolitics",
    year: "2025",
    image:
      "https://www.worldhistory.org/img/r/p/1000x1200/14114.jpg.webp?v=1732552203",
    metrics: [
      { label: "Empires Studied", value: "10+" },
      { label: "Key Factors Found", value: "5" },
    ],
  },
  {
    id: "2",
    title: "Mapping Conflicts Through History",
    description:
      "Built an interactive map showcasing major wars across different centuries and the geopolitical reasons behind them.",
    results:
      "Helped users understand conflict patterns and the role of geography in military strategy.",
    industry: "History",
    year: "2025",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Superpower.svg/1200px-Superpower.svg.png",
    metrics: [
      { label: "Wars Analyzed", value: "50+" },
      { label: "User Understanding", value: "+80%" },
    ],
  },
  {
    id: "3",
    title: "Silk Road: The First Global Trade Network",
    description:
      "Explored how the Silk Road connected continents and facilitated cultural and economic exchange.",
    results:
      "Revealed how trade shaped political alliances and global development.",
    industry: "History & Trade",
    year: "2024",
    image:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/silk-road-traded-goods-gettyimages-152191859?_a=BAVAZGID0",
    metrics: [
      { label: "Trade Routes", value: "4 Major" },
      { label: "Cultural Impact", value: "High" },
    ],
  },
  {
    id: "4",
    title: "Strategic Importance of the Indian Ocean",
    description:
      "Researched why the Indian Ocean remains a crucial maritime route in modern geopolitics.",
    results:
      "Highlighted 3 major global powers competing for control in the region.",
    industry: "Geopolitics",
    year: "2024",
    image:
      "https://thegeopolitics.com/wp-content/uploads/2021/03/Indian-Navy-flotilla-of-Western-Fleet-escort-INS-Vikramaditya-and-INS-Viraat.jpg",
    metrics: [
      { label: "Countries Involved", value: "20+" },
      { label: "Strategic Zones", value: "5" },
    ],
  },
  {
    id: "5",
    title: "Colonialism and Its Global Impact",
    description:
      "Studied how European colonization reshaped borders, cultures, and economies across continents.",
    results:
      "Explained long-term effects of colonial policies still visible in modern geopolitics.",
    industry: "History",
    year: "2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Landing_of_Columbus_%282%29_%28cropped%29.jpg",
    metrics: [
      { label: "Regions Studied", value: "6 Continents" },
      { label: "Legacy Factors", value: "10+" },
    ],
  },
  {
    id: "6",
    title: "Climate and Civilization Development",
    description:
      "Examined how climate patterns influenced agriculture, migration, and the rise of civilizations.",
    results:
      "Revealed strong links between climate zones and population growth over centuries.",
    industry: "Geography",
    year: "2023",
    image:
      "https://www.encyclopedie-environnement.org/app/uploads/2019/09/Changement-climatique_couv-pyramide-kukulkan.jpg",
    metrics: [
      { label: "Civilizations Analyzed", value: "15+" },
      { label: "Climate Zones", value: "7" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Background />
      <div className="my-10 lg:my-36 relative z-10">
        <div className="container mx-auto px-4">
          <section className="border-b border-border container mx-auto">
            <div className="py-12">
              <div className="text-center">
                <h1 className="text-3xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
                  Exploring Geography & Uncovering History
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                  Dive into the stories of our planet—its landscapes, borders,
                  civilizations, and the historical events that shaped the world
                  we live in today.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-20">
            <div>
              {CASE_STUDIES.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CASE_STUDIES.map((study) => (
                    <article
                      key={study.id}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-[#02590F] transition duration-300 cursor-pointer"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          width={500}
                          height={500}
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-[#02590F] bg-[#02590F]/10 px-2 py-1 rounded">
                            {study.industry}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {study.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#02590F] transition">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {study.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y border-border">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx}>
                              <p className="text-lg font-bold text-[#02590F]">
                                {metric.value}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-muted-foreground line-clamp-1">
                            {study.results}
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#02590F] group-hover:translate-x-1 transition flex-shrink-0" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">
                    No case studies found matching your search.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
