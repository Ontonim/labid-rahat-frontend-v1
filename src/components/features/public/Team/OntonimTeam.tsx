import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DevelopedBy() {
  return (
    <section className="w-full py-16 px-4 border-t border-border bg-gradient-to-b from-[#1a2a2c] via-[#2c4144] to-[#1a2a2c]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src={"https://i.ibb.co/BHMGGW7z/ontonim.png"}
                height={500}
                width={500}
                alt="Ontonim"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left flex-1 space-y-4">
            <p className="text-sm text-gray-300 mb-2">Website Developed By</p>
            <h2 className="ml-3 md:ml-4 text-2xl md:text-4xl font-light tracking-widest text-white">
              ONTO
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#02e2cc] to-[#d4af37]">
                NIM
              </span>
            </h2>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional web development and digital solutions for content
              creators and businesses worldwide.
            </p>
            <Link
              href="https://ontonim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-[#02e2cc] to-[#d4af37] text-[#1a2a2c] [text-shadow:0_1px_1px_rgba(0,0,0,0.2)]  rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation cursor-pointer"
              style={{
                color: "#1a2a2c",
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Ontonim
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
