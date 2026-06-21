"use client";

import Dock, { type DockItem } from "@/components/ui/dock";
import { LinkedInColorMark, XMark } from "@/lib/icons";
import { profile } from "@/content/site";

/** Bottom floating dock — quick links to resume + social profiles. */
export function BottomDock() {
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
  ];

  return (
    <Dock
      items={items}
      className="pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] z-90 px-4 py-0 max-[380px]:px-2"
    />
  );
}
