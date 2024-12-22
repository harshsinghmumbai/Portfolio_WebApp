"use client";
import Form_Validation from "@/components/Form_Validation";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { AuroraBackground } from "@/components/ui/Aurora_Background";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="max-w-screen overflow-x-hidden"
      >
        {/* text illustration */}
        <div className="sm:grid sm:grid-cols-2 pt-24 lg:h-[480px] p-4">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8 dark:text-white">
              Let&apos;s Work Together
            </h1>
            <p className="subtitle max-w-[400px]">
              Focusing on making next.js advanced level project using RTK,
              Shadcn/ui etc
            </p>
          </div>
          {/* illustration  */}
          <div className="bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text and form */}
        <div className="grid xl:grid-cols-2 lg:flex lg:justify-between">
          {/* info text */}
          <div className="flex flex-col gap-y-2 p-1 lg:gap-y-6 mb-12 xl:mb-24 text-base xl:text-lg dark:text-white">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>harshrsingh552005@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={20} className="text-primary" />
              <div>Shivalik Part Kalyan-bhiwandi Road, Thane</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 9702343218</div>
            </div>
          </div>
          <Form_Validation />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Contact;
