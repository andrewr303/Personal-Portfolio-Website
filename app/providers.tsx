"use client";

import { ThemeProvider, LayoutProvider, ToastProvider } from "@once-ui-system/core";

/**
 * Once UI providers. The site is light-only, so theme is pinned to "light"
 * (a forced prop keeps ThemeProvider from ever following the OS preference).
 * brand/accent = blue to align Once UI's own primitives with the portfolio's
 * navy-blue palette where they are used.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      theme="light"
      neutral="gray"
      brand="blue"
      accent="blue"
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
