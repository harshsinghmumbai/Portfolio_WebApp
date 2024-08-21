"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (value) => {
  const { Name, Email, textarea } = await value;
  console.log(value, "Email sended from server side");
  await resend.emails.send({
    to: "harshrsingh552005@gmail.com",
    from: "OrcDev <onboarding@resend.dev>",
    subject: `Message form ${Name}`,
    react: (
      <div>
        <h3 className="capitalize">{`${Name} Send You Message form Portfolio WebApp`}</h3>
        <div className="flex flex-col">
          <p className="text-blue-600 text-lg font-bold">Message :- </p>
          {`${textarea}`}
        </div>
      </div>
    ),
  });
};
