"use client";
import React, { useState, useEffect } from "react";

//Component//
import Logo from "./Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <>
      <header
        className={`${
          header
            ? "py-4 bg-white/20 dark:bg-black/20 sticky top-0 backdrop-blur-md shadow-lg"
            : "py-6 dark:bg-transparent"
        } sticky top-0 z-30 transition-all ${
          pathname === "/" && "bg-[#fef9f5]"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center gap-x-6">
              {/* nav */}
              <Nav
                containerStyles="hidden lg:flex gap-x-8 items-center"
                linkStyles="relative hover:text-primary transition-all"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
              <ThemeToggle />
              {/* mobile nav */}
              <div className="lg:hidden">
                <MobileNavbar />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
