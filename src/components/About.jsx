"use client";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const infoData = [
  {
    icons: <User2 size={20} />,
    text: "Harsh Singh",
  },
  {
    icons: <PhoneCall size={20} />,
    text: "+91 9702343218",
  },
  {
    icons: <MailIcon size={20} />,
    text: "harshrsingh552005@gmail.com",
  },
  {
    icons: <Calendar size={20} />,
    text: "Born 5 May 2005",
  },
  {
    icons: <GraduationCap size={22} />,
    text: "Computer Engineering",
  },
  {
    icons: <HomeIcon size={20} />,
    text: "Arihant City, Kalyan Road",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        company: "SSC",
        role: "Jyoti English High School, Pimpri, Pune",
        years: "Completed March 2020",
      },
      {
        company: "Diploma in Computer Engineering",
        role: "Vidya Prasarak Mandal's Collge Thane",
        years: "August 2020 - July 2024",
      },
      {
        company: "Degree in Computer Engineering",
        role: "B.R Harne College of Engineering",
        years: "2024 - 2026",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Tailwindcss, Shadcn/ui",
      },
      {
        name: "Front-end Development Technologies",
      },
      {
        name: "Javascript, Next.js, Redux-toolkit",
      },
      {
        name: "Back-end Development Technologies",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/assets/about/next.svg",
      },
      {
        imgPath: "/assets/about/github.svg",
      },
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/postman.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="lg:hidden">
        <h2 className="section-title mb-8 xl:mb-16 text-center lg:py-6 xl:py-0 mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row lg:flex-row">
          <Tabs defaultValue="image" className="w-full h-fit mb-26">
            <TabsList className="flex justify-center">
              <div className="space-x-3 pb-8">
                <TabsTrigger
                  value="image"
                  className="w-fit h-fit tracking-wider font-semibold p-0 px-4 text-base cursor-pointer border duration-500"
                >
                  Slider 1
                </TabsTrigger>
                <TabsTrigger
                  value="text"
                  className="w-fit h-fit tracking-wider font-semibold p-0 px-4 text-base cursor-pointer duration-500"
                >
                  Slider 2
                </TabsTrigger>
              </div>
            </TabsList>
            <TabsContent value="image">
              {/* image */}
              <div className="xl:flex lg:flex lg:pr-10 flex-1 relative cursor-pointer m-auto duration-500">
                <DevImg
                  containerStyles="w-[320px] h-[462px] sm-[900px] m-auto bg-no-repeat rounded-3xl relative"
                  imgSrc="/assets/about/harsh_lignt.png"
                />
              </div>
            </TabsContent>
            <TabsContent value="text">
              {/* text */}
              <div className="flex-1">
                <Tabs defaultValue="personal">
                  <TabsList className="w-full flex justify-center space-x-2.5 xl:grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none py-2 border ">
                    <TabsTrigger
                      className="w-[162px] xl:w-auto"
                      value="personal"
                    >
                      Personal Info
                    </TabsTrigger>
                    <TabsTrigger
                      className="w-[162px] xl:w-auto"
                      value="qualifications"
                    >
                      Qualifications
                    </TabsTrigger>
                    <TabsTrigger
                      className="w-[162px] xl:w-auto tracking-normal"
                      value="skills"
                    >
                      Skills
                    </TabsTrigger>
                  </TabsList>
                  <div className="text-lg mt-12 xl:mt-8">
                    <TabsContent value="personal">
                      <div className="text-center xl:text-left">
                        <h3 className="h3 mb-4 capitalize">
                          Project-Based Learning approve in My Full Stack Web
                          Development Journey
                        </h3>
                        <p className="subtitle max-w-xl mx-auto xl:mx-0 capitalize">
                          Focusing on making next.js full stack Project include
                          front,backend,database using multiple Technology like
                          RTK ,Shadcn/ui, Tailwindcss etc
                        </p>
                        {/* icons */}
                        <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 mb-10 lg:flex">
                          {infoData.map((item, index) => {
                            return (
                              <div
                                className="flex items-center gap-x-2 md:gap-x-4 mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="text-primary">{item.icons}</div>
                                <div>{item.text}</div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex flex-col gap-y-2">
                          <div className="text-primary">Language Skill</div>
                          <div className="border-b border-border"></div>
                          <div>English & Hindi</div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="qualifications">
                      <div>
                        <h3 className="h3 mb-8 text-center tracking-wider">
                          My Educational Journey
                          <p className="border-b border-border mb-4 mt-3"></p>
                        </h3>
                        <div>
                          <div className="flex flex-col justify-center xl:justify-start">
                            <div className="flex justify-center gap-x-2 pr-14 items-center text-[22px] text-primary">
                              <Briefcase />
                              <h4 className="capitalize font-medium">
                                {getData(qualificationData, "Education").title}
                              </h4>
                            </div>
                            <div className="flex flex-col mt-3 gap-y-8 ">
                              {getData(qualificationData, "Education").data.map(
                                (item, index) => {
                                  const { company, role, years } = item;
                                  return (
                                    <div
                                      className="flex justify-center gap-x-8 group"
                                      key={index}
                                    >
                                      <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                      </div>
                                      <div>
                                        <div className="font-semibold text-xl leading-none mb-2">
                                          {company}
                                        </div>
                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                          {role}
                                        </div>
                                        <div className="text-base font-medium">
                                          {years}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="skills">
                      <div className="text-center xl:text-left">
                        <h3 className="h3 mb-8">What I Use Everyday</h3>
                        <div className="mb-16">
                          <h4 className="text-xl font-semibold mb-2">Skills</h4>
                          <div className="border-b border-border mb-4"></div>
                          {/* skill list */}
                          <div className="space-y-2">
                            {getData(skillData, "skills").data.map(
                              (item, index) => {
                                const { name } = item;
                                return (
                                  <div
                                    className="w-[95%] text-center xl:text-left mx-auto xl:mx-0"
                                    key={index}
                                  >
                                    <div className="font-medium">{name}</div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 xl:text-left">
                            Tools
                          </h4>
                          <div className="border-b border-border mb-4"></div>
                          {/* tool list */}
                          <div className="flex gap-x-8 justify-center xl:justify-start ">
                            {getData(skillData, "tools").data.map(
                              (item, index) => {
                                const { imgPath } = item;
                                return (
                                  <div key={index}>
                                    <Image
                                      src={imgPath}
                                      width={48}
                                      height={48}
                                      alt="Image"
                                      priority
                                    />
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/* laptop view */}
      <div className="hidden lg:block">
        <h2 className="section-title mb-8 xl:mb-16 text-center lg:py-6 xl:py-0 mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row lg:flex-row">
          {/* image */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="hidden xl:flex lg:flex lg:pr-10 pl-10 xl:pl-24 flex-1 relative w-fit h-fit cursor-pointer">
                <DevImg
                  containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                  imgSrc="/assets/about/harsh_lignt.png"
                />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 z-10">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/assets/about/harsh_lignt.png" />
                  <AvatarFallback>HS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">My Real Photo</h4>
                  <p className="text-sm">
                    This photo does not look good compared to the Dummy Image
                    above, and it does not match the theme of my portfolio web
                    app.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full flex xl:grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none py-2">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 capitalize">
                      Project-Based Learning approve in My Full Stack Web
                      Development Journey
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 capitalize">
                      Focusing on making next.js full stack Project include
                      front,backend,database using multiple Technology like RTK
                      ,Shadcn/ui, Tailwindcss etc
                    </p>
                    {/* icons */}
                    <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 mb-10 lg:flex">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-2 md:gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icons}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English & Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center tracking-wider">
                      My Educational Journey
                      <p className="border-b border-border mb-4 mt-3"></p>
                    </h3>
                    <div>
                      <div className="flex flex-col justify-center xl:justify-start">
                        <div className="flex justify-center gap-x-2 pr-14 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col mt-3 gap-y-8 ">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className="flex justify-center gap-x-8 group"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className="space-y-2">
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-[95%] text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start ">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt="Image"
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
