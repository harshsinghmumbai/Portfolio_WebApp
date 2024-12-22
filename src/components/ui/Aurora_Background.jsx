"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main className="w-[95%] md:w-[97%] lg:w-[98%] h-full m-auto">
      <div
        className={cn(
          "relative bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div>
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,#ff0000_0%,#ff0000_7%,var(--transparent)_10%,var(--transparent)_12%,#ff0000_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,#8b0000_0%,#8b0000_7%,var(--transparent)_10%,var(--transparent)_12%,#8b0000_16%)]
              [--aurora:repeating-linear-gradient(100deg,#ff4500_10%,#ff6347_15%,#ff7f50_20%,#fa8072_25%,#ff4500_30%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px] invert dark:invert-0
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
