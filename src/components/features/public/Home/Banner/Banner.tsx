"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Globe, Sparkles } from "lucide-react";
import labid from "../../../../../../public/images/labid_rahat.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden">
      {/* Canvas only on desktop */}
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-20"
          style={{ mixBlendMode: "multiply" }}
        />
      )}

      {/* Static gradient background for mobile - Green theme */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-radial from-[#02590F]/5 via-[#02590F]/2 to-transparent" />
      )}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(rgba(2, 89, 15, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(2, 89, 15, 0.3) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Simplified vertical lines for mobile - Green theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#02590F]/20 to-transparent opacity-50 md:opacity-100 md:animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#02590F]/20 to-transparent opacity-50 md:opacity-100 md:animate-pulse animation-delay-200" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-[#02590F]/20 to-transparent opacity-50 md:opacity-100 md:animate-pulse animation-delay-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-12 lg:py-0 mt-16 lg:mt-48">
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3 text-[#02590F] animate-fade-in">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#02590F] to-transparent" />
              <Globe className="w-5 h-5 animate-pulse" />
              <Sparkles className="w-4 h-4 animate-pulse animation-delay-200" />
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#02590F] to-transparent" />
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#02590F] tracking-tight text-balance animate-fade-in-up leading-tight">
                Labid Rahat
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-[#02590F] via-[#03701A] to-transparent rounded-full animate-fade-in-up animation-delay-200" />
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-[#03701A] font-light tracking-wide animate-fade-in-up animation-delay-300">
              World History Storyteller
            </p>

            <div className="backdrop-blur-md bg-[#02590F]/5 border border-[#02590F]/20 rounded-2xl p-6 shadow-xl shadow-[#02590F]/10 animate-fade-in-up animation-delay-400">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed text-pretty">
                Exploring the depths of human civilization through compelling
                narratives that bring the past to life with cutting-edge
                storytelling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
              <Link
                target="_blank"
                href="https://www.youtube.com/@LabidRahat/videos"
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 w-full text-white font-medium px-8 py-6 text-base md:text-lg rounded-xl shadow-lg shadow-[#02590F]/30 hover:shadow-[#03701A]/40 transition-all duration-300 hover:scale-105 border border-[#02590F]/30 overflow-hidden group cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Play className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Watch Latest Video</span>
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="relative border-2 border-[#02590F] text-[#02590F] hover:bg-[#02590F] hover:text-white font-medium px-8 py-6 text-base md:text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-white hover:shadow-lg hover:shadow-[#02590F]/20 overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#02590F]/0 via-[#02590F]/10 to-[#02590F]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <BookOpen className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Explore Archives</span>
              </Button>
            </div>
          </div>

          <div className="items-center justify-center order-1 lg:order-2 animate-fade-in animation-delay-200 px-4 hidden lg:flex">
            <div className="relative group">
              {/* Simplified blur effect for mobile - Green theme */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#02590F] via-[#03701A] to-[#04A827] rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse will-change-transform" />

              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#02590F] rounded-tl-3xl" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#03701A] rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#03701A] rounded-bl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#04A827] rounded-br-3xl" />

              <div className="relative backdrop-blur-sm bg-white border-2 border-[#02590F]/30 rounded-3xl p-2 overflow-hidden shadow-xl">
                <Image
                  src={labid}
                  alt="Labid Rahat - World History Storyteller"
                  className="relative z-10 w-full h-auto rounded-2xl object-cover aspect-[3/4] max-w-md"
                  priority
                  quality={85}
                />

                {/* Simplified hover effect for mobile - Green theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02590F]/10 to-transparent translate-y-[-100%] md:group-hover:translate-y-[100%] transition-transform duration-3000 pointer-events-none" />
              </div>

              {/* Simplified badges for mobile - Green theme */}
              <div className="absolute top-1/4 -right-8 backdrop-blur-md bg-white border border-[#02590F] rounded-lg px-3 py-2 text-xs text-[#02590F] font-mono shadow-lg shadow-[#02590F]/20 animate-float will-change-transform">
                <span className="text-[#02590F]">●</span> LIVE
              </div>
              <div className="absolute bottom-1/3 -left-8 backdrop-blur-md bg-white border border-[#03701A] rounded-lg px-3 py-2 text-xs text-[#03701A] font-mono shadow-lg shadow-[#03701A]/20 animate-float animation-delay-400 will-change-transform">
                <span className="text-[#03701A]">▲</span> 500K +
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-[#02590F] rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/50">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#02590F] to-[#03701A] rounded-full animate-pulse shadow-lg shadow-[#02590F]/50" />
        </div>
      </div>
    </div>
  );
}
