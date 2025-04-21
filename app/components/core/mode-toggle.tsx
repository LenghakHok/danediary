import { cva, type VariantProps } from "class-variance-authority";
import { MoonIcon, SunIcon } from "lucide-react";
import { useCallback, type ComponentPropsWithRef } from "react";
import { Theme, useTheme } from "remix-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const modeToggleVariants = cva("", {
  variants: {
    mode: {
      dropdown: "",
      switch: "",
    },
  },
});

type Props = VariantProps<typeof modeToggleVariants> &
  DropdownModeToggleProps &
  SwitchModeToggleProps;

export const ModeToggle = (props: Props) => {
  switch (props.mode) {
    case "switch":
      return <SwitchModeToggle {...props} />;
    default:
      return <DropdownModeToggle {...props} />;
  }
};

type SwitchModeToggleProps = ComponentPropsWithRef<typeof Button>;

const SwitchModeToggle = (props: SwitchModeToggleProps) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = useCallback(() => {
    if (theme === Theme.DARK) {
      return setTheme(Theme.LIGHT);
    }

    return setTheme(Theme.DARK);
  }, [theme, setTheme]);

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
      {...props}
    >
      <SunIcon className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

type DropdownModeToggleProps = {
  triggerProps?: ComponentPropsWithRef<typeof Button>;
  contentProps?: ComponentPropsWithRef<typeof DropdownMenuContent>;
} & ComponentPropsWithRef<typeof DropdownMenu>;
const DropdownModeToggle = ({
  contentProps,
  triggerProps,
  ...props
}: DropdownModeToggleProps) => {
  const [_theme, setTheme] = useTheme();

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild={true}>
        <Button
          size="icon"
          variant="ghost"
          {...triggerProps}
        >
          <SunIcon className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        {...contentProps}
      >
        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
          <SunIcon />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          <MoonIcon />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
