"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "ruru-ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "ruru-ui/components/form";
import { Input } from "ruru-ui/components/input";
import { z } from "zod";

const FormPreview = () => {
  const SearchSchema = z.object({
    username: z.string().min(3).max(20),
  });

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof SearchSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <div className="w-72 border rounded-md p-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          <div className="my-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your username." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="py-4 w-full space-y-3">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormPreview;
