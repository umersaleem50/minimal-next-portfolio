"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const ThemeIcon =
    activeTheme === "dark"
      ? Icons.moon
      : activeTheme === "retro"
        ? Icons.retro
        : activeTheme === "cyberpunk"
          ? Icons.cyberpunk
          : activeTheme === "paper"
            ? Icons.paper
            : activeTheme === "aurora"
              ? Icons.aurora
              : activeTheme === "synthwave"
                ? Icons.synthwave
                : activeTheme === "glass"
                  ? Icons.glass
                  : Icons.sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          {mounted ? (
            <ThemeIcon className="h-4 w-4 transition-transform" />
          ) : (
            <Icons.sun className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("retro")}>
          <Icons.retro className="mr-2 h-4 w-4" />
          <span>Retro</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("cyberpunk")}>
          <Icons.cyberpunk className="mr-2 h-4 w-4" />
          <span>Cyberpunk</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("paper")}>
          <Icons.paper className="mr-2 h-4 w-4" />
          <span>Paper</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("aurora")}>
          <Icons.aurora className="mr-2 h-4 w-4" />
          <span>Aurora</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("synthwave")}>
          <Icons.synthwave className="mr-2 h-4 w-4" />
          <span>Synthwave</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("glass")}>
          <Icons.glass className="mr-2 h-4 w-4" />
          <span>Glass</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
