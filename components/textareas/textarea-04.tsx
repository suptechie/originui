import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea04() {
  return (
    <>
      <div className="mb-2 flex justify-between gap-1">
        <Label htmlFor="textarea-04" className="mb-0">
          Textarea with hint
        </Label>
        <span className="text-sm text-muted-foreground">Optional</span>
      </div>
      <Textarea id="textarea-04" placeholder="Leave a comment" />
    </>
  );
}
