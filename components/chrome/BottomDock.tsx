"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@once-ui-system/core";
import Dock, { type DockItem } from "@/components/ui/dock";
import { LinkedInColorMark, XMark, SunIcon, MoonIcon } from "@/lib/icons";
import { profile } from "@/content/site";

/** Bottom floating dock — appears on the home page only (matches the design). */
export function BottomDock() {
  // Theme toggle, rendered as a dock item so it animates like the rest.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isLight = mounted && resolvedTheme === "light";

  const items: DockItem[] = [
    {
      label: "Resume",
      href: profile.resume,
      download: true,
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="/assets/icon-resume.png" alt="" width={28} height={28} />,
    },
    {
      label: "GitHub",
      href: profile.github,
      external: true,
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="/assets/github.png" alt="" width={28} height={28} />,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      external: true,
      icon: <LinkedInColorMark size={28} />,
    },
    {
      label: "X",
      href: profile.twitter,
      external: true,
      icon: <XMark size={28} />,
    },
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="/assets/mail.png" alt="" width={28} height={28} />,
    },
    {
      label: isLight ? "Switch to dark theme" : "Switch to light theme",
      onClick: () => setTheme(isLight ? "dark" : "light"),
      icon: isLight ? <MoonIcon size={26} /> : <SunIcon size={26} />,
    },
  ];

  return (
    <Dock
      items={items}
      className="pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] z-90 px-4 py-0 max-[380px]:px-2"
    />
  );
}
