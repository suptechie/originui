import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">Tooltip-like popover</Button>
      </PopoverTrigger>
      <PopoverContent className="py-3 max-w-[280px] shadow-none" side="top">
        <div className="space-y-2">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">Popover with button</p>
            <p className="text-xs text-muted-foreground">
              I am a popover that would like to look like a tooltip. I can't be a tooltip because of the interactive element inside me.
            </p>
          </div>
          <Button size="sm">Custom Action</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
