import Form_Validation from "@/components/Form_Validation";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const contact = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          {/* text illustration */}
          <div className="grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-24">
            {/* text */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                Say Hello 👋
              </div>
              <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
              <p className="subtitle max-w-[400px]">
                Focusing on making next.js advanced level project using RTK,
                Shadcn/ui etc
              </p>
            </div>
            {/* illustration  */}
            <div className="w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
          </div>
          {/* info text and form */}
          <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 lg:flex lg:justify-between">
            {/* info text */}
            <div className="flex flex-col gap-y-2 lg:gap-y-6 mb-12 xl:mb-24 text-base xl:text-lg">
              {/* mail */}
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>harshrsingh552005@gmail.com</div>
              </div>
              {/* address */}
              <div className="flex items-center gap-x-8">
                <HomeIcon size={21} className="text-primary" />
                <div className="">
                  Arihant City, Kalyan-bhiwandi Road, Thane
                </div>
              </div>
              {/* phone */}
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div className="">+91 9702343218</div>
              </div>
            </div>
            <Form_Validation />
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
