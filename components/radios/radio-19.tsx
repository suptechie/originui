"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export default function Radio19() {
  const [selectedValue, setSelectedValue] = useState("on");

  return (
    <div className="inline-flex h-9 rounded-lg bg-input/50 p-0.5">
      <RadioGroup
        value={selectedValue}
        onValueChange={setSelectedValue}
        className="relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 after:absolute after:inset-y-0 after:w-1/2 after:rounded-md after:bg-background after:shadow-sm after:shadow-black/[.04] after:ring-offset-background after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] has-[:focus-visible]:after:ring-2 has-[:focus-visible]:after:ring-offset-2 has-[:focus-visible]:after:ring-ring data-[state=off]:after:translate-x-0 data-[state=on]:after:translate-x-full text-sm font-medium group"
        data-state={selectedValue}
      >
        <label className="relative z-10 inline-flex whitespace-nowrap h-full cursor-pointer min-w-8 px-4 justify-center items-center group-data-[state=on]:text-muted-foreground/70">
          Bill Monthly
          <RadioGroupItem value="off" className="sr-only" />
        </label>
        <label className="relative z-10 inline-flex whitespace-nowrap h-full cursor-pointer min-w-8 px-4 justify-center items-center group-data-[state=off]:text-muted-foreground/70">
          <span>Bill Yearly <span className="group-data-[state=on]:text-emerald-500">-20%</span></span>
          <RadioGroupItem value="on" className="sr-only" />
        </label>
      </RadioGroup>
    </div>
  );
}

