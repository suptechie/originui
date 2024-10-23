import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SwatchBook, Brush, Eraser, Scissors } from "lucide-react";

const items = [
  { id: "checkbox-1", label: "Palette", Icon: SwatchBook, defaultChecked: true },
  { id: "checkbox-2", label: "Brush", Icon: Brush },
  { id: "checkbox-3", label: "Eraser", Icon: Eraser },
  { id: "checkbox-4", label: "Cut", Icon: Scissors },
];

export default function Checkbox14() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div className="relative items-top p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-4">
          <div className="flex justify-between space-x-2 space-x-reverse">
            <Checkbox
              id={item.id}
              className="order-1 after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
            />
            <item.Icon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <Label htmlFor={item.id}>
            {item.label}
          </Label>
        </div>
      ))}
    </div>
  )
}
