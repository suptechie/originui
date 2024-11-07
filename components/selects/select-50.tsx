// Dependencies: pnpm install react-aria-components

"use client";

import { Label } from "@/components/ui/label";
import { ListBox, ListBoxItem } from 'react-aria-components';

export default function Select50() {
  return (
    <div className="space-y-2">
      <Label>Listbox with multiple options</Label>
      <div className="overflow-hidden rounded-lg border border-input">
        <ListBox className="min-h-20 max-h-72 overflow-auto bg-background shadow-sm shadow-black/5 ring-offset-background transition-shadow p-1 text-sm space-y-1" aria-label="Select framework" selectionMode="multiple" defaultSelectedKeys={["react", "vue"]}>
          <ListBoxItem id="react" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">React</ListBoxItem>
          <ListBoxItem id="vue" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Vue</ListBoxItem>
          <ListBoxItem id="angular" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Angular</ListBoxItem>
          <ListBoxItem id="svelte" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Svelte</ListBoxItem>
        </ListBox>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/ListBox.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>      
    </div>
  );
}
