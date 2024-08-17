"use client";

import React from "react";
import {
  Select,
  selectAnimationVariants,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "ruru-ui/components/select";

const SelectAnimationVariants = () => {
  return (
    <div className="py-4 grid grid-cols-3 place-items-center gap-10">
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
  );
};

export default SelectAnimationVariants;
