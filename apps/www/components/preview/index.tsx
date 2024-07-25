import type { ReactNode } from "react";
import { Wrapper } from "./wrapper";

import { Button } from "ruru-ui/components/button";
import { Spinner } from "ruru-ui/components/spinner";
import { Avatar } from "ruru-ui/components/avatar";
import { Checkbox } from "ruru-ui/components/checkbox";

import { BadgePreview } from "../badgePreview";

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
        <BadgePreview />
      </div>
    </Wrapper>
  ),
  checkbox: (
    <Wrapper>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
    </Wrapper>
  ),
} as Record<string, ReactNode>;
