"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion, useReducedMotion } from "framer-motion"

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

/** Accent for the hover glow + active dot — the portfolio violet (matches focus rings). */
const ACCENT = "#c084fc"

function DockControl({
  item,
  isHovered,
  onActivate,
}: {
  item: DockItem
  isHovered: boolean
  onActivate: () => void
}) {
  const className = cn(
    "relative h-11 w-11 rounded-2xl transition-[transform,box-shadow,background-color] active:scale-95 sm:h-12 sm:w-12"
  )
  const glowStyle = isHovered ? { boxShadow: `0 8px 24px ${ACCENT}40` } : undefined

  const inner = (
    <>
      <span className="flex items-center justify-center">{item.icon}</span>
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
    </>
  )

  // External / mailto / tel → plain anchor (off-site links get target + rel).
  if (item.href && (item.external || !item.href.startsWith("/"))) {
    return (
      <Button asChild variant="ghost" size="icon" className={className} style={glowStyle}>
        <a
          href={item.href}
          aria-label={item.label}
          onClick={onActivate}
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
        <Link href={item.href} aria-label={item.label} onClick={onActivate}>
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
      onClick={() => {
        onActivate()
        item.onClick?.()
      }}
    >
      {inner}
    </Button>
  )
}

export default function Dock({ items, className }: DockProps) {
  const [active, setActive] = React.useState<string | null>(null)
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
          "pointer-events-auto flex items-end gap-2 rounded-3xl px-3 py-3 sm:gap-4 sm:px-4",
          "border bg-background/70 shadow-lg backdrop-blur-2xl"
        )}
      >
        <TooltipProvider delayDuration={100}>
          {items.map((item, i) => {
            const isActive = active === item.label
            const isHovered = hovered === i

            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <motion.div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    animate={
                      reduceMotion
                        ? undefined
                        : { scale: isHovered ? 1.18 : 1, rotate: isHovered ? -5 : 0 }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex flex-col items-center"
                  >
                    <DockControl
                      item={item}
                      isHovered={isHovered}
                      onActivate={() => setActive(item.label)}
                    />

                    {isActive && (
                      <motion.div
                        layoutId="dock-dot"
                        className="mt-1 h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                    )}
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
