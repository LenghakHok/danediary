"use client";

import {
  CheckboxItem as ContextMenuCheckboxItemPrimitive,
  Content as ContextMenuContentPrimitive,
  Group as ContextMenuGroupPrimitive,
  ItemIndicator as ContextMenuItemIndicatorPrimitive,
  Item as ContextMenuItemPrimitive,
  Label as ContextMenuLabelPrimitive,
  Portal as ContextMenuPortalPrimitive,
  RadioGroup as ContextMenuRadioGroupPrimitive,
  RadioItem as ContextMenuRadioItemPrimitive,
  Root as ContextMenuRoot,
  Separator as ContextMenuSeparatorPrimitive,
  SubContent as ContextMenuSubContentPrimitive,
  Sub as ContextMenuSubPrimitive,
  SubTrigger as ContextMenuSubTriggerPrimitive,
  Trigger as ContextMenuTriggerPrimitive,
} from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import React from "react";

import { cn } from "@utils/cn";

const ContextMenu = ContextMenuRoot;

const ContextMenuTrigger = ContextMenuTriggerPrimitive;

const ContextMenuGroup = ContextMenuGroupPrimitive;

const ContextMenuPortal = ContextMenuPortalPrimitive;

const ContextMenuSub = ContextMenuSubPrimitive;

const ContextMenuRadioGroup = ContextMenuRadioGroupPrimitive;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuSubTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuSubTriggerPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuSubTriggerPrimitive
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuSubTriggerPrimitive>
));
ContextMenuSubTrigger.displayName = ContextMenuSubTriggerPrimitive.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuSubContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuSubContentPrimitive>
>(({ className, ...props }, ref) => (
  <ContextMenuSubContentPrimitive
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuSubContentPrimitive.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuContentPrimitive>
>(({ className, ...props }, ref) => (
  <ContextMenuPortalPrimitive>
    <ContextMenuContentPrimitive
      className={cn(
        "fade-in-80 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] animate-in overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        className,
      )}
      ref={ref}
      {...props}
    />
  </ContextMenuPortalPrimitive>
));
ContextMenuContent.displayName = ContextMenuContentPrimitive.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuItemPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuItemPrimitive.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuCheckboxItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuCheckboxItemPrimitive>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuCheckboxItemPrimitive
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuItemIndicatorPrimitive>
        <Check className="h-4 w-4" />
      </ContextMenuItemIndicatorPrimitive>
    </span>
    {children}
  </ContextMenuCheckboxItemPrimitive>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuCheckboxItemPrimitive.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuRadioItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuRadioItemPrimitive>
>(({ className, children, ...props }, ref) => (
  <ContextMenuRadioItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuItemIndicatorPrimitive>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuItemIndicatorPrimitive>
    </span>
    {children}
  </ContextMenuRadioItemPrimitive>
));
ContextMenuRadioItem.displayName = ContextMenuRadioItemPrimitive.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuLabelPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuLabelPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuLabelPrimitive
    className={cn(
      "px-2 py-1.5 font-semibold text-foreground text-sm",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuLabelPrimitive.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContextMenuSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <ContextMenuSeparatorPrimitive
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    ref={ref}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuSeparatorPrimitive.displayName;

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
