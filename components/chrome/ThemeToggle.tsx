"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@once-ui-system/core";
import { SunIcon, MoonIcon } from "@/lib/icons";

/**
 * Dark/light toggle backed by Once UI's theme system (persisted, no FOUC).
 * Sun shows in dark mode (click → light); moon shows in light mode (click → dark),
 * matching the design. A mount guard keeps the icon stable through hydration.
 */
export function ThemeToggle({
  className,
  iconSize = 18,
}: {
  className?: string;
  iconSize?: number;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <button
      type="button"
      className={className}
      aria-label="Toggle light or dark theme"
      title="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <MoonIcon size={iconSize} /> : <SunIcon size={iconSize} />}
    </button>
  );
}
