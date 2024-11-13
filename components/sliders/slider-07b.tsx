"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Slider06() {
  const [value, setValue] = useState([25,75]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label>Dual range slider with output</Label>
        <output className="text-sm text-muted-foreground tabular-nums font-medium">{value[0]} - {value[1]}</output>
      </div>
      <Slider value={value} onValueChange={setValue} aria-label="Dual range slider with output" />
    </div>
  );
}
