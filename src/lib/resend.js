"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
  console.log("Email sended from server side");
  await resend.emails.send({
    to: "harshrsingh552005@gmail.com",
    from: "OrcDev <onboarding@resend.dev>",
    subject: "Avatar-2",
    react: (
      <div>
        <h1 className="">utkarsh Singh Received data </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
          iste illo! Perferendis necessitatibus quo debitis, culpa commodi
          nostrum omnis.
        </p>
      </div>
    ),
  });
};
