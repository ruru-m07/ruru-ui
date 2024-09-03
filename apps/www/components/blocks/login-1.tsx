import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "ruru-ui/components/button";
import { Input, PasswordInput } from "ruru-ui/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "ruru-ui/components/form";

const Login1 = () => {
  const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-96 border rounded-md bg-card p-4">
        <div className="grid place-items-center">
          <div className="flex items-center gap-4">
            <Image
              className="dark:block hidden"
              src={"/logo-white.png"}
              alt="logo"
              height={40}
              width={40}
            />
            <Image
              className="dark:hidden block"
              src={"/logo-black.png"}
              alt="logo"
              height={40}
              width={40}
            />
            <span className="text-xl">Ruru UI</span>
          </div>
          <span className="text-sm text-muted-foreground mt-4">
            Welcome back
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

            <Link href={"#"} className="hover:underline text-xs">
              Forgot password?
            </Link>

            <div className="py-4 w-full space-y-3">
              <Button className="w-full"> Login </Button>
              <Button className="w-full" variant={"secondary"}>
                Login with Github
              </Button>
            </div>

            <Link
              href={"#"}
              className="hover:underline text-xs flex justify-center"
            >
              Don&apos;t have an account?
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login1;
