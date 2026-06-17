"use client";

import { ThemeProvider, LayoutProvider, ToastProvider } from "@once-ui-system/core";

/**
 * Once UI providers. theme="system" keeps the toggle un-forced so it can flip
 * + persist (a forced "dark"/"light" prop pins the theme — see ThemeProvider).
 * Dark is still the default: the pre-paint script in layout.tsx seeds
 * localStorage["data-theme"]="dark" on first visit, so the OS preference is not
 * followed and there is no flash. brand/accent = violet to align Once UI's own
 * primitives with the portfolio's purple palette where they are used.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      theme="system"
      neutral="gray"
      brand="violet"
      accent="violet"
      solid="contrast"
      solidStyle="flat"
      border="rounded"
      surface="translucent"
      transition="all"
      scaling="100"
    >
      <LayoutProvider>
        <ToastProvider>{children}</ToastProvider>
      </LayoutProvider>
    </ThemeProvider>
  );
}
