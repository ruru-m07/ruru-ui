"use client";

import React, { useState } from "react";
import Card from "@/components/ui/card";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CubeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "ruru-ui/components/button";
import { Spinner } from "ruru-ui/components/spinner";
import {
  Avatar,
  AvatarGroup,
  AvatarWithBadge,
} from "ruru-ui/components/avatar";
import { Badge } from "ruru-ui/components/badge";
import { Checkbox } from "ruru-ui/components/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "ruru-ui/components/tooltip";
import { Input, SearchInput } from "ruru-ui/components/input";
import { Textarea } from "ruru-ui/components/textarea";
import { Tabs, Tab } from "ruru-ui/components/tabs";
import { Switch } from "ruru-ui/components/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  selectAnimationVariants,
} from "ruru-ui/components/select";
import Modal, { ModalProvider } from "ruru-ui/components/modal";
import { Dropzone } from "ruru-ui/components/dropzone";
import AdvanceDropzone from "@/components/preview/dropzone/advanceDropzone";
import StackPlayground from "@/components/stackPlayground";

const Playground = () => {
  const handleSubmit = async () => {
    // Your submit logic here
    console.log("Submitted");
    // Simulate an API call or any async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="mt-4">
        <Button size={"small"}>default</Button>
        <Button>default</Button>
        <Button size={"large"}>default</Button>
      </Card>

      {/* 
      <H1>
        Types
      </H1> */}
      <Card>
        <Button variant={"secondary"}>Upload</Button>

        <Button variant={"tertiary"}>Upload</Button>

        <Button variant={"error"}>Upload</Button>

        <Button variant={"warning"}>Upload</Button>
      </Card>

      <Card>
        <Button prefix={<ArrowLeftIcon />}>Upload</Button>
        <Button prefix={<ArrowLeftIcon />} suffix={<ArrowRightIcon />}>
          Upload
        </Button>
        <Button suffix={<ArrowRightIcon />}>Upload</Button>
      </Card>

      <Card>
        <Button variant={"secondary"} disabled size={"small"}>
          default
        </Button>
        <Button variant={"secondary"} disabled>
          default
        </Button>
        <Button variant={"secondary"} disabled size={"large"}>
          default
        </Button>
      </Card>

      <Card>
        <Button loading disabled size={"small"}>
          default
        </Button>
        <Button loading disabled>
          default
        </Button>
        <Button loading disabled size={"large"}>
          default
        </Button>
      </Card>

      {/* <Card>
        <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
          Click here
        </Link>
      </Card> */}

      {/* <Card>
        <button
          style={{ backgroundColor: color }}
          onClick={() => setColor(color === "blue" ? "green" : "blue")}
        >
          Click me to change color
        </button>
      </Card> */}

      <Card>
        <Spinner size={10} />
        <Spinner />
        <Spinner size={50} />
      </Card>

      <Card>
        <Avatar placeholder="RU" src={"https://github.com/ruru-m07.png"} />
        <Avatar
          size={50}
          placeholder="RU"
          src={"https://github.com/ruru-m07.png"}
        />
        <Avatar
          size={70}
          placeholder="RU"
          src={"https://github.com/ruru-m07.png"}
        />
      </Card>

      <Card>
        <AvatarGroup
          members={[
            { src: "https://github.com/ruru-m07.png", alt: "ruru-m07" },
            { src: "https://github.com/leerob.png", alt: "leerob" },
            { src: "https://github.com/evilrabbit.png", alt: "evilrabbit" },
            { src: "https://github.com/rauchg.png", alt: "rauchg" },
            { src: "https://github.com/shadcn.png", alt: "shadcn" },
          ]}
          size={40}
        />

        <AvatarGroup
          limit={4}
          members={[
            { src: "https://github.com/ruru-m07.png", alt: "ruru-m07" },
            { src: "https://github.com/leerob.png", alt: "leerob" },
            { src: "https://github.com/evilrabbit.png", alt: "evilrabbit" },
            { src: "https://github.com/rauchg.png", alt: "rauchg" },
            { src: "https://github.com/shadcn.png", alt: "shadcn" },
          ]}
        />

        <AvatarGroup
          limit={4}
          members={[
            { src: "https://github.com/ruru-m07.png", alt: "ruru-m07" },
            { src: "https://github.com/leerob.png", alt: "leerob" },
            { src: "https://github.com/evilrabbit.png", alt: "evilrabbit" },
            { src: "https://github.com/rauchg.png", alt: "rauchg" },
            { src: "https://github.com/shadcn.png", alt: "shadcn" },
          ]}
          size={40}
        />
      </Card>

      <Card>
        <AvatarWithBadge
          src="https://github.com/ruru-m07.png"
          badgeSrc="https://github.com/github.png"
          size={50}
        />
        <AvatarWithBadge
          src="https://github.com/ruru-m07.png"
          badgeSrc="https://github.com/github.png"
        />
        <AvatarWithBadge
          src="https://github.com/ruru-m07.png"
          badgeSrc="https://github.com/github.png"
          size={70}
        />
      </Card>

      <Card>
        <div className="space-y-2">
          <div className="space-x-2">
            <Badge variant="gray" size="lg" icon={<CubeIcon />}>
              gray
            </Badge>
            <Badge variant="gray" size="md" icon={<CubeIcon />}>
              gray
            </Badge>
            <Badge variant="gray" size="sm" icon={<CubeIcon />}>
              gray
            </Badge>

            <Badge variant="gray-subtle" size="sm" icon={<CubeIcon />}>
              gray-subtle
            </Badge>
            <Badge variant="gray-subtle" size="md" icon={<CubeIcon />}>
              gray-subtle
            </Badge>
            <Badge variant="gray-subtle" size="lg" icon={<CubeIcon />}>
              gray-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="blue" size="lg" icon={<CubeIcon />}>
              blue
            </Badge>
            <Badge variant="blue" size="md" icon={<CubeIcon />}>
              blue
            </Badge>
            <Badge variant="blue" size="sm" icon={<CubeIcon />}>
              blue
            </Badge>

            <Badge variant="blue-subtle" size="sm" icon={<CubeIcon />}>
              blue-subtle
            </Badge>
            <Badge variant="blue-subtle" size="md" icon={<CubeIcon />}>
              blue-subtle
            </Badge>
            <Badge variant="blue-subtle" size="lg" icon={<CubeIcon />}>
              blue-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="purple" size="lg" icon={<CubeIcon />}>
              purple
            </Badge>
            <Badge variant="purple" size="md" icon={<CubeIcon />}>
              purple
            </Badge>
            <Badge variant="purple" size="sm" icon={<CubeIcon />}>
              purple
            </Badge>

            <Badge variant="purple-subtle" size="sm" icon={<CubeIcon />}>
              purple-subtle
            </Badge>
            <Badge variant="purple-subtle" size="md" icon={<CubeIcon />}>
              purple-subtle
            </Badge>
            <Badge variant="purple-subtle" size="lg" icon={<CubeIcon />}>
              purple-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="amber" size="lg" icon={<CubeIcon />}>
              amber
            </Badge>
            <Badge variant="amber" size="md" icon={<CubeIcon />}>
              amber
            </Badge>
            <Badge variant="amber" size="sm" icon={<CubeIcon />}>
              amber
            </Badge>

            <Badge variant="amber-subtle" size="sm" icon={<CubeIcon />}>
              amber-subtle
            </Badge>
            <Badge variant="amber-subtle" size="md" icon={<CubeIcon />}>
              amber-subtle
            </Badge>
            <Badge variant="amber-subtle" size="lg" icon={<CubeIcon />}>
              amber-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="red" size="lg" icon={<CubeIcon />}>
              red
            </Badge>
            <Badge variant="red" size="md" icon={<CubeIcon />}>
              red
            </Badge>
            <Badge variant="red" size="sm" icon={<CubeIcon />}>
              red
            </Badge>

            <Badge variant="red-subtle" size="sm" icon={<CubeIcon />}>
              red-subtle
            </Badge>
            <Badge variant="red-subtle" size="md" icon={<CubeIcon />}>
              red-subtle
            </Badge>
            <Badge variant="red-subtle" size="lg" icon={<CubeIcon />}>
              red-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="pink" size="lg" icon={<CubeIcon />}>
              pink
            </Badge>
            <Badge variant="pink" size="md" icon={<CubeIcon />}>
              pink
            </Badge>
            <Badge variant="pink" size="sm" icon={<CubeIcon />}>
              pink
            </Badge>

            <Badge variant="pink-subtle" size="sm" icon={<CubeIcon />}>
              pink-subtle
            </Badge>
            <Badge variant="pink-subtle" size="md" icon={<CubeIcon />}>
              pink-subtle
            </Badge>
            <Badge variant="pink-subtle" size="lg" icon={<CubeIcon />}>
              pink-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="green" size="lg" icon={<CubeIcon />}>
              green
            </Badge>
            <Badge variant="green" size="md" icon={<CubeIcon />}>
              green
            </Badge>
            <Badge variant="green" size="sm" icon={<CubeIcon />}>
              green
            </Badge>

            <Badge variant="green-subtle" size="sm" icon={<CubeIcon />}>
              green-subtle
            </Badge>
            <Badge variant="green-subtle" size="md" icon={<CubeIcon />}>
              green-subtle
            </Badge>
            <Badge variant="green-subtle" size="lg" icon={<CubeIcon />}>
              green-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="teal" size="lg" icon={<CubeIcon />}>
              teal
            </Badge>
            <Badge variant="teal" size="md" icon={<CubeIcon />}>
              teal
            </Badge>
            <Badge variant="teal" size="sm" icon={<CubeIcon />}>
              teal
            </Badge>

            <Badge variant="teal-subtle" size="sm" icon={<CubeIcon />}>
              teal-subtle
            </Badge>
            <Badge variant="teal-subtle" size="md" icon={<CubeIcon />}>
              teal-subtle
            </Badge>
            <Badge variant="teal-subtle" size="lg" icon={<CubeIcon />}>
              teal-subtle
            </Badge>
          </div>

          <div className="space-x-2">
            <Badge variant="inverted" size="lg" icon={<CubeIcon />}>
              inverted
            </Badge>
            <Badge variant="inverted" size="md" icon={<CubeIcon />}>
              inverted
            </Badge>
            <Badge variant="inverted" size="sm" icon={<CubeIcon />}>
              inverted
            </Badge>
          </div>
        </div>
      </Card>

      <Card>
        <Badge variant="green-subtle" size="sm">
          sm
        </Badge>
        <Badge variant="green-subtle" size="md">
          md
        </Badge>
        <Badge variant="green-subtle" size="lg">
          lg
        </Badge>
      </Card>

      <Card>
        <Checkbox />
        <Checkbox indeterminate />
      </Card>

      <div className="my-24">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="underline">
              {/* <Button variant="secondary"> @ruru </Button> */}
              @ruru
            </TooltipTrigger>
            <TooltipContent>
              <p> author of ruru UI </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Card className="grid grid-cols-3 gap-3 pr-3">
        <div />
        <div />
        <div />
        <Input placeholder="Enter your name" />
        <Input prefix={<PersonIcon />} placeholder="Enter your name" />
        <Input suffix={<PersonIcon />} placeholder="Enter your name" />
        <Input
          prefix={<CubeIcon />}
          suffix={<CubeIcon />}
          placeholder="Enter your name"
        />
        <Input
          prefix={"https://"}
          suffix={".com"}
          placeholder="Enter your domain name"
        />
        <Input
          prefix={"https://"}
          prefixStyling={false}
          suffix={".com"}
          suffixStyling={false}
          placeholder="Enter your domain name"
        />
        <Input type="file" placeholder="select your file" />
        <Input disabled placeholder="disabled" />
        <Input
          disabled
          placeholder="disabled"
          value={"disabled with values. "}
        />
        <SearchInput placeholder="Enter some text..." />
        <SearchInput enablePrefixStyling placeholder="Enter some text..." />

        <div />

        <Input label={"name"} placeholder="Enter your name" />
        <Input
          label={"name"}
          error={"enter name "}
          placeholder="Enter your name"
        />
      </Card>

      <Card className="grid space-y-3">
        <div />
        <Textarea placeholder="Enter your message" style={{ minHeight: 100 }} />
        <Textarea
          className="w-96"
          label="message"
          placeholder="Enter your message"
          style={{ minHeight: 100 }}
        />
        <Textarea
          className="w-96"
          label="message"
          error="There has been an error."
          placeholder="Enter your message"
          style={{ minHeight: 100 }}
        />
      </Card>

      <div className="w-full">
        <Tabs items={["Apple", "Orange", "Mango"]}>
          <Tab value={"Apple"}>Apple</Tab>
          <Tab value={"Orange"}>Orange</Tab>
          <Tab value={"Mango"}>Mango</Tab>
        </Tabs>
      </div>

      <div className="w-full">
        <Tabs disabled items={["Apple", "Orange", "Mango"]}>
          <Tab value={"Apple"}>Apple</Tab>
          <Tab value={"Orange"}>Orange</Tab>
          <Tab value={"Mango"}>Mango</Tab>
        </Tabs>
      </div>

      <div className="w-full">
        <Tabs defaultIndex={2} items={["Apple", "Orange", "Mango"]}>
          <Tab value={"Apple"}>Apple</Tab>
          <Tab value={"Orange"}>Orange</Tab>
          <Tab value={"Mango"}>Mango</Tab>
        </Tabs>
      </div>

      <Card>
        <Switch />
        <Switch disabled />
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode">toggle Mode</label>
        </div>
      </Card>

      <Card>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectSeparator />
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger disabled className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectSeparator />
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select defaultValue="banana">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectSeparator />
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Card>
      <div className="rounded-md w-full py-4 grid grid-cols-3 place-items-center my-2 mx-2 border-[1.5px] border-input">
        {Object.keys(selectAnimationVariants).map((variantKey: any, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <Select defaultValue={variantKey}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent variants={variantKey}>
                <SelectGroup>
                  <SelectLabel>{variantKey}</SelectLabel>
                  <SelectSeparator />
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value={variantKey}>{variantKey}</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      <Card>
        <ModalProvider>
          <Modal.Trigger>Open Modal</Modal.Trigger>
          <Modal>
            <Modal.Body>
              <Modal.Header>
                <Modal.Title>Create Username</Modal.Title>
                <Modal.Subtitle>
                  Enter a unique name for your token to differentiate it from
                  other tokens and then select the scope.
                </Modal.Subtitle>
              </Modal.Header>
              <Modal.Content>
                <Input label="username" placeholder="enter your username." />
              </Modal.Content>
            </Modal.Body>
            <Modal.Actions>
              <Modal.Close variant="secondary">Cancel</Modal.Close>
              <Modal.Action onClick={handleSubmit}>Submit</Modal.Action>
            </Modal.Actions>
          </Modal>
        </ModalProvider>
      </Card>

      <Card className="p-10">
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)} />
      </Card>

      <Card className="p-10">
        <AdvanceDropzone />
      </Card>

      <StackPlayground />

      <div className="my-10" />
    </div>
  );
};

export default Playground;
