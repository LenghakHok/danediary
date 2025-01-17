"use client";

import {
  Group,
  ItemIndicator,
  Menu,
  CheckboxItem as MenubarCheckboxItemPrimitive,
  Content as MenubarContentPrimitive,
  Item as MenubarItemPrimitive,
  Label as MenubarLabelPrimitive,
  RadioItem as MenubarRadioItemPrimitive,
  Root as MenubarRoot,
  Separator as MenubarSeparatorPrimitive,
  SubContent as MenubarSubContentPrimitive,
  SubTrigger as MenubarSubTriggerPrimitive,
  Trigger as MenubarTriggerPrimitive,
  Portal,
  RadioGroup,
  Sub,
} from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import React from "react";

import { cn } from "@utils/cn";

const MenubarMenu = Menu;

const MenubarGroup = Group;

const MenubarPortal = Portal;

const MenubarSub = Sub;

const MenubarRadioGroup = RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarRoot>,
  React.ComponentPropsWithoutRef<typeof MenubarRoot>
>(({ className, ...props }, ref) => (
  <MenubarRoot
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Menubar.displayName = MenubarRoot.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarTriggerPrimitive>
>(({ className, ...props }, ref) => (
  <MenubarTriggerPrimitive
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarTriggerPrimitive.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarSubTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarSubTriggerPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarSubTriggerPrimitive
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
  </MenubarSubTriggerPrimitive>
));
MenubarSubTrigger.displayName = MenubarSubTriggerPrimitive.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarSubContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarSubContentPrimitive>
>(({ className, ...props }, ref) => (
  <MenubarSubContentPrimitive
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarSubContentPrimitive.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarContentPrimitive>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <Portal>
      <MenubarContentPrimitive
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in",
          className,
        )}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  ),
);
MenubarContent.displayName = MenubarContentPrimitive.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarItemPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarItem.displayName = MenubarItemPrimitive.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarCheckboxItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarCheckboxItemPrimitive>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarCheckboxItemPrimitive
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>
    {children}
  </MenubarCheckboxItemPrimitive>
));
MenubarCheckboxItem.displayName = MenubarCheckboxItemPrimitive.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarRadioItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarRadioItemPrimitive>
>(({ className, children, ...props }, ref) => (
  <MenubarRadioItemPrimitive
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </MenubarRadioItemPrimitive>
));
MenubarRadioItem.displayName = MenubarRadioItemPrimitive.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarLabelPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarLabelPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarLabelPrimitive
    className={cn(
      "px-2 py-1.5 font-semibold text-sm",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
MenubarLabel.displayName = MenubarLabelPrimitive.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof MenubarSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <MenubarSeparatorPrimitive
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarSeparatorPrimitive.displayName;

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
