"use client";

import { useTheme } from "next-themes";
import { Icons } from "@/components/icons"

export function ModeToggle({ ariaLabel }: { ariaLabel: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={ariaLabel}
    >
      <Icons.sun className="size-full text-neutral-500 dark:text-neutral-300 dark:hidden" />
      <Icons.moon className="hidden size-full text-neutral-500 dark:text-neutral-300 dark:block" />
    </button>
  );
}
