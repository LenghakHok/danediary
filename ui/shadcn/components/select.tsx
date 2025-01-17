"use client";

import {
  Group as SelectGroupPrimitive,
  Icon as SelectIcon,
  Root as SelectRoot,
  Trigger as SelectTriggerPrimitive,
  Value as SelectValuePrimitive,
} from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import React from "react";

import { cn } from "@utils/cn";

const Select = SelectRoot;

const SelectGroup = SelectGroupPrimitive;

const SelectValue = SelectValuePrimitive;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof SelectTriggerPrimitive>
>(({ className, children, ...props }, ref) => (
  <SelectTriggerPrimitive
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <SelectIcon asChild={true}>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectIcon>
  </SelectTriggerPrimitive>
));
SelectTrigger.displayName = SelectTriggerPrimitive.displayName;

export { Select, SelectGroup, SelectTrigger, SelectValue };
