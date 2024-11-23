// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="group">
      Button
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
