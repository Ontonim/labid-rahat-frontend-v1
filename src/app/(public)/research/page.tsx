import { ArrowRight, BookOpen, Calendar, MapPin } from "lucide-react";
import Background from "@/components/common/Background";
import Image from "next/image";
import Link from "next/link";

interface Research {
  id: string;
  title: string;
  description: string;
  methodology: string;
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
    methodology: "Comparative Historical Analysis",
    findings:
      "Identified 5 key geographical advantages that consistently led to global dominance.",
    field: "Geopolitics",
    year: "2025",
    image:
      "https://www.worldhistory.org/img/r/p/1000x1200/14114.jpg.webp?v=1732552203",
    stats: [
      { label: "Empires Studied", value: "10+" },
      { label: "Key Factors", value: "5" },
      { label: "Time Period", value: "3000 Years" },
    ],
  },
  {
    id: "2",
    title: "Mapping Conflicts Through History",
    description:
      "An interactive geospatial research project documenting major military conflicts across different centuries, analyzing the geographical and geopolitical factors that influenced military strategies and outcomes.",
    methodology: "Geospatial Mapping & Data Analysis",
    findings:
      "Revealed consistent patterns in conflict emergence related to resource distribution and strategic locations.",
    field: "Military History",
    year: "2025",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Superpower.svg/1200px-Superpower.svg.png",
    stats: [
      { label: "Wars Analyzed", value: "50+" },
      { label: "Centuries Covered", value: "8" },
      { label: "Data Points", value: "1000+" },
    ],
  },
  {
    id: "3",
    title: "Silk Road: The First Global Trade Network",
    description:
      "An in-depth exploration of the ancient Silk Road trade routes, investigating how these networks facilitated not only economic exchange but also the transmission of ideas, technologies, and cultural practices across Eurasia.",
    methodology: "Archaeological & Historical Documentation",
    findings:
      "Demonstrated how trade shaped political alliances and accelerated global development.",
    field: "Economic History",
    year: "2024",
    image:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/silk-road-traded-goods-gettyimages-152191859?_a=BAVAZGID0",
    stats: [
      { label: "Trade Routes", value: "4 Major" },
      { label: "Regions Connected", value: "12" },
      { label: "Cultural Exchanges", value: "High" },
    ],
  },
  {
    id: "4",
    title: "Strategic Importance of the Indian Ocean",
    description:
      "A geopolitical research study examining why the Indian Ocean remains one of the most strategically significant maritime regions, analyzing contemporary great power competition and historical trade patterns.",
    methodology: "Geopolitical Risk Assessment",
    findings:
      "Identified 3 major global powers actively competing for regional influence and control.",
    field: "Maritime Geopolitics",
    year: "2024",
    image:
      "https://thegeopolitics.com/wp-content/uploads/2021/03/Indian-Navy-flotilla-of-Western-Fleet-escort-INS-Vikramaditya-and-INS-Viraat.jpg",
    stats: [
      { label: "Countries Involved", value: "20+" },
      { label: "Strategic Zones", value: "5" },
      { label: "Trade Volume", value: "$5T" },
    ],
  },
  {
    id: "5",
    title: "Colonialism and Its Global Impact",
    description:
      "A critical examination of European colonization and its lasting effects on political borders, cultural identities, and economic systems across Africa, Asia, and the Americas, with focus on contemporary implications.",
    methodology: "Postcolonial Critical Analysis",
    findings:
      "Mapped long-term effects of colonial policies still visible in modern geopolitical tensions.",
    field: "Colonial History",
    year: "2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Landing_of_Columbus_%282%29_%28cropped%29.jpg",
    stats: [
      { label: "Continents Studied", value: "6" },
      { label: "Colonial Powers", value: "8" },
      { label: "Legacy Factors", value: "10+" },
    ],
  },
  {
    id: "6",
    title: "Climate and Civilization Development",
    description:
      "A multidisciplinary study examining the relationship between climate patterns and the rise and fall of ancient civilizations, investigating how environmental factors influenced agriculture, migration, and societal complexity.",
    methodology: "Paleoclimatology & Archaeological Evidence",
    findings:
      "Established strong correlations between climate zones and population growth patterns over millennia.",
    field: "Environmental History",
    year: "2023",
    image:
      "https://www.encyclopedie-environnement.org/app/uploads/2019/09/Changement-climatique_couv-pyramide-kukulkan.jpg",
    stats: [
      { label: "Civilizations", value: "15+" },
      { label: "Climate Zones", value: "7" },
      { label: "Time Span", value: "5000 Years" },
    ],
  },
];

export default function ResearchPage() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Background />
      <div className="my-10 lg:my-36 relative z-10">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <section className="border-b border-border container mx-auto">
            <div className="py-16">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-[#02590F]/10 text-[#02590F] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <BookOpen className="w-4 h-4" />
                  Academic Research
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
                  Research on Geography & History
                </h1>
                <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                  Exploring the deep connections between landscapes, borders,
                  civilizations, and the historical forces that shaped our world
                  through rigorous academic research and evidence-based
                  analysis.
                </p>
              </div>
            </div>
          </section>

          {/* Research Grid */}
          <section className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {RESEARCH_WORKS.map((research, index) => (
                <Link
                  key={research.id}
                  href={"/research/military-geography-strategy"}
                >
                  <article
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#02590F]/10 hover:border-[#02590F] transition-all duration-500 cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#02590F]/20 to-transparent">
                      <Image
                        width={600}
                        height={400}
                        src={research.image || "/placeholder.svg"}
                        alt={research.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Overlay Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Calendar className="w-3 h-3 text-white" />
                        <span className="text-xs text-white font-medium">
                          {research.year}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      {/* Field Tag */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#02590F] bg-[#02590F]/10 px-3 py-1.5 rounded-lg">
                          <MapPin className="w-3 h-3" />
                          {research.field}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          {research.methodology}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-[#02590F] transition-colors duration-300">
                        {research.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                        {research.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-xl border border-border">
                        {research.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-xl font-bold text-[#02590F] mb-1">
                              {stat.value}
                            </p>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Findings & CTA */}
                      <div className="flex items-start justify-between gap-4 pt-4 border-t border-border">
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                            Key Findings
                          </p>
                          <p className="text-sm text-foreground line-clamp-2">
                            {research.findings}
                          </p>
                        </div>
                        <button className="flex-shrink-0 mt-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#02590F] text-white group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 cursor-pointer">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
