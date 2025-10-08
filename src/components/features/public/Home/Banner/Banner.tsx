"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Globe, Sparkles } from "lucide-react";
import labid from "../../../../../../public/images/labid_rahat.jpg";
import Image from "next/image";

export default function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      hue: number;
    }[] = [];
    const numParticles = 80;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        hue: Math.random() * 60 + 180,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(
              0,
              `hsla(${particles[i].hue}, 80%, 60%, ${
                (1 - distance / 150) * 0.3
              })`
            );
            gradient.addColorStop(
              1,
              `hsla(${particles[j].hue}, 80%, 60%, ${
                (1 - distance / 150) * 0.3
              })`
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 60%, 0.4)`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, 1)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 md:opacity-0"
        style={{ mixBlendMode: "screen" }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse animation-delay-200" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-pulse animation-delay-400" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-12 lg:py-0 mt-16 lg:mt-48">
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3 text-cyan-400 animate-fade-in">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <Globe className="w-5 h-5 animate-pulse" />
              <Sparkles className="w-4 h-4 animate-pulse animation-delay-200" />
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300 tracking-tight text-balance animate-fade-in-up leading-tight">
                Labid Rahat
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent rounded-full animate-fade-in-up animation-delay-200" />
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-light tracking-wide animate-fade-in-up animation-delay-300">
              World History Storyteller
            </p>

            <div className="backdrop-blur-md bg-white/5 border border-cyan-400/20 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10 animate-fade-in-up animation-delay-400">
              <p className="text-base md:text-lg text-slate-200 leading-relaxed text-pretty">
                Exploring the depths of human civilization through compelling
                narratives that bring the past to life with cutting-edge
                storytelling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-8 py-6 text-base md:text-lg rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/60 transition-all duration-300 hover:scale-105 border border-cyan-400/30 overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Play className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Watch Latest Video</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="relative border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 font-medium px-8 py-6 text-base md:text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent hover:shadow-lg hover:shadow-cyan-400/30 hover:text-white overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <BookOpen className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Explore Archives</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2 animate-fade-in animation-delay-200 px-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />

              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-blue-400 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-blue-400 rounded-bl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-indigo-400 rounded-br-3xl" />

              <div className="relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-cyan-400/30 rounded-3xl p-2 overflow-hidden">
                <Image
                  src={labid}
                  alt="Labid Rahat - World History Storyteller"
                  className="relative z-10 w-full h-auto rounded-2xl object-cover aspect-[3/4] max-w-md"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-3000 pointer-events-none" />
              </div>

              <div className="absolute top-1/4 -right-8 backdrop-blur-md bg-cyan-500/20 border border-cyan-400/50 rounded-lg px-3 py-2 text-xs text-cyan-300 font-mono shadow-lg shadow-cyan-500/30 animate-float">
                <span className="text-cyan-400">●</span> LIVE
              </div>
              <div className="absolute bottom-1/3 -left-8 backdrop-blur-md bg-blue-500/20 border border-blue-400/50 rounded-lg px-3 py-2 text-xs text-blue-300 font-mono shadow-lg shadow-blue-500/30 animate-float animation-delay-400">
                <span className="text-blue-400">▲</span> 500K +
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-slate-900/30">
          <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
        </div>
      </div>
    </div>
  );
}
