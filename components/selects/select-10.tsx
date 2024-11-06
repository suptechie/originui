import { useMemo } from "react";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select10() {
  const timezones = Intl.supportedValuesOf('timeZone');  
  
  const formattedTimezones = useMemo(() => {
    return timezones.map(timezone => {
      const formatter = new Intl.DateTimeFormat('en', {
        timeZone: timezone,
        timeZoneName: 'shortOffset',
      });
      const parts = formatter.formatToParts(new Date());
      const offset = parts.find(part => part.type === 'timeZoneName')?.value || '';
      const modifiedOffset = offset === 'GMT' ? 'GMT+0' : offset;
      
      return {
        value: timezone,
        label: `(${modifiedOffset}) ${timezone.replace(/_/g, ' ')}`,
        numericOffset: parseInt(offset.replace('GMT', '').replace('+', '') || '0')
      };
    })
    .sort((a, b) => a.numericOffset - b.numericOffset);
  }, [timezones]);
  
  return (
    <div className="space-y-2">
      <Label htmlFor="select-10">Select timezone (native)</Label>
      <SelectNative id="select-10" defaultValue="Europe/London">
        {formattedTimezones.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectNative>
    </div>
  );
}
