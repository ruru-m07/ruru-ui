import React from "react";
import { Stack } from "ruru-ui/components/stack";
import { Sidebar as SidebarIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "ruru-ui/components/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import Layers from "./layers";

const Sidebar = () => {
  return (
    <div className="w-80 h-screen border-r bg-primary-foreground/80">
      <Stack
        direction={"row"}
        justify={"space-between"}
        align={"center"}
        padding={"12px"}
        className="border-b"
      >
        <Stack>
          <Image
            className="size-8 [.uwu_&]:hidden [header_&]:size-6 dark:block hidden"
            src={"/assets/logo-white.png"}
            alt="logo"
            height={100}
            width={100}
          />
          <Image
            className="size-8 [.uwu_&]:hidden [header_&]:size-6 dark:hidden block"
            src={"/assets/logo-black.png"}
            alt="logo"
            height={100}
            width={100}
          />
        </Stack>
        <Stack align={"center"}>
          <span className="mr-1 text-lg">Builder</span>
          <Badge variant="amber-subtle" size="md">
            Beta
          </Badge>
        </Stack>
        <Stack>
          <SidebarIcon />
        </Stack>
      </Stack>
      <Tabs defaultValue="Layers" className="w-full p-3">
        <TabsList>
          <TabsTrigger value="Layers">Layers</TabsTrigger>
          <TabsTrigger value="Assets">Assets</TabsTrigger>
        </TabsList>
        <TabsContent value="Layers">
            <Layers />
        </TabsContent>
        <TabsContent value="Assets">Assets</TabsContent>
      </Tabs>
    </div>
  );
};

export default Sidebar;
