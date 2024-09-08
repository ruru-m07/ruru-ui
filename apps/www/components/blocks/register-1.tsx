"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "ruru-ui/components/button";
import { Input, PasswordInput } from "ruru-ui/components/input";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "ruru-ui/components/form";

const Register1 = () => {
  const registerSchema = z.object({
    firstName: z
      .string()
      .min(3, { message: "First name must be at least 3 characters long." }),
    lastName: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters long." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }),
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
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
            Create an account
          </span>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
            <div className="my-3">
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="py-4 w-full space-y-3">
              <Button type="submit" className="w-full">
                Register
              </Button>
              <Button
                className="w-full"
                variant={"secondary"}
                onClick={() => console.log("Login with Github")}
              >
                Register with Github
              </Button>
            </div>

            <Link
              href={"#"}
              className="hover:underline text-xs flex justify-center"
            >
              Already have an account?
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register1;
