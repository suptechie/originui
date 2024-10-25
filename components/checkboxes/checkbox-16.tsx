import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox16() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-16" />
      <Label htmlFor="checkbox-16">
        I agree to the{" "}
        <a className="underline" href="https://originui.com" target="_blank">
          terms of service
        </a>
      </Label>
    </div>
  );
}
