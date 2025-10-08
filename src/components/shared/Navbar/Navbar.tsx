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
  ArrowRight,
  ChevronRight,
  House,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";
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
  const isMobile = useMobile();
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg border-gray-200/50"
          : "bg-white/95 backdrop-blur-sm border-gray-100"
      )}
    >
      <div className="px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
              <Image
                src={logo}
                alt="Labid Rahat - ইতিহাসবিদ"
                height={48}
                width={48}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary group-hover:text-gray-900 transition-colors duration-300">
                Labid Rahat
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-3">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-base font-medium transition-all duration-300 hover:bg-[#FEF3DF] hover:text-primary px-4 py-2 h-auto flex items-center gap-2 cursor-pointer",
                    pathname === item.href
                      ? "text-primary bg-[#FEF3DF] shadow-sm"
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  {item.icon}
                  {item.title}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link
                href="https://youtube.com/@labidrahat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="h-4 w-4 mr-2" />
                Subscribe Now
              </Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="h-12 w-12 hover:bg-blue-50"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] sm:w-[380px] bg-white shadow-2xl border-l border-gray-200 px-2"
            >
              <div className="flex flex-col space-y-1 pt-8">
                <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-100">
                  <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-blue-100">
                    <Image
                      src={logo}
                      alt="Labid Rahat"
                      height={48}
                      width={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      Labid Rahat
                    </div>
                  </div>
                </div>

                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-base font-medium transition-all duration-300 hover:bg-[#FEF3DF] hover:text-black px-4 py-3 h-auto flex items-center gap-3 my-1",
                        pathname === item.href
                          ? "text-black bg-[#FEF3DF]"
                          : "text-gray-700"
                      )}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="flex items-center gap-3">
                          {item.icon}
                          {item.title}
                        </span>
                        <span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-700" />
                        </span>
                      </div>
                    </Button>
                  </Link>
                ))}

                <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 h-auto shadow-lg"
                    asChild
                  >
                    <Link
                      href="https://youtube.com/@labidrahat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Subscribe Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
