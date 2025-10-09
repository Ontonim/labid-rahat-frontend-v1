// "use client";

// import { Play, Eye, Clock } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card } from "@/components/ui/card";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import rome from "../../../../../../public/images/ancient-rome-colosseum-empire.webp";
// import ww2 from "../../../../../../public/images/world-war-2-historical-battle.avif";
// import egypt from "../../../../../../public/images/ancient-egypt-pyramids-pharaoh.jpg";
// import silkroad from "../../../../../../public/images/silk-road-ancient-trade-route.avif";
// import medieval from "../../../../../../public/images/medieval-castle-knights-europe.jpg";
// import exploration from "../../../../../../public/images/age-of-exploration-ships-discovery.avif";
// import Image from "next/image";

// interface Video {
//   id: string;
//   title: string;
//   thumbnail: string;
//   views: string;
//   duration: string;
//   uploadDate: string;
// }

// const videos: Video[] = [
//   {
//     id: "1",
//     title: "The Rise and Fall of the Roman Empire: A Complete History",
//     thumbnail: rome.src,
//     views: "2.5M",
//     duration: "45:32",
//     uploadDate: "2 days ago",
//   },
//   {
//     id: "2",
//     title: "World War II: The Untold Stories of Heroes and Battles",
//     thumbnail: ww2.src,
//     views: "1.8M",
//     duration: "38:15",
//     uploadDate: "5 days ago",
//   },
//   {
//     id: "3",
//     title: "Ancient Egypt: Secrets of the Pharaohs and Pyramids",
//     thumbnail: egypt.src,
//     views: "3.2M",
//     duration: "52:48",
//     uploadDate: "1 week ago",
//   },
//   {
//     id: "4",
//     title: "The Silk Road: Trade Routes That Changed the World",
//     thumbnail: silkroad.src,
//     views: "1.5M",
//     duration: "41:20",
//     uploadDate: "2 weeks ago",
//   },
//   {
//     id: "5",
//     title: "Medieval Europe: Knights, Castles, and Crusades",
//     thumbnail: medieval.src,
//     views: "2.1M",
//     duration: "47:55",
//     uploadDate: "3 weeks ago",
//   },
//   {
//     id: "6",
//     title: "The Age of Exploration: Discovering New Worlds",
//     thumbnail: exploration.src,
//     views: "1.9M",
//     duration: "43:12",
//     uploadDate: "1 month ago",
//   },
// ];

// export default function LatestVideo() {
//   return (
//     <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
//           `,
//           backgroundSize: "50px 50px",
//         }}
//       />

//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

//       <div className="relative z-10 container mx-auto px-4">
//         <div className="mb-12 md:mb-16 text-center space-y-4">
//           <div className="flex items-center justify-center gap-3 text-cyan-400 animate-fade-in">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
//             <Play className="w-6 h-6 animate-pulse" />
//             <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
//           </div>

//           <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300 tracking-tight animate-fade-in-up">
//             Latest Videos
//           </h2>

//           <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
//             Explore the most recent journeys through history
//           </p>
//         </div>

//         <div className="relative">
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent className="-ml-4 md:-ml-6">
//               {videos.map((video, index) => (
//                 <CarouselItem
//                   key={video.id}
//                   className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
//                 >
//                   <div
//                     className="animate-fade-in-up"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm hover:from-slate-800/60 hover:to-slate-900/60 transition-all duration-500 hover:scale-[1.02] cursor-pointer p-0 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20">
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
//                       <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md" />

//                       <div className="relative z-10">
//                         <div className="relative overflow-hidden rounded-t-xl">
//                           <AspectRatio ratio={16 / 9}>
//                             <Image
//                               width={640}
//                               height={360}
//                               src={video.thumbnail || "/placeholder.svg"}
//                               alt={video.title}
//                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                             />

//                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

