"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiArrowDownSLine,
  RiGitRepositoryFill,
} from "react-icons/ri";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoRepo } from "react-icons/go";
import DevImg from "./DevImg";
import Badge from "./Badge";
import { useEffect, useState } from "react";

const Hero = () => {
  const [repos, setRepos] = useState(0);

  const getRepoData = async () => {
    try {
      const url = `https://api.github.com/users/harshsinghmumbai`;
      const response = await fetch(url);
      const data = await response.json();
      setRepos(data.public_repos);
    } catch (error) {
      console.log("Error during fetching data", error);
    }
  };
  useEffect(() => {
    getRepoData();
  }, []);
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
                Path 🚀& also Computer Engineering Student.
              </p>
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link
                  href={"https://www.linkedin.com/in/harshsinghmumbai/"}
                  target="black"
                >
                  <Button className="rounded-3xl text-base" size="lg">
                    LinkedIn Profile <LinkedinIcon size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link
                  href={"https://github.com/harshsinghmumbai"}
                  target="black"
                >
                  <Button
                    variant="secondary"
                    className="rounded-3xl text-base"
                    size="lg"
                  >
                    Github Profile <GithubIcon size={18} className="ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
            {/* image */}
            <div className="hidden xl:flex lg:flex relative">
              <Badge
                containerStyles="absolute top-[29%] xl:-left-[5rem] lg:-left-[3.7rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={2}
                badgeText="Month of Internship"
              />
              <Badge
                containerStyles="absolute top-[80%] -left-[1rem] "
                icon={<RiGitRepositoryFill className="text-[#fe6e58]" />}
                endCountNum={repos}
                badgeText="Github Repository"
              />
              <Badge
                containerStyles="absolute top-[55%] -right-8"
                icon={<GoRepo />}
                endCountNum={1}
                badgeText="Full Stack Projects"
              />
              <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="cursor-pointer">
                    <DevImg
                      containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                      imgSrc="/assets/hero/developer.png"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/assets/hero/developer.png" />
                      <AvatarFallback>HS</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        This is Dummy Image
                      </h4>
                      <p className="text-sm">
                        Dummy Image was created to enhance look of WebApp
                        landing pages & make good first impression of My
                        portfolio WebApp
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
