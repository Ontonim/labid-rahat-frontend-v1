import Background from "@/components/common/Background";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  source: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How Geography Shapes Global Politics",
    excerpt:
      "A deep exploration of how mountains, rivers, and borders influence international relations and power dynamics.",
    date: "OCT 15 2025",
    category: "Geopolitics",
    source: "World Affairs",
    image:
      "https://www.natstrat.org/upload/news/1680100562PS_Raghavan_(2nd_pic)_800x400.jpg",
  },
  {
    id: "2",
    title: "The Rise and Fall of Ancient Civilizations",
    excerpt:
      "Understanding how geography, culture, and resources contributed to the success and collapse of ancient empires.",
    date: "OCT 12 2025",
    category: "History",
    source: "History Chronicles",
    image:
      "https://www.gamespot.com/a/uploads/screen_kubrick/gamespot/images/2006/156/reviews/737707-926516_20060606_001.jpg",
  },
  {
    id: "3",
    title: "Strategic Importance of the Indian Ocean",
    excerpt:
      "Why this ocean is one of the most contested regions in modern geopolitics and global trade.",
    date: "OCT 10 2025",
    category: "Geography",
    source: "Geo Insights",
    image:
      "https://carnegie-production-assets.s3.amazonaws.com/static/media/images/list-IndianOceanMap_8b9ac827-6ecf-4b3b-b1b0-31f380586e12-3.jpg",
  },
  {
    id: "4",
    title: "How Borders Are Created and Disputed",
    excerpt:
      "A look into the historical events and geographic factors that shape national boundaries and conflicts.",
    date: "OCT 8 2025",
    category: "Geopolitics",
    source: "Boundary Watch",
    image:
      "https://interactive.aljazeera.com/aje/2020/mapping-india-and-china-disputed-borders/jpg/main.jpg",
  },
  {
    id: "5",
    title: "Silk Road: The Ancient Global Trade Network",
    excerpt:
      "Exploring how the Silk Road connected continents and influenced culture, economy, and politics for centuries.",
    date: "OCT 5 2025",
    category: "History",
    source: "Global History Weekly",
    image:
      "https://cdn.kastatic.org/ka-perseus-images/6d874ee12f4b6e3d05c84d0e2474e7b632706d8e.jpg",
  },
  {
    id: "6",
    title: "Why Geography Matters in Modern Warfare",
    excerpt:
      "Analyzing how terrain, climate, and location affect military strategy and defense planning.",
    date: "OCT 1 2025",
    category: "Geostrategy",
    source: "Defense Insights",
    image: "https://ichef.bbci.co.uk/images/ic/976x549/p09m6v18.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden">
      <Background />
      <div className="container mx-auto my-8 lg:my-36 relative z-10 px-4">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Explore Knowledge
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Stay informed with insightful articles, emerging trends, and
                expert opinions on technology, geopolitics, and global affairs
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div>
            {BLOG_POSTS.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-[#02590F] transition duration-300 cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        width={500}
                        height={500}
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-[#02590F] bg-[#02590F]/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#02590F] transition">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-xs font-medium text-muted-foreground">
                          {post.source}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#02590F] group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No articles found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