//                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//                               <div className="relative">
//                                 <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
//                                 <div className="relative bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-4 shadow-2xl shadow-cyan-500/50 transform group-hover:scale-110 transition-transform duration-300">
//                                   <Play className="w-8 h-8 text-white fill-white" />
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="absolute bottom-3 right-3 backdrop-blur-md bg-slate-900/80 border border-cyan-400/30 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
//                               <Clock className="w-3.5 h-3.5 text-cyan-400" />
//                               <span className="text-xs font-medium text-white">
//                                 {video.duration}
//                               </span>
//                             </div>

//                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-2000 pointer-events-none" />
//                           </AspectRatio>
//                         </div>

//                         <div className="p-5 space-y-3">
//                           <h3 className="font-semibold text-base md:text-lg text-white leading-snug line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300 text-balance">
//                             {video.title}
//                           </h3>

//                           <div className="flex items-center justify-between text-sm">
//                             <div className="flex items-center gap-2 text-slate-400">
//                               <Eye className="w-4 h-4 text-cyan-400" />
//                               <span className="font-medium text-cyan-300">
//                                 {video.views}
//                               </span>
//                               <span>views</span>
//                             </div>
//                             <span className="text-slate-500 text-xs">
//                               {video.uploadDate}
//                             </span>
//                           </div>

//                           <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-700 rounded-full" />
//                         </div>
//                       </div>

//                       <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-cyan-400/0 group-hover:border-cyan-400/60 rounded-tl-lg transition-all duration-500" />
//                       <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-cyan-400/0 group-hover:border-cyan-400/60 rounded-tr-lg transition-all duration-500" />
//                       <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-blue-400/0 group-hover:border-blue-400/60 rounded-bl-lg transition-all duration-500" />
//                       <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-blue-400/0 group-hover:border-blue-400/60 rounded-br-lg transition-all duration-500" />
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             <CarouselPrevious className="hidden md:flex -left-6 lg:-left-8 border-2 border-cyan-400/50 bg-slate-900/80 backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-slate-900/80 cursor-pointer" />
//             <CarouselNext className="hidden md:flex -right-6 lg:-right-8 border-2 border-cyan-400/50 bg-slate-900/80 backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-slate-900/80 cursor-pointer" />
//           </Carousel>
//         </div>

//         <div className="mt-12 md:mt-16 text-center animate-fade-in-up animation-delay-600">
//           <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border-2 border-cyan-400/50 rounded-xl text-cyan-300 font-medium hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 overflow-hidden cursor-pointer">
//             <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//             <span className="relative z-10">View All Videos</span>
//             <Play className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Play, Eye, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import rome from "../../../../../../public/images/ancient-rome-colosseum-empire.webp";
import ww2 from "../../../../../../public/images/world-war-2-historical-battle.avif";
import egypt from "../../../../../../public/images/ancient-egypt-pyramids-pharaoh.jpg";
import silkroad from "../../../../../../public/images/silk-road-ancient-trade-route.avif";
import medieval from "../../../../../../public/images/medieval-castle-knights-europe.jpg";
import exploration from "../../../../../../public/images/age-of-exploration-ships-discovery.avif";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  uploadDate: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "The Rise and Fall of the Roman Empire: A Complete History",
    thumbnail: rome.src,
    views: "2.5M",
    duration: "45:32",
    uploadDate: "2 days ago",
  },
  {
    id: "2",
    title: "World War II: The Untold Stories of Heroes and Battles",
    thumbnail: ww2.src,
    views: "1.8M",
    duration: "38:15",
    uploadDate: "5 days ago",
  },
  {
    id: "3",
    title: "Ancient Egypt: Secrets of the Pharaohs and Pyramids",
    thumbnail: egypt.src,
    views: "3.2M",
    duration: "52:48",
    uploadDate: "1 week ago",
  },
  {
    id: "4",
    title: "The Silk Road: Trade Routes That Changed the World",
    thumbnail: silkroad.src,
    views: "1.5M",
    duration: "41:20",
    uploadDate: "2 weeks ago",
  },
  {
    id: "5",
    title: "Medieval Europe: Knights, Castles, and Crusades",
    thumbnail: medieval.src,
    views: "2.1M",
    duration: "47:55",
    uploadDate: "3 weeks ago",
  },
  {
    id: "6",
    title: "The Age of Exploration: Discovering New Worlds",
    thumbnail: exploration.src,
    views: "1.9M",
    duration: "43:12",
    uploadDate: "1 month ago",
  },
];

