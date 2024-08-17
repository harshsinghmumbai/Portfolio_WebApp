"use client";
import Link from "next/link";
import { Button } from "./ui/button";
// import swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
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
    image: "/assets/work/1_popular.png",
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQFLjJgTATRd3Q/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1719822540700?e=2147483647&v=beta&t=qK2Gx1d_i_IzUI3_9e6orjkMb_L_uDq4gclLR_9YDvQ",
    category: "Next.js",
    name: "Add to Cart functionality",
    description:
      "This Project allows users to add items to their cart, delete items, and adjust the quantity of items in the cart.",
    link: "https://add-to-cart-functionality.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Add_To_Cart_Functionality",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7213458638340775936/",
  },
  {
    image: "/assets/work/2_popular.png",
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQE_UScjIFYkrg/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1719219295989?e=2147483647&v=beta&t=5neaLe0uvvYL0qove_D3UZJChktAPYWTZZrGM-Yr8JQ",
    category: "Next.js",
    name: "Reduxtoolkit First Project",
    description:
      "Reduxtoolkit First Project in this I used reduxtoolkit for state management task ! Starting with basic level projects is the best way to learn web development.",
    link: "https://reduxtoolkitfirstproject-harshsinghmumbais-projects.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Reduxtoolkit_First_Project",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7210928476999098368/",
  },
  {
    image: "/assets/work/3_popular.png",
    video:
      "https://dms.licdn.com/playlist/vid/D5605AQHTeobPNNs8mw/mp4-640p-30fp-crf28/0/1716986817216?e=2147483647&v=beta&t=gmqFUXckBS4iDLIhnd5Aa7smDTLPxx3eKyrh_sjC21k",
    category: "Next.js",
    name: "Github Repo Search",
    description:
      "In this I have Created search functionality that allows users to enter a GitHub username and access information about that user github profile,",
    link: "https://githubreposearchproject-harshsinghmumbais-projects.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Github_Repo_Search",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7201564684854964225/",
  },
  {
    image: "/assets/work/4_popular.png",
    video:
      "https://dms.licdn.com/playlist/vid/D5605AQGayaJDV5iIlw/mp4-640p-30fp-crf28/0/1716223425642?e=2147483647&v=beta&t=Y-ZYH0UWnJt7rSdP3Jx7wla34qgyawkHWgcI4JUKEOY",
    category: "Next.js",
    name: "Github User API",
    description:
      " I have Created a Github Card by Fetching an github api and also a search functionality",
    link: "https://github-user-api-iota.vercel.app/",
    github: "https://github.com/harshsinghmumbai/Github_User_API",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7198362794507866112/",
  },
  {
    image: "/assets/work/5_popular.png",
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQEZjkao0NougQ/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1713790958102?e=2147483647&v=beta&t=VkpRRgwvQ8cIOvszVDowuMMuehCemMfp2zD6MD8IFHM",
    category: "React.js",
    name: "Dynamic Card data",
    description:
      " i have created dynamic card data which change on onclick when someone click on button .",
    link: "https://dynamic-carditems-in-react.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Dynamic_Card_data_in_React",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7188160290423738368/",
  },
  {
    image: "/assets/work/7_popular.png",
    video:
      "https://dms.licdn.com/playlist/vid/v2/D5605AQGRxg08hW6_Uw/mp4-640p-30fp-crf28/mp4-640p-30fp-crf28/0/1709373796781?e=2147483647&v=beta&t=h1336zqbaDHaw0Ijmgyxy3I8Y4dU8YXJC3fcvQF95XM",
    category: "React.js",
    name: "Microsoft UI Clone",
    description:
      "i had Pixel perfect Copy Microsoft landing page Ul Clone with full responsive on multiple device such as 📱, tablet, laptop, 🖥",
    link: "https://ms-landing-page-clone.netlify.app/",
    github: "https://github.com/harshsinghmumbai/Microsoft_UI_Clone",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7169633367376773120/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[480px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Popular Projects</h2>
          <p className="subtitle mb-8 w-[250px] md:w-[350px]  max-w-[400px] mr-5">
            Popular Project created by Next.js & implemented multiple
            functionality in Project
          </p>
          <Link href="/project">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-fit pb-10"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 6 projects for the slides */}
            {projectData.slice(0, 7).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
