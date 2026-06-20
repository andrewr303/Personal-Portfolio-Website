"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

export interface DockItem {
  /** Pre-rendered icon node — keeps brand colours / image assets intact. */
  icon: React.ReactNode
  label: string
  /** Internal route, external URL, or mailto/tel. Omit for action-only items. */
  href?: string
  /** Open off-site in a new tab with a safe rel. */
  external?: boolean
  onClick?: () => void
}

interface DockProps {
  className?: string
  items: DockItem[]
}

/** Accent for the hover glow + active dot — the portfolio navy blue (matches focus rings). */
const ACCENT = "#3b76d4"

/**
 * Renders a single dock entry as the appropriate element for its target:
 * an external/mailto anchor, an internal Next.js `Link`, or an action-only
 * button (e.g. the theme toggle). `isHovered` drives the accent glow overlay.
 */
function DockControl({
  item,
  isHovered,
}: {
  item: DockItem
  isHovered: boolean
}) {
  // Icons inherit the dock container's color in every state — neutralize the
  // ghost button's hover bg/text so currentColor icons stay legible on the glass.
  const className = cn(
    "relative h-11 w-11 rounded-2xl transition-[transform,box-shadow,background-color] active:scale-95 hover:!bg-black/5 hover:!text-inherit max-[380px]:h-10 max-[380px]:w-10 sm:h-12 sm:w-12"
  )
  const glowStyle = isHovered ? { boxShadow: `0 8px 24px ${ACCENT}40` } : undefined

  const inner = (
    <>
      <span className="flex items-center justify-center">{item.icon}</span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            layoutId="dock-glow"
            className="pointer-events-none absolute inset-0 rounded-2xl border"
            style={{ borderColor: `${ACCENT}66` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  )

  // External / mailto / tel → plain anchor (off-site links get target + rel).
  if (item.href && (item.external || !item.href.startsWith("/"))) {
    return (
      <Button asChild variant="ghost" size="icon" className={className} style={glowStyle}>
        <a
          href={item.href}
          aria-label={item.label}
          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      </Button>
    )
  }

  // Internal route → Next link for client-side navigation.
  if (item.href) {
    return (
      <Button asChild variant="ghost" size="icon" className={className} style={glowStyle}>
        <Link href={item.href} aria-label={item.label}>
          {inner}
        </Link>
      </Button>
    )
  }

  // Action-only item (e.g. theme toggle).
  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      style={glowStyle}
      aria-label={item.label}
      onClick={() => item.onClick?.()}
    >
      {inner}
    </Button>
  )
}

/** True when a dock item points at the page we're currently on. */
function isCurrentRoute(href: string | undefined, pathname: string) {
  // Only internal routes can be "current"; external/mailto/tel never are.
  if (!href || !href.startsWith("/")) return false
  const normalize = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p)
  return normalize(href) === normalize(pathname)
}

/**
 * Floating glass dock of icon links/actions. The active-page dot is derived
 * from the current route (not taps), and hover scaling responds to pointer
 * hover only, so tapping an icon on touch devices leaves no stuck state.
 */
export default function Dock({ items, className }: DockProps) {
  const pathname = usePathname()
  const [hovered, setHovered] = React.useState<number | null>(null)
  const reduceMotion = useReducedMotion()

  return (
    <div
      className={cn("flex w-full items-center justify-center py-12", className)}
      style={{ perspective: "600px" }}
    >
      <motion.div
        animate={reduceMotion ? { rotateX: 10 } : { rotateX: 10, y: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "pointer-events-auto flex items-end gap-2 rounded-3xl px-3 py-3 max-[380px]:gap-1.5 max-[380px]:px-2 sm:gap-4 sm:px-4"
        )}
        style={{
          color: "#16223a",
          background: "rgba(255,255,255,0.72)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow:
            "0 16px 44px rgba(15,23,42,0.28), 0 2px 8px rgba(15,23,42,0.12), inset 0 1px 0 rgba(255,255,255,0.85)",
          WebkitBackdropFilter: "blur(22px) saturate(180%)",
          backdropFilter: "blur(22px) saturate(180%)",
        }}
      >
        <TooltipProvider delayDuration={100}>
          {items.map((item, i) => {
            const isActive = isCurrentRoute(item.href, pathname)
            const isHovered = hovered === i

            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <motion.div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    animate={
                      reduceMotion
                        ? undefined
                        : { scale: isHovered ? 1.18 : 1, rotate: isHovered ? -5 : 0 }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex flex-col items-center"
                  >
                    <DockControl item={item} isHovered={isHovered} />

                    {/* Reserve the dot's row height always so the active
                        indicator never shifts an icon up/down (was causing
                        tapped icons to jump on touch devices). */}
                    <span className="mt-1 flex h-1.5 items-center justify-center">
                      {isActive && (
                        <motion.span
                          layoutId="dock-dot"
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                      )}
                    </span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </motion.div>
    </div>
  )
}
