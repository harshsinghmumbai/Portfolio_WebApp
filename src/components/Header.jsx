"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import Nav from "./Nav";

export const Header = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Start with navbar visible

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Show navbar when at the top
      } else {
        if (direction < 0) {
          setVisible(true); // Show navbar when scrolling up
        } else {
          setVisible(false); // Hide navbar when scrolling down
        }
      }
    }
  });

  return (
    <div className="flex justify-center items-center bg-[#fef9f5]">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex w-full fixed top-0 rounded-b-xl z-50 justify-between items-center p-4 sm:p-3 px-7 sm:px-9 backdrop-blur-sm border border-b-[#f26b56] bg-white/20 dark:bg-black/20 max-w-[1700px] m-auto",
            className
          )}
        >
          <Logo />
          <div className="flex justify-center items-center space-x-4 sm:space-x-7">
            <Nav
              containerStyles="hidden lg:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggle />
            <div className="lg:hidden">
              <MobileNavbar />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
