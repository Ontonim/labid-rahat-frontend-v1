import Link from "next/link";
import { ArrowRight, Globe, BookOpen, Target, Award } from "lucide-react";
import Background from "@/components/common/Background";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden">
      <Background />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-secondary text-white text-sm font-medium">
                  Welcome to My World
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                Labid Rahat: Making Geopolitics Accessible
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a Bangladeshi content creator dedicated to explaining
                complex global issues in simple, visual ways. Through maps,
                real-world examples, and in-depth research, I help students and
                curious minds understand how the world works.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://www.youtube.com/@labidrahat"
                  target="_blank"
                  className="px-6 py-3 bg-red-600 text-[#02590F]-foreground rounded-lg hover:bg-red-500 transition-colors font-medium flex items-center gap-2 text-white"
                >
                  Watch on YouTube <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div
              className="relative h-96 rounded-2xl overflow-hidden border border-[#02590F]/20 flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://yt3.googleusercontent.com/DDHFbjXBlnAjx69uNCVuQkowXZv75y-XNzOe0PC9K_Ko564ExV4csuk09fBmhEflfotLVPKGAQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')",
              }}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#02590F]/40 to-[#02590F]/10" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-7 lg:py-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">My Mission</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To democratize geopolitical knowledge and make complex
                international relations understandable for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission Card 1 */}
              <div className="p-8 rounded-xl bg-card border border-border/40 hover:border-[#02590F]/40 transition-all hover:shadow-lg hover:shadow-[#02590F]/10">
                <div className="w-12 h-12 rounded-lg bg-[#02590F]/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#02590F]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Educational Content</h3>
                <p className="text-muted-foreground">
                  Creating high-quality videos that break down geography,
                  geopolitics, world affairs, and history into digestible,
                  engaging content.
                </p>
              </div>

              {/* Mission Card 2 */}
              <div className="p-8 rounded-xl bg-card border border-border/40 hover:border-[#02590F]/40 transition-all hover:shadow-lg hover:shadow-[#02590F]/10">
                <div className="w-12 h-12 rounded-lg bg-[#02590F]/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#02590F]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Visual Storytelling</h3>
                <p className="text-muted-foreground">
                  Using maps, animations, and real-world examples to make
                  complex geopolitical concepts clear and memorable.
                </p>
              </div>

              {/* Mission Card 3 */}
              <div className="p-8 rounded-xl bg-card border border-border/40 hover:border-[#02590F]/40 transition-all hover:shadow-lg hover:shadow-[#02590F]/10">
                <div className="w-12 h-12 rounded-lg bg-[#02590F]/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#02590F]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unbiased Analysis</h3>
                <p className="text-muted-foreground">
                  Providing balanced, research-backed perspectives on
                  international relations without political bias or agenda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="container mx-auto px-4 py-7 lg:py-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Areas of Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep knowledge across multiple disciplines to provide
                comprehensive global insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Geography & Geopolitics",
                  desc: "Understanding territorial dynamics, borders, and regional conflicts",
                },
                {
                  title: "International Relations",
                  desc: "Analyzing diplomatic relations, alliances, and global power structures",
                },
                {
                  title: "World History",
                  desc: "Connecting historical events to contemporary global issues",
                },
                {
                  title: "World Affairs",
                  desc: "Covering current events and their geopolitical implications",
                },
                {
                  title: "Strategic Analysis",
                  desc: "Examining military, economic, and political strategies of nations",
                },
                {
                  title: "Research & Data",
                  desc: "Using credible sources and data visualization for accuracy",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-card border border-border/40 hover:border-[#02590F]/40 transition-all"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="container mx-auto px-4 py-7 lg:py-20">
          <div className="bg-gradient-to-r from-[#02590F]/10 to-[#02590F]/5 border border-[#02590F]/20 rounded-2xl py-12 px-4 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Trust My Content?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Rigorous research backed by credible sources and academic materials",
                    "Visual explanations using maps and real-world examples for clarity",
                    "Balanced perspective on complex geopolitical issues",
                    "Consistent dedication to accuracy and factual information",
                    "Engaging storytelling that makes learning enjoyable",
                    "Community-focused approach valuing viewer feedback and questions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Award className="w-5 h-5 text-[#02590F] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-card border border-border/40">
                  <p className="text-4xl font-bold text-[#02590F] mb-2">
                    500K+
                  </p>
                  <p className="text-muted-foreground">
                    Subscribers who trust my analysis
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border/40">
                  <p className="text-4xl font-bold text-[#02590F] mb-2">
                    1000+
                  </p>
                  <p className="text-muted-foreground">
                    Hours of educational content
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border/40">
                  <p className="text-4xl font-bold text-[#02590F] mb-2">50M+</p>
                  <p className="text-muted-foreground">
                    Total views across all videos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-7 lg:py-20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join the Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subscribe to stay updated with the latest geopolitical insights
              and educational content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.youtube.com/@labidrahat"
                target="_blank"
                className="px-8 py-3 bg-red-600 text-[#02590F]-foreground rounded-lg hover:bg-red-500 text-white transition-colors font-medium "
              >
                Subscribe on YouTube
              </Link>
              <Link
                href="/"
                className="px-8 py-3 border border-[#02590F] text-[#02590F] rounded-lg hover:bg-[#02590F]/5 transition-colors font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
