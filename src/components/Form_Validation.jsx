"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRightIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/lib/resend";
import { toast } from "sonner";

const Form_Schema = z.object({
  Name: z
    .string()
    .regex(/^[A-Za-z\s]+$/, {
      message: "Name should only contain alphabetic characters",
    })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  Email: z.string().email(),
  textarea: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must be at most 500 characters" }),
});

const Form_Validation = () => {
  const form = useForm({
    resolver: zodResolver(Form_Schema),
    defaultValues: {
      Name: "",
      Email: "",
      textarea: "",
    },
  });

  const onSubmit = (value) => {
    const { Name, Email, textarea } = value;
    console.log(value);
    sendEmail({ Name, Email, textarea });
    form.reset();
    toast(`${Name}`, {
      description: `${Name} your Message Received Me Successfully`,
      className:
        "group-[.toaster]:bg-green-200 group-[.toaster]:border-2 group-[.toaster]:border-green-200 group-[.toaster]:dark:text-black",
    });
  };
  return (
    <>
      <div className="lg:w-[600px] h-fit">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <SignupForm
              name="Name"
              type="input"
              placeholder="Enter Full Name"
              formControl={form.control}
            />
            <SignupForm
              name="Email"
              type="email"
              placeholder="Enter Email ID"
              formControl={form.control}
            />
            <FormField
              control={form.control}
              name="textarea"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Your Message Here"
                      {...field}
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage className="px-3 md:text-base font-semibold dark:text-red-600" />
                </FormItem>
              )}
            />
            <Button type="submit" className="btn">
              Let's Talk
              <ArrowRightIcon size={20} />
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Form_Validation;

const SignupForm = ({ name, inputType, placeholder, formControl }) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type={inputType || "input"}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className="px-3 md:text-base font-semibold dark:text-red-600" />
        </FormItem>
      )}
    />
  );
};
