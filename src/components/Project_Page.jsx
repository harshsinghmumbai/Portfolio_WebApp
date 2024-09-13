"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    video: "/assets/work/1.mp4",
    image: "/assets/work/1.1.png",
    category: "Minor Project",
    name: "Facebook loginPage UI Clone",
    description:
      "i have created a UI Clone of facebook page📄 for practising by html, CSS, Tailwindcss on project",
    link: "https://pixelperfectcopy.netlify.app/",
    github: "https://github.com/harshsinghmumbai/login-page_UI-clone",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_i-have-successfully-created-facebook-login-activity-7122919473350676480-rvn-/?utm_source=share&utm_medium=member_desktop",
  },
  {
    image: "/assets/work/2.png",
    video: "/assets/work/2.1.mp4",
    category: "Minor Project",
    name: "Amazon login page UI Clone",
    description:
      "Created a Landing Page of Amazon-login-page using Vanilla CSS and HTML5",
    link: "https://pixelperfectcopy2.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Amazon-login-page_UI",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_for-my-mini-project-i-have-created-an-amazon-activity-7123190861760229376-p-3O?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D4E05AQEysCUN2CW1tw/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1698308996769?e=2147483647&v=beta&t=IUuOrZPjBlQzHqGpMSxrPP7WGtHJtohsGWvK1gEd68w",
    image: "/assets/work/3.1.png",
    category: "Minor Project",
    name: "Temperature Converter",
    description:
      "Created a Temperature Converter using pure Vanilla JavaScript",
    link: "https://temperatureconverterbyharsh.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Temperature-Converter",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_improvelogicalskill-activity-7123224238324363264-acmJ?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQE5dLAE9Cs62Q/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1698729700971?e=2147483647&v=beta&t=ETWNMrOR1sFmPSgdAFIobmIaVC3VEkTyrO3oNoODxoY",
    image: "/assets/work/4.1.png",
    category: "Minor Project",
    name: "Age Calculator",
    description:
      "Created a AgeCalculator website using pure Vanilla JavaScript",
    link: "https://agecalculatorbyharsh.netlify.app/",
    github: "https://github.com/harshsinghmumbai/AgeCalculator",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_i-strongly-believe-that-development-should-activity-7124988801898205184-Bj-O?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQG8TZ8iiyNLhA/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1703744190143?e=2147483647&v=beta&t=-Kv3Wx2CEWHFqaTq7PJE3QTmNdphk5QRHMGtbAD-yDU",
    image: "/assets/work/5.1.png",
    category: "Minor Project",
    name: "Real Estate WebApp",
    description: "Make a Clone of Real Estate App by React library",
    link: "https://realestatebyharsh.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Real-Estate",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_i-am-thrilled-to-share-with-you-that-i-have-activity-7146021067810091010-tNdR?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQGRxg08hW6_Uw/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1709373796781?e=2147483647&v=beta&t=h1336zqbaDHaw0Ijmgyxy3I8Y4dU8YXJC3fcvQF95XM",
    image: "/assets/work/6.1.png",
    category: "Minor Project",
    name: "Microsoft UI Clone",
    description:
      " i had Pixel perfect Copy Microsoft landing page Ul Clone with full responsive on mutiple device such as 📱, tablet, laptop, 🖥",
    link: "https://ms-landing-page-clone.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Microsoft_UI_Clone",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_i-have-successfully-implemented-all-the-activity-7169633367376773120-j6wz?utm_source=share&utm_medium=member_desktop",
  },
  {
    image: "/assets/work/8.2.jpg",
    video: "/assets/work/8.mp4",
    category: "Minor Project",
    name: "Fetch API Table",
    description:
      " I fetch data from an API and display it in a dynamic table using React JS.",
    link: "https://fetch-api-table.netlify.app/",
    github: "https://github.com/harshsinghmumbai/fetch_API-table",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_reactjs-api-webdevelopment-activity-7181594677953925120-hjbT?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQHhTy52IKVhvw/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1713108585476?e=2147483647&v=beta&t=StsQ51jKyHH585BqWZ4UXhmx8XizbIpVKxKeZZXoE04",
    image: "/assets/work/9.1.png",
    category: "Minor Project",
    name: "Image Carousel",
    description:
      "I have created image_carousel_project with react library from scratch",
    link: "https://images-slider-project.netlify.app/",
    github: "https://github.com/harshsinghmumbai/image_carousel_project",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_reactjs-webdevelopment-imagecarousel-activity-7185298203909521408-NSD3?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQEZjkao0NougQ/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1713790958102?e=2147483647&v=beta&t=VkpRRgwvQ8cIOvszVDowuMMuehCemMfp2zD6MD8IFHM",
    image: "/assets/work/5_popular.png",
    category: "Minor Project",
    name: "Dynamic Card Data",
    description:
      " i have created dynamic card data which change on onclick when someone click on button .",
    link: "https://dynamic-carditems-in-react.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Dynamic_Card_data_in_React",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_project-showcase-i-have-created-activity-7188160290423738368-Ay1a?utm_source=share&utm_medium=member_desktop",
  },
  {
    image: "/assets/work/11.5.png",
    video: "/assets/work/11.mp4",
    category: "Minor Project",
    name: "Card Slider",
    description:
      "I am created card slider using react library and also react-slick npm package 📦",
    link: "https://cardsliderbyharsh.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Card_slider",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_github-harshsinghmumbaicardslider-in-activity-7189945999157559297-Ybif?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQFWFE8dhLQkVA/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1714838716320?e=2147483647&v=beta&t=diZY0VdCPFHwEBRGLZaGzMYSiaTQou50EtmpcLFC-fc",
    image: "/assets/work/12.1.png",
    category: "Minor Project",
    name: "React Calculator",
    description:
      "I am created a calculator webapp using react library for practically implementing react concepts in this project",
    link: "https://calculatorwebappbyharsh.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Calculator_WebApp",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_react-javascript-webapp-activity-7192554891771351040-pSqU?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQHXLvholcmMKg/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1715515616785?e=2147483647&v=beta&t=xgvOCLR8ppo4nE0v-a2Bj8wklmICWuZR4UizrtkVncY",
    image: "/assets/work/13.5.png",
    category: "Minor Project",
    name: "Netflix Slider API",
    description:
      "I had created netflix like slider by fetching data form an Real API",
    link: "https://slider-metflix.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Netflix_Slider_API",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_fullstack-mernstack-webdevelopment-activity-7195394019969884160-Pd-3?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/D5605AQGayaJDV5iIlw/mp4-640p-30fp-crf28/0/1716223425642?e=2147483647&v=beta&t=Y-ZYH0UWnJt7rSdP3Jx7wla34qgyawkHWgcI4JUKEOY",
    image: "/assets/work/4_popular.png",
    category: "Minor Project",
    name: "Github User API",
    description:
      " I have Created a Github Card by Fetching an github api and also a search functionality",
    link: "https://github-user-api-iota.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Github_User_API",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_nextjs-react-fullstackdevelopment-activity-7198362794507866112-GeEp?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://media.licdn.com/dms/image/v2/D5605AQElp3v5DNQh3g/videocover-low/videocover-low/0/1725616039045?e=1726848000&v=beta&t=6NnFlZ1txYM3KZo8Zp6PFQoAHHGRZSWiDsKgcvYUWKY",
    image: "/assets/work/20.png",
    category: "Major Project",
    name: "Google Authentication",
    description:
      "I implemented Google Authentication to trigger upon page rendering. After 6 seconds, it will check if you are signed in and prompt you to authenticate if not.",
    link: "https://g-auth-harshsinghmumbai.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Google_Authentication",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_project-title-google-authentication-activity-7237758417841373184--fV2?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/D5605AQHTeobPNNs8mw/mp4-640p-30fp-crf28/0/1716986817216?e=2147483647&v=beta&t=gmqFUXckBS4iDLIhnd5Aa7smDTLPxx3eKyrh_sjC21k",
    image: "/assets/work/3_popular.png",
    category: "Major Project",
    name: "GitHub Repo Search",
    description:
      " I have Created GitHub Repo Search Card with search functionality that allows users to enter a GitHub username and access information about that user github profile,",
    link: "https://githubreposearchproject-harshsinghmumbais-projects.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Github_Repo_Search",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_nextjs-react-fullstackdevelopment-activity-7201564684854964225-pGfV?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQE_UScjIFYkrg/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1719219295989?e=2147483647&v=beta&t=5neaLe0uvvYL0qove_D3UZJChktAPYWTZZrGM-Yr8JQ",
    image: "/assets/work/2_popular.png",
    category: "Major Project",
    name: "Reduxtoolkit First Project",
    description:
      "I has Created my First Reduxtoolkit Project a Basic level project",
    link: "https://reduxtoolkitfirstproject-jxvvq9wlq-harshsinghmumbais-projects.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Reduxtoolkit_First_Project",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_redux-toolkit-webdevelopment-activity-7210928476999098368-nD57?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQFLjJgTATRd3Q/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1719822540700?e=2147483647&v=beta&t=qK2Gx1d_i_IzUI3_9e6orjkMb_L_uDq4gclLR_9YDvQ",
    image: "/assets/work/17.1.png",
    category: "Major Project",
    name: "Add To Cart Functionality",
    description:
      "I had Created Add to Cart Feature using next.js frameworks in which we can add Items in Cart ,delete Items , Increase and Decrease Quantity of Items and much more !",
    link: "https://add-to-cart-functionality.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Add_To_Cart_Functionality",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_redux-reduxabrtoolkit-webdevelopment-activity-7213458638340775936-1uk1?utm_source=share&utm_medium=member_desktop",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQEcE-ptAAm_GA/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1723393163452?e=2147483647&v=beta&t=vM1DTJzY5et7VhsU7u-0PA7bdTSJLqesLJfJr9p1MQY",
    image: "/assets/work/19.1.png",
    category: "Full Stack Project",
    name: "Full Stack Web Application",
    description:
      "I have Created a full-stack web app, including the front-end, back-end, and databases, using Next.js as the full-stack framework.",
    link: "https://full-stack-webapplication.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Full_Stack_WebApplication",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7228434872934023168/",
  },
  {
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQG9B71qKyq0yA/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1721196934611?e=2147483647&v=beta&t=eTmBC1smFmJjGWfyd5ISew84kAoDCCP46v3hd7bpRsc",
    image: "/assets/work/18.2.png",
    category: "Minor Project",
    name: "Form Validation by Zod",
    description:
      " I have Created form using shadcn/ui components and perform validating using zod and for State management I used useForm() hook in Next.js Framework",
    link: "https://form-validation-by-harshsinghmumbai.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Form_Validation_Zod",
    linkedin:
      "https://www.linkedin.com/posts/harshsinghmumbai_project-mernstack-webdevelopment-activity-7219223242945785856-K77J?utm_source=share&utm_medium=member_desktop",
  },
];
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Project_Page = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <>
      <section className="min-h-screen pt-12">
        <div className="container mx-auto">
          <h1 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Projects
          </h1>
          <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(category)}
                    value={category}
                    key={index}
                    className="capitalize w-[162px] md:w-auto"
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Project_Page;
