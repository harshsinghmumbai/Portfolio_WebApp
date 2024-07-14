"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <>
      <section className=" pb-20 xl:py-24 h-fit xl:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-8">
            {/* text */}
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm md:text-base lg:text-lg capitalize font-bold mb-4 text-primary tracking-wider">
                Full Stack Web Developer
              </div>
              <h1 className="h1 mb-4 capitalize">
                Hello, my name is Harsh Singh
              </h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                Passionate to be a Full-Stack Web developer 👨‍💻 using MERN Stack
                Path 🚀|| Computer Engineering Student
              </p>
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link
                  href={"https://www.linkedin.com/in/harshsinghmumbai/"}
                  target="black"
                >
                  <Button className="">
                    LinkedIn Profile <LinkedinIcon size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link
                  href={"https://github.com/harshsinghmumbai"}
                  target="black"
                >
                  <Button variant="secondary" className="">
                    Github Profile <GithubIcon size={18} className="ml-3" />
                  </Button>
                </Link>
              </div>
              {/* <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              /> */}
            </div>
            {/* image */}
            <div className="hidden xl:flex lg:flex relative">
              <Badge
                containerStyles="absolute top-[24%] xl:-left-[5rem] lg:-left-[4rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={3}
                badgeText="Years Of Experience"
              />
              <Badge
                containerStyles="absolute top-[80%] -left-[1rem]"
                icon={<RiTodoFill />}
                endCountNum={6}
                endCountText="k"
                badgeText="Finished Projects"
              />
              <Badge
                containerStyles="absolute top-[55%] -right-8"
                icon={<RiTeamFill />}
                endCountNum={9}
                endCountText="k"
                badgeText="Happy Clients"
              />
              <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/assets/hero/developer.png"
              />
            </div>
          </div>
          {/* icon */}
          <div className="hidden md:flex absolute left-2/4 bottom-0 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
