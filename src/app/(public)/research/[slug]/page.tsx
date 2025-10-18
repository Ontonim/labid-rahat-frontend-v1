"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Research {
  id: string;
  title: string;
  description: string;
  summary: string;
  field: string;
  year: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  methodology: string;
  findings: string;
  impact: string;
  keyInsights: string[];
  sources?: {
    title: string;
    url: string;
  }[];
  relatedTopics?: string[];
}

const RESEARCH_WORKS: Record<string, Research> = {
  "geography-global-empires": {
    id: "1",
    title: "Geography and the Rise of Global Empires",
    description:
      "A comprehensive analysis examining how strategic geographical locations, access to natural resources, and control of major trade routes enabled historical empires to expand their territorial and cultural influence across continents. This research explores the geographical determinism theory and its application to imperial expansion throughout history.",
    summary:
      "This research examines the critical role of geography in shaping imperial power, analyzing how natural barriers, resource distribution, and strategic positioning determined the rise and fall of major empires throughout human history.",
    field: "Geopolitics",
    year: "2025",
    image:
      "https://www.worldhistory.org/img/r/p/1000x1200/14114.jpg.webp?v=1732552203",
    stats: [
      { label: "Empires Studied", value: "10+" },
      { label: "Key Factors Found", value: "5" },
      { label: "Time Period", value: "3000 Years" },
      { label: "Research Hours", value: "1500+" },
    ],
    methodology:
      "We conducted a systematic comparative historical analysis of major empires including Roman, Ottoman, Mongol, British, and Chinese dynasties. Geographic data was cross-referenced with historical records, archaeological evidence, and military campaigns. Spatial analysis tools were used to map territorial expansion patterns and identify geographical advantages.",
    findings:
      "Our research identified five critical geographical factors that consistently enabled imperial expansion: access to navigable waterways for trade and military deployment, control of strategic mountain passes and natural barriers for defense, proximity to fertile agricultural lands for food security, possession of valuable natural resources for economic power, and location at the crossroads of major trade routes for cultural and economic exchange.",
    impact:
      "This research provides historians, geographers, and political scientists with a framework for understanding how geography shapes political power. It offers insights into modern geopolitical dynamics and helps explain contemporary territorial disputes and strategic positioning of nations.",
    keyInsights: [
      "Natural harbors and river systems enabled naval dominance",
      "Mountain ranges served as defensive barriers for empire cores",
      "Fertile river valleys supported large population centers",
      "Strategic chokepoints controlled global trade routes",
      "Resource-rich territories attracted imperial expansion",
      "Geographic isolation protected some civilizations from conquest",
    ],
    relatedTopics: [
      "Political Geography",
      "World History",
      "Imperial Studies",
      "Geostrategy",
    ],
  },

  "climate-civilization-nexus": {
    id: "2",
    title: "Climate and Civilization Development",
    description:
      "A multidisciplinary study examining the relationship between climate patterns and the rise and fall of ancient civilizations, investigating how environmental factors influenced agriculture, migration, societal complexity, and technological innovation across different geographic regions and time periods.",
    summary:
      "Exploring the interconnection between climate patterns, environmental changes, and the development of human civilizations from ancient times to the medieval period.",
    field: "Environmental History",
    year: "2023",
    image:
      "https://www.encyclopedie-environnement.org/app/uploads/2019/09/Changement-climatique_couv-pyramide-kukulkan.jpg",
    stats: [
      { label: "Civilizations", value: "15+" },
      { label: "Climate Zones", value: "7" },
      { label: "Time Span", value: "5000 Years" },
      { label: "Data Sources", value: "200+" },
    ],
    methodology:
      "We integrated paleoclimatology data from ice cores, tree rings, and sediment samples with archaeological records and historical texts. Climate reconstruction models were used to map temperature and precipitation patterns. Cross-disciplinary analysis linked environmental data with agricultural practices, settlement patterns, and societal developments.",
    findings:
      "Climate stability was essential for civilization development. Regions with predictable seasonal patterns developed advanced agriculture and sustained large populations. Major civilizations emerged in temperate zones with reliable water sources. Climate shifts caused migrations, conflicts, and sometimes civilization collapse. The Medieval Warm Period and Little Ice Age significantly impacted European and Asian societies.",
    impact:
      "This research helps us understand how climate influences societal development and provides historical context for current climate challenges. It offers lessons for modern adaptation strategies and highlights the vulnerability of human societies to environmental changes.",
    keyInsights: [
      "Stable climate zones fostered agricultural innovation",
      "Monsoon patterns shaped Asian civilizations",
      "Drought contributed to collapse of ancient empires",
      "Climate migrations created cultural exchanges",
      "Coastal civilizations vulnerable to sea level changes",
      "Temperature shifts affected crop yields and food security",
    ],
    relatedTopics: [
      "Paleoclimatology",
      "Archaeological Science",
      "Human Geography",
      "Environmental Studies",
    ],
  },

  "silk-road-trade-network": {
    id: "3",
    title: "Silk Road: The First Global Trade Network",
    description:
      "An in-depth exploration of the ancient Silk Road trade routes, investigating how these networks facilitated not only economic exchange but also the transmission of ideas, technologies, religions, and cultural practices across Eurasia from the 2nd century BCE to the 15th century CE.",
    summary:
      "Understanding the Silk Road's role as the world's first major international trade network and its lasting impact on cultural exchange, technological diffusion, and economic development.",
    field: "Economic History",
    year: "2024",
    image:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/silk-road-traded-goods-gettyimages-152191859?_a=BAVAZGID0",
    stats: [
      { label: "Trade Routes", value: "4 Major" },
      { label: "Regions Connected", value: "12" },
      { label: "Cultural Exchanges", value: "High" },
      { label: "Active Period", value: "1700 Years" },
    ],
    methodology:
      "We analyzed historical trade documents, archaeological findings from caravanserais and ports, and numismatic evidence of monetary exchange. Geographic mapping traced primary and secondary routes. Comparative analysis of cultural artifacts documented the diffusion of technologies, art styles, and religious practices along trade routes.",
    findings:
      "The Silk Road was not a single route but a complex network connecting East Asia with Mediterranean Europe. It facilitated trade in silk, spices, precious metals, and technologies. Buddhism spread from India to East Asia along these routes. Paper-making, gunpowder, and the compass traveled westward. The network created cosmopolitan cities and fostered multilingual commerce.",
    impact:
      "This research illuminates how ancient globalization shaped modern civilization. It demonstrates the importance of trade in cultural exchange and technological advancement, providing historical context for contemporary global trade networks and international cooperation.",
    keyInsights: [
      "Trade routes enabled the spread of major religions",
      "Technological innovations traveled along commercial paths",
      "Multilingual merchants created early globalization",
      "Caravanserais served as cultural exchange centers",
      "Maritime routes complemented overland trade",
      "Political stability essential for trade prosperity",
    ],
    relatedTopics: [
      "Trade History",
      "Cultural Diffusion",
      "Asian Studies",
      "Medieval History",
    ],
  },

  "indian-ocean-geopolitics": {
    id: "4",
    title: "Strategic Importance of the Indian Ocean",
    description:
      "A geopolitical research study examining why the Indian Ocean remains one of the most strategically significant maritime regions, analyzing contemporary great power competition, historical trade patterns, naval strategies, and the region's role in global energy security.",
    summary:
      "Analyzing the Indian Ocean's critical role in global geopolitics, from ancient maritime trade to modern great power competition and energy security concerns.",
    field: "Maritime Geopolitics",
    year: "2024",
    image:
      "https://thegeopolitics.com/wp-content/uploads/2021/03/Indian-Navy-flotilla-of-Western-Fleet-escort-INS-Vikramaditya-and-INS-Viraat.jpg",
    stats: [
      { label: "Countries Involved", value: "20+" },
      { label: "Strategic Zones", value: "5" },
      { label: "Trade Volume", value: "$5T" },
      { label: "Chokepoints", value: "3 Critical" },
    ],
    methodology:
      "We conducted geopolitical risk assessment using naval deployment data, trade flow statistics, and diplomatic relations analysis. Strategic chokepoints were evaluated for economic and military significance. Interviews with defense analysts and historical comparison of maritime power projection strategies informed our analysis.",
    findings:
      "The Indian Ocean hosts 80% of global oil trade through key chokepoints like the Strait of Hormuz and Malacca Strait. Three major powers (US, China, India) compete for naval dominance. Climate change threatens coastal populations and creates security challenges. The region connects three continents and hosts crucial submarine cable infrastructure for global communications.",
    impact:
      "This research informs policymakers about maritime security challenges and strategic priorities. It helps explain contemporary naval buildups and alliance formations, providing context for understanding regional conflicts and cooperation in the Indo-Pacific region.",
    keyInsights: [
      "Critical chokepoints control global energy supplies",
      "Naval presence determines regional influence",
      "Climate threats multiply security challenges",
      "Maritime trade routes vital for global economy",
      "Island nations serve as strategic anchors",
      "Submarine cables carry 95% of international data",
    ],
    relatedTopics: [
      "Naval Strategy",
      "Energy Security",
      "Indo-Pacific Studies",
      "International Relations",
    ],
  },

  "colonialism-global-impact": {
    id: "5",
    title: "Colonialism and Its Global Impact",
    description:
      "A critical examination of European colonization from the 15th to 20th centuries and its lasting effects on political borders, cultural identities, economic systems, and social structures across Africa, Asia, and the Americas, with focus on contemporary post-colonial challenges and legacies.",
    summary:
      "Examining how European colonial expansion reshaped the world's political, economic, and cultural landscape, with lasting consequences visible in modern geopolitics and international relations.",
    field: "Colonial History",
    year: "2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Landing_of_Columbus_%282%29_%28cropped%29.jpg",
    stats: [
      { label: "Continents Studied", value: "6" },
      { label: "Colonial Powers", value: "8" },
      { label: "Legacy Factors", value: "10+" },
      { label: "Period Covered", value: "500 Years" },
    ],
    methodology:
      "We analyzed colonial archives, post-colonial literature, economic data comparing pre and post-colonial periods, and conducted field research in former colonies. Comparative analysis examined different colonial systems (British, French, Spanish, Portuguese). Contemporary border conflicts and economic disparities were traced to colonial origins.",
    findings:
      "Colonial borders artificially divided ethnic groups and combined rival communities, creating lasting conflicts. Economic extraction left regions resource-dependent. Colonial education systems disrupted indigenous knowledge. Language policies created linguistic divides. Independence movements shaped modern nationalism. Post-colonial nations struggle with inherited institutions designed for exploitation rather than development.",
    impact:
      "This research provides essential context for understanding contemporary global inequalities, conflicts, and development challenges. It informs decolonization efforts and helps explain persistent patterns in international relations and economic dependencies.",
    keyInsights: [
      "Arbitrary borders created ethnic conflicts",
      "Economic structures favored resource extraction",
      "Colonial languages became official post-independence",
      "Legal systems inherited from colonial powers",
      "Educational curricula promoted colonial narratives",
      "Independence movements shaped modern nationalism",
    ],
    relatedTopics: [
      "Post-Colonial Studies",
      "Development Economics",
      "African History",
      "Global Inequality",
    ],
  },

  "military-geography-strategy": {
    id: "6",
    title: "The Impact of Geography on War Strategies",
    description:
      "An in-depth exploration of how terrain, climate, and geographical borders influenced military strategies, tactics, and outcomes in major historical conflicts from ancient to modern warfare, examining the relationship between geography and military success.",
    summary:
      "Analyzing how geographical factors shaped military campaigns, defensive strategies, and the outcomes of major conflicts throughout history.",
    field: "Military History",
    year: "2025",
    image:
      "https://cdn.britannica.com/26/143126-050-3FAD2ADB/US-Army-soldiers-security-duty-province-Paktika-2010.jpg",
    stats: [
      { label: "Wars Analyzed", value: "20+" },
      { label: "Strategic Patterns", value: "12" },
      { label: "Campaigns Studied", value: "50+" },
      { label: "Time Period", value: "2500 Years" },
    ],
    methodology:
      "We analyzed military campaigns using topographic maps, weather data, and historical battle records. Geographic Information Systems (GIS) mapped troop movements and defensive positions. Comparative analysis identified recurring strategic patterns across different eras and regions. Military doctrine documents revealed how commanders incorporated geographic intelligence.",
    findings:
      "Geography consistently determined military outcomes more than troop numbers or technology. High ground provided tactical advantages in pre-modern warfare. Rivers and mountains created natural defensive barriers. Climate affected logistics and campaign timing. Naval access enabled power projection. Modern warfare still respects geographical constraints despite technological advances.",
    impact:
      "This research informs military strategists and historians about the enduring importance of geography in conflict. It provides lessons for modern defense planning and helps explain why certain territories remain strategically contested throughout history.",
    keyInsights: [
      "Terrain shapes tactical decisions and formations",
      "Supply lines vulnerable to geographic chokepoints",
      "Winter weather defeated multiple invasion attempts",
      "Mountain warfare requires specialized tactics",
      "Coastal control enables naval power projection",
      "Urban geography transforms modern combat",
    ],
    relatedTopics: [
      "Military Strategy",
      "Geostrategy",
      "Defense Studies",
      "War History",
    ],
  },
};

