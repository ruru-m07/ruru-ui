import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Wrapper } from "./wrapper";
import { CubeIcon } from "@radix-ui/react-icons";

const Button = dynamic(() =>
  import("ruru-ui/components/button").then((m) => m.Button),
);

const Spinner = dynamic(() =>
  import("ruru-ui/components/spinner").then((m) => m.Spinner),
);

const Badge = dynamic(() =>
  import("ruru-ui/components/badge").then((m) => m.Badge),
);

const Avatar = dynamic(() =>
  import("ruru-ui/components/avatar").then((m) => m.Avatar),
);

export default {
  button: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Button className="w-fit" variant={"secondary"}>
          Button
        </Button>
      </div>
    </Wrapper>
  ),
  spinner: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Spinner size={30} className="my-4" />
      </div>
    </Wrapper>
  ),
  avatar: (
    <Wrapper>
      <div className="flex items-center justify-center">
        <Avatar
          size={50}
          placeholder="RU"
          src={"https://github.com/ruru-m07.png"}
        />
      </div>
    </Wrapper>
  ),
  badge: (
    <Wrapper>
      <div className="flex items-center justify-center">
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
      </div>
    </Wrapper>
  ),
} as Record<string, ReactNode>;
