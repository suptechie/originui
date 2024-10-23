import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox09() {
  return (
    <div className="items-top flex space-x-2 space-x-reverse">
      <Checkbox 
        id="checkbox-09" 
        className="order-1" 
        aria-describedby="checkbox-09-description"
      />
      <div className="grow grid gap-1">
        <Label htmlFor="checkbox-09">
          Label <span className="font-normal text-xs leading-[inherit] text-muted-foreground">(Sublabel)</span>
        </Label>
        <p id="checkbox-09-description" className="text-xs text-muted-foreground">
          You can use this checkbox with a label and a description.
        </p>
      </div>
    </div>    
  )
}
