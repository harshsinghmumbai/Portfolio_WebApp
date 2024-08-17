"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { GithubIcon, Link2Icon, LinkedinIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectCard = ({ project }) => {
  const { image, category, name, description, link, linkedin, github, video } =
    project;
  const describe = description.substring(0, 60);
  return (
    <Card className="group dark:border dark:border-gray-600 overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex justify-center items-center bg-tertiary dark:bg-secondary/40 md:bg-work_project_bg_light md:dark:bg-work_project_bg_dark lg:bg-[110%] lg:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl w-full h-full object-contain p-8 rounded-xl"
            src={image}
            width={247}
            height={250}
            alt="Project Image"
            priority
          />
          {/*click btn Link */}
          <div className="flex gap-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={link}
                    target="_blank"
                    className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                  >
                    <Link2Icon className="text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="border-2 border-[#fe6e58]">
                  <p className="font-bold">Project Live Link</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={github}
                    target="_blank"
                    className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                  >
                    <GithubIcon className="text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="border-2 border-[#fe6e58]">
                  <p className="font-bold">Github Repo Link</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={linkedin}
                    target="_blank"
                    className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                  >
                    <LinkedinIcon className="text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="border-2 border-[#fe6e58]">
                  <p className="font-bold">LinkedIn Post Link</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {category}
        </Badge>
        <h4 className="h4 mb-1">{name}</h4>
        <div className="text-muted-foreground text-lg">
          {description.length <= 60 ? description : `${describe}...`}
          <Dialog>
            <DialogTrigger asChild>
              <Badge
                size="sm"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer ml-2"
              >
                Read More
              </Badge>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  <DialogTitle className="text-center text-lg md:text-xl">
                    {name}
                  </DialogTitle>
                </DialogTitle>
                <DialogDescription>
                  <video
                    src={video}
                    width="600px"
                    controls
                    className="rounded-lg"
                  ></video>
                  <p className="mt-3 text-base">{description}</p>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-row space-x-1">
                <Link href={link} target="_blank" className="cursor-pointer">
                  <Badge className="w-fit h-fit">Project live</Badge>
                </Link>
                <Link href={github} target="_blank" className="cursor-pointer">
                  <Badge className="w-fit h-fit">Github Repo</Badge>
                </Link>
                <Link
                  href={linkedin}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Badge className="w-fit h-fit">LinkedIn Post</Badge>
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
