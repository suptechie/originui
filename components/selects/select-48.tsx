"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Label } from "@/components/ui/label"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Blocks,
  Brain,
  Cpu,
  Database,
  Globe,
  Layout,
  LineChart,
  Network,
  Search,
  Server,
} from "lucide-react"

const items = [
  {
    value: "analytics platform",
    label: "Analytics Platform",
    icon: LineChart,
    number: 2451
  },
  {
    value: "ai services",
    label: "AI Services",
    icon: Brain,
    number: 1832
  },
  {
    value: "database systems",
    label: "Database Systems",
    icon: Database,
    number: 1654
  },
  {
    value: "compute resources",
    label: "Compute Resources",
    icon: Cpu,
    number: 943
  },
  {
    value: "network services",
    label: "Network Services",
    icon: Network,
    number: 832
  },
  {
    value: "web services",
    label: "Web Services",
    icon: Globe,
    number: 654
  },
  {
    value: "monitoring tools",
    label: "Monitoring Tools",
    icon: Search,
    number: 432
  },
  {
    value: "server management",
    label: "Server Management",
    icon: Server,
    number: 321
  },
  {
    value: "infrastructure",
    label: "Infrastructure",
    icon: Blocks,
    number: 234
  },
  {
    value: "frontend services",
    label: "Frontend Services",
    icon: Layout,
    number: 123
  },
]

export default function Select48() {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  return (
    <div className="space-y-2">
      <Label htmlFor="select-48">Options with icon and number</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="select-48"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-normal px-3 bg-background hover:bg-background"
          >
            {value ? (
              <span className="flex items-center gap-2 min-w-0">
                {(() => {
                  const selectedItem = items.find((item) => item.value === value);
                  if (selectedItem) {
                    const Icon = selectedItem.icon;
                    return <Icon className="h-4 w-4 text-muted-foreground" />;
                  }
                  return null;
                })()}
                <span className="truncate">
                  {items.find((item) => item.value === value)?.label}
                </span>
              </span>
            ) : (
              <span className="text-muted-foreground">Select service category</span>
            )}
            <ChevronDown size={16} strokeWidth={2} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 min-w-[var(--radix-popper-anchor-width)]" align="start">
          <Command>
            <CommandInput placeholder="Search services..." />
            <CommandList>
              <CommandEmpty>No service found.</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      {item.label}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {item.number.toLocaleString()}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
