"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "ruru-ui/components/button";
import { Input } from "ruru-ui/components/input";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "ruru-ui/components/form";

const Forgot1 = (): React.ReactNode => {
  const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center w-96 border rounded-md bg-card p-4">
        <div className="grid place-items-center">
          <div className="flex items-center gap-4">
            <img
              className="dark:block hidden"
              src={"https://ruru-ui.vercel.app/logo-white.png"}
              alt="logo"
              height={40}
              width={40}
            />
            <img
              className="dark:hidden block"
              src={"https://ruru-ui.vercel.app/logo-black.png"}
              alt="logo"
              height={40}
              width={40}
            />
            <span className="text-xl">Ruru UI</span>
          </div>
          <span className="text-sm text-muted-foreground mt-4">
            Forgot your password?
          </span>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
            <div className="my-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="py-4 w-full space-y-3">
              <Button type="submit" className="w-full">
                Send reset link
              </Button>
            </div>

            <Link
              href={"#"}
              className="hover:underline text-xs flex justify-center"
            >
              Back to login
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Forgot1;
