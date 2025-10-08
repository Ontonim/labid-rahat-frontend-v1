"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Play,
  BookOpen,
  Users,
  Calendar,
  Info,
  Contact,
  ChevronRight,
  Mouse as House,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../../../public/logo/logo.png";

const navigationItems = [
  { title: "Home", href: "/", icon: <House className="h-4 w-4" /> },
  { title: "About", href: "/about", icon: <Info className="h-4 w-4" /> },
  {
    title: "Video Series",
    href: "/series",
    icon: <Play className="h-4 w-4" />,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Events & Community",
    href: "/events",
    icon: <Users className="h-4 w-4" />,
  },
  { title: "Contact", href: "/contact", icon: <Contact className="h-4 w-4" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
          isScrolled ? "navbar-scrolled" : ""
        )}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

        <div className="navbar-glass">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <Link
                href="/"
                className="flex items-center space-x-3 group relative z-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/30 transition-all duration-500" />
                  <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-cyan-400/50 group-hover:ring-cyan-400 transition-all duration-500 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      <Image src={logo} alt="Labid Rahat" layout="fill" objectFit="cover" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-cyan-200 transition-all duration-500">
                    Labid Rahat
                  </span>
                  <span className="text-xs text-cyan-400/60 font-light tracking-wider">
                    World History Storyteller
                  </span>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <button
                      className={cn(
                        "nav-item group relative px-4 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-2 rounded-lg overflow-hidden cursor-pointer",
                        pathname === item.href
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-cyan-400"
                      )}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                          pathname === item.href && "scale-x-100"
                        )}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </span>
                    </button>
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  href="https://youtube.com/@labidrahat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button group relative"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 rounded-lg font-semibold text-white border border-red-400/30 group-hover:border-red-400/50 transition-all duration-300">
                    <Play className="h-4 w-4" />
                    Subscribe Now
                  </span>
                </Link>
              </div>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <button
                    className="relative h-12 w-12 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-slate-900/70 transition-all duration-300"
                    aria-label="Menu"
                  >
                    <Menu className="h-6 w-6 text-cyan-400" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[320px] sm:w-[380px] bg-slate-950/95 backdrop-blur-xl border-l border-cyan-400/20 shadow-2xl shadow-cyan-500/10 p-4"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-cyan-400/20">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg" />
                          <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-cyan-400/50 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              <Image src={logo} alt="Labid Rahat" layout="fill" objectFit="cover" />
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Labid Rahat
                          </div>
                          <div className="text-xs text-cyan-400/60">
                            World History Storyteller
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="h-10 w-10 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900/50 hover:border-cyan-400/50 hover:bg-slate-900/70 transition-all duration-300"
                      >
                        <X className="h-5 w-5 text-cyan-400" />
                      </button>
                    </div>

                    <div className="flex-1 space-y-2 overflow-y-auto">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          <button
                            className={cn(
                              "w-full group relative px-4 py-3.5 rounded-lg text-left font-medium transition-all duration-300 flex items-center justify-between overflow-hidden border my-4",
                              pathname === item.href
                                ? "text-cyan-400 bg-cyan-400/10 border-cyan-400/30"
                                : "text-gray-300 hover:text-cyan-400 bg-slate-900/30 border-cyan-400/10 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                            )}
                          >
                            <span className="flex items-center gap-3 relative z-10">
                              {item.icon}
                              {item.title}
                            </span>
                            <ChevronRight
                              className={cn(
                                "h-4 w-4 transition-all duration-300",
                                pathname === item.href
                                  ? "text-cyan-400"
                                  : "text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1"
                              )}
                            />
                          </button>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-6 mt-6 border-t border-cyan-400/20">
                      <Link
                        href="https://youtube.com/@labidrahat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        onClick={() => setIsOpen(false)}
                      >
                        <button className="w-full relative group">
                          <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                          <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 px-6 py-3.5 rounded-lg font-semibold text-white border border-red-400/30 group-hover:border-red-400/50 transition-all duration-300">
                            <Play className="h-4 w-4" />
                            Subscribe Now
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </header>
    </>
  );
}
