// Dependencies: pnpm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function InputDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-19">Input with end inline button</Label>
      <div className="relative">
        <Input id="input-19" className="pe-9" placeholder="Email" type="email" />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <Send size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
