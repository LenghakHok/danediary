"use client";

import {
  CheckboxItem as DropdownMenuCheckboxItemPrimitive,
  Content as DropdownMenuContentPrimitive,
  Group as DropdownMenuGroupPrimitive,
  ItemIndicator as DropdownMenuItemIndicatorPrimitive,
  Item as DropdownMenuItemPrimitive,
  Label as DropdownMenuLabelPrimitive,
  Portal as DropdownMenuPortalPrimitive,
  RadioGroup as DropdownMenuRadioGroupPrimitive,
  RadioItem as DropdownMenuRadioItemPrimitive,
  Root as DropdownMenuRoot,
  Separator as DropdownMenuSeparatorPrimitive,
  SubContent as DropdownMenuSubContentPrimitive,
  Sub as DropdownMenuSubPrimitive,
  SubTrigger as DropdownMenuSubTriggerPrimitive,
  Trigger as DropdownMenuTriggerPrimitive,
} from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import React from "react";

import { cn } from "@utils/cn";

const DropdownMenu = DropdownMenuRoot;

const DropdownMenuTrigger = DropdownMenuTriggerPrimitive;

const DropdownMenuGroup = DropdownMenuGroupPrimitive;

const DropdownMenuPortal = DropdownMenuPortalPrimitive;

const DropdownMenuSub = DropdownMenuSubPrimitive;

const DropdownMenuRadioGroup = DropdownMenuRadioGroupPrimitive;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSubTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubTriggerPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuSubTriggerPrimitive
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuSubTriggerPrimitive>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuSubTriggerPrimitive.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSubContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubContentPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuSubContentPrimitive
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuSubContentPrimitive.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContentPrimitive>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPortalPrimitive>
    <DropdownMenuContentPrimitive
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        className,
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPortalPrimitive>
));
DropdownMenuContent.displayName = DropdownMenuContentPrimitive.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItemPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuItemPrimitive.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuCheckboxItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItemPrimitive>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuCheckboxItemPrimitive
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicatorPrimitive>
        <Check className="h-4 w-4" />
      </DropdownMenuItemIndicatorPrimitive>
    </span>
    {children}
  </DropdownMenuCheckboxItemPrimitive>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuCheckboxItemPrimitive.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuRadioItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuRadioItemPrimitive>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuRadioItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicatorPrimitive>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuItemIndicatorPrimitive>
    </span>
    {children}
  </DropdownMenuRadioItemPrimitive>
));
DropdownMenuRadioItem.displayName = DropdownMenuRadioItemPrimitive.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuLabelPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuLabelPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuLabelPrimitive
    className={cn(
      "px-2 py-1.5 font-semibold text-sm",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuLabelPrimitive.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <DropdownMenuSeparatorPrimitive
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuSeparatorPrimitive.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