export default function LatestVideo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Simplified background for mobile */}
      <div
        className={`absolute inset-0 ${isMobile ? 'opacity-5' : 'opacity-10'}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center space-y-3 md:space-y-4">
          <div className="flex items-center justify-center gap-3 text-cyan-400">
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <Play className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300 tracking-tight">
            Latest Videos
          </h2>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            Explore the most recent journeys through history
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: isMobile,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4 lg:-ml-6">
              {videos.map((video, index) => (
                <CarouselItem
                  key={video.id}
                  className="pl-3 md:pl-4 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm hover:from-slate-800/60 hover:to-slate-900/60 transition-all duration-300 md:duration-500 hover:scale-[1.02] cursor-pointer p-0 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 will-change-transform">
                    {/* Simplified gradient border for mobile */}
                    {!isMobile && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    )}
                    <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md" />

                    <div className="relative z-10">
                      <div className="relative overflow-hidden rounded-t-xl">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            width={640}
                            height={360}
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-500 md:duration-700 group-hover:scale-110"
                            loading={index > 2 ? "lazy" : "eager"}
                            quality={isMobile ? 75 : 85}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="relative">
                              {!isMobile && (
                                <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
                              )}
                              <div className="relative bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-3 md:p-4 shadow-2xl shadow-cyan-500/50 transform group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
                              </div>
                            </div>
                          </div>

                          {/* Duration badge */}
                          <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 backdrop-blur-md bg-slate-900/80 border border-cyan-400/30 rounded-lg px-2 md:px-2.5 py-1 flex items-center gap-1 md:gap-1.5 shadow-lg">
                            <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-cyan-400" />
                            <span className="text-xs font-medium text-white">
                              {video.duration}
                            </span>
                          </div>

                          {/* Simplified shimmer effect for mobile */}
                          {!isMobile && (
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-2000 pointer-events-none" />
                          )}
                        </AspectRatio>
                      </div>

                      <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                        <h3 className="font-semibold text-sm md:text-base lg:text-lg text-white leading-snug line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {video.title}
                        </h3>

                        <div className="flex items-center justify-between text-xs md:text-sm">
                          <div className="flex items-center gap-1.5 md:gap-2 text-slate-400">
                            <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
                            <span className="font-medium text-cyan-300">
                              {video.views}
                            </span>
                            <span className="hidden sm:inline">views</span>
                          </div>
                          <span className="text-slate-500 text-[10px] md:text-xs">
                            {video.uploadDate}
                          </span>
                        </div>

                        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 md:duration-700 rounded-full" />
                      </div>
                    </div>

                    {/* Corner decorations - only on desktop */}
                    {!isMobile && (
                      <>
                        <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-cyan-400/0 group-hover:border-cyan-400/60 rounded-tl-lg transition-all duration-500" />
                        <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-cyan-400/0 group-hover:border-cyan-400/60 rounded-tr-lg transition-all duration-500" />
                        <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-blue-400/0 group-hover:border-blue-400/60 rounded-bl-lg transition-all duration-500" />
                        <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-blue-400/0 group-hover:border-blue-400/60 rounded-br-lg transition-all duration-500" />
                      </>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-8 border-2 border-cyan-400/50 bg-slate-900/80 backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-slate-900/80 cursor-pointer" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-8 border-2 border-cyan-400/50 bg-slate-900/80 backdrop-blur-md hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-slate-900/80 cursor-pointer" />
          </Carousel>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border-2 border-cyan-400/50 rounded-xl text-cyan-300 font-medium hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 overflow-hidden cursor-pointer active:scale-100 text-sm md:text-base">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">View All Videos</span>
            <Play className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}