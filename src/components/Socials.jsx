"use client";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

const icons = [
  {
    path: "https://mail.google.com/mail/u/2/#inbox",
    name: <MdMarkEmailUnread />,
  },
  {
    path: "https://www.linkedin.com/in/harshsinghmumbai/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/harshsinghmumbai",
    name: <RiGithubFill />,
  },
  {
    path: "https://x.com/home?lang=en",
    name: <FaSquareXTwitter />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