export default function ResearchDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const research = RESEARCH_WORKS[params.slug];
  const [activeTab, setActiveTab] = useState<"overview" | "details">(
    "overview"
  );

  if (!research) {
    return (
      <section className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Research Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The research study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#02590F] text-white rounded-lg font-semibold hover:bg-[#02590F]/90 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Research
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-[#02590F]/20 to-transparent">
        <Image
          width={1920}
          height={400}
          src={research.image || "/placeholder.svg"}
          alt={research.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#02590F] mb-4 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#02590F]/10 text-[#02590F] px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              {research.field}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl">
              {research.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published {research.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Peer Reviewed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {research.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl font-bold text-[#02590F] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Executive Summary
          </h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {research.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">
                  Research Period
                </p>
                <p className="text-lg font-bold text-foreground">
                  {research.year}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">
                  Primary Field
                </p>
                <p className="text-lg font-bold text-foreground">
                  {research.field}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">
                  Research Status
                </p>
                <p className="text-lg font-bold text-[#02590F]">Published</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 px-2 font-semibold transition ${
                activeTab === "overview"
                  ? "text-[#02590F] border-b-2 border-[#02590F]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-4 px-2 font-semibold transition ${
                activeTab === "details"
                  ? "text-[#02590F] border-b-2 border-[#02590F]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Detailed Analysis
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-12">
              {/* Research Background */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Research Background
                </h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {research.description}
                  </p>
                </div>
              </div>

              {/* Methodology */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#02590F]/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-[#02590F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Research Methodology
                    </h3>
                    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Data Collection & Analysis
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {research.methodology}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-3">
                          Methodological Framework
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#02590F] flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              Systematic literature review and primary source
                              analysis
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#02590F] flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              Comparative historical and geographical analysis
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#02590F] flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              Expert consultation and peer review validation
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#02590F] flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              Cross-disciplinary data integration and synthesis
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Findings */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#02590F]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#02590F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Key Findings
                    </h3>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {research.findings}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#02590F]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#02590F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Impact & Significance
                    </h3>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {research.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-12">
              {/* Key Insights */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key Insights & Discoveries
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {research.keyInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border rounded-lg p-4 flex items-start gap-3 hover:border-[#02590F]/30 transition"
                    >
                      <CheckCircle className="w-5 h-5 text-[#02590F] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground">{insight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Team */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#02590F]" />
                  Research Team
                </h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    This research was conducted by a multidisciplinary team of
                    experts specializing in {research.field.toLowerCase()},
                    bringing together decades of combined experience in research
                    methodology, data analysis, and field expertise.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-4 bg-[#02590F]/5 rounded-lg">
                      <p className="font-semibold text-foreground">
                        Lead Researchers
                      </p>
                      <p className="text-sm text-muted-foreground">
                        5 Principal Investigators
                      </p>
                    </div>
                    <div className="text-center p-4 bg-[#02590F]/5 rounded-lg">
                      <p className="font-semibold text-foreground">
                        Research Associates
                      </p>
                      <p className="text-sm text-muted-foreground">
                        12 Contributing Analysts
                      </p>
                    </div>
                    <div className="text-center p-4 bg-[#02590F]/5 rounded-lg">
                      <p className="font-semibold text-foreground">
                        Expert Consultants
                      </p>
                      <p className="text-sm text-muted-foreground">
                        8 Field Specialists
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Topics */}
              {research.relatedTopics && (
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Related Research Areas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {research.relatedTopics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#02590F]/10 text-[#02590F] rounded-full text-sm font-medium hover:bg-[#02590F]/20 transition cursor-pointer"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Citation */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#02590F]" />
                  Citation & Access
                </h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      How to Cite This Research
                    </h4>
                    <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground">
                      Research Team ({research.year}). {research.title}. Journal
                      of {research.field} Studies, Vol. X, Issue Y.
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">
                      Access Options
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#02590F] text-white rounded-lg hover:bg-[#02590F]/90 transition">
                        <FileText className="w-4 h-4" />
                        Download Full Paper
                      </button>
                      <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition">
                        Export Citation
                      </button>
                      <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition">
                        Save to Library
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limitations & Future Research */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Limitations & Future Research
                </h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Research Limitations
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Scope limited to specific time periods and geographic
                          regions
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Reliance on available historical sources with
                          potential gaps
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Interpretation challenges with ancient and medieval
                          records
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">
                      Future Research Directions
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#02590F] flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Extended analysis incorporating additional regions and
                          time periods
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#02590F] flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Integration of emerging archaeological discoveries and
                          technologies
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#02590F] flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">
                          Comparative studies with contemporary geopolitical
                          developments
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#02590F]/10 to-transparent border-t border-border">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Interested in More Research?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our complete collection of academic research on geography,
            history, and geopolitics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#02590F] text-white rounded-lg font-semibold hover:bg-[#02590F]/90 transition"
            >
              View All Research
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted/50 transition">
              Contact Research Team
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
