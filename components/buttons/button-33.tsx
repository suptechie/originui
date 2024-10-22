// Dependencies: npm install @radix-ui/react-toggle-group

"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

export default function Button33() {
  const [value, setValue] = useState<string>("left");

  return (
    <ToggleGroup
      className="flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
      type="single"
      variant="outline"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroupItem
        className="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        value="left"
      >
        Left
      </ToggleGroupItem>
      <ToggleGroupItem
        className="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        value="center"
      >
        Center
      </ToggleGroupItem>
      <ToggleGroupItem
        className="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        value="right"
      >
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
