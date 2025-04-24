import { useEffect, useState, type PropsWithChildren } from "react";
import { useTheme } from "remix-themes";
import { Particles } from "~/components/magic/particle";

export const RootLayout = ({ children }: PropsWithChildren) => {
  const [themes] = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(themes === "dark" ? "#ffffff" : "#000000");
  }, [themes]);

  return (
    <>
      {children}
      <Particles
        className="absolute inset-0 z-0"
        color={color}
        ease={80}
        quantity={100}
        refresh={true}
      />
    </>
  );
};
