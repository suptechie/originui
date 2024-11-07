import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select13() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-13">Multiple select (native)</Label>
      <div className="overflow-hidden rounded-lg border border-input">
        <SelectNative id="select-13" multiple className="border-none rounded-none">
          <option value="s1">React</option>
          <option value="s2">Next.js</option>
          <option value="s3">Astro</option>
          <option value="s4">Gatsby</option>
          <option value="s5">Vue</option>
          <option value="s6">Angular</option>
        </SelectNative>
      </div>
    </div>
  );
}
