"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useTheme } from "@once-ui-system/core";
import styles from "./BottomDock.module.css";
import { LinkedInColorMark, XMark, SunIcon, MoonIcon } from "@/lib/icons";
import { profile } from "@/content/site";

/* macOS-style magnification: an item grows as the cursor nears its centre.
   Width/height (not transform) drive the growth so neighbours shift aside. */
const REST = 42;
const PEAK = 54;
const RANGE = 130;
const SPRING = { mass: 0.1, stiffness: 170, damping: 14 };

type DockItemProps = {
  mouseX: MotionValue<number>;
  magnify: boolean;
  label: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

function DockItem({ mouseX, magnify, label, icon, href, external, onClick }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const size = useSpring(useTransform(distance, [-RANGE, 0, RANGE], [REST, PEAK, REST]), SPRING);
  const iconScale = useSpring(
    useTransform(distance, [-RANGE, 0, RANGE], [1, PEAK / REST, 1]),
    SPRING,
  );

  const sizeStyle = magnify ? { width: size, height: size } : undefined;
  const iconNode = (
    <motion.span className={styles.iconWrap} style={magnify ? { scale: iconScale } : undefined}>
      {icon}
    </motion.span>
  );

  const common = { className: styles.item, "aria-label": label, title: label };
  let control: ReactNode;
  if (onClick) {
    control = (
      <button type="button" onClick={onClick} {...common}>
        {iconNode}
      </button>
    );
  } else if (href && (external || !href.startsWith("/"))) {
    // External links and mailto/tel: plain anchors; only off-site links get target/rel.
    control = (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...common}>
        {iconNode}
      </a>
    );
  } else {
    control = (
      <Link href={href ?? "#"} {...common}>
        {iconNode}
      </Link>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={styles.slot}
      style={sizeStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {control}
      <AnimatePresence>
        {hovered && (
          <motion.span
            className={styles.tooltip}
            aria-hidden
            initial={{ opacity: 0, y: 6, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 4, x: "-50%" }}
            transition={{ duration: 0.16 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** Bottom floating dock — appears on the home page only (matches the design). */
export function BottomDock() {
  const mouseX = useMotionValue(Infinity);
  const reduceMotion = useReducedMotion();

  // Magnify only on hover-capable, fine-pointer devices — never on touch.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);
  const magnify = canHover && !reduceMotion;

  // Theme toggle, rendered as a dock item so it magnifies like the rest.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isLight = mounted && resolvedTheme === "light";

  return (
    <div className={styles.wrap}>
      <motion.div
        className={styles.dock}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <DockItem
          mouseX={mouseX}
          magnify={magnify}
          label="Resume"
          href="/work"
          icon={
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/assets/icon-resume.png" alt="" width={28} height={28} />
          }
        />
        <span className={styles.divider} />
        <DockItem
          mouseX={mouseX}
          magnify={magnify}
          label="GitHub"
          href={profile.github}
          external
          icon={
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/assets/github.png" alt="" width={28} height={28} />
          }
        />
        <DockItem
          mouseX={mouseX}
          magnify={magnify}
          label="LinkedIn"
          href={profile.linkedin}
          external
          icon={<LinkedInColorMark size={28} />}
        />
        <DockItem
          mouseX={mouseX}
          magnify={magnify}
          label="X"
          href={profile.twitter}
          external
          icon={<XMark size={28} />}
        />
        <DockItem
          mouseX={mouseX}
          magnify={magnify}
          label="Email"
          href={`mailto:${profile.email}`}
          icon={
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/assets/mail.png" alt="" width={28} height={28} />
          }
        />
        <span className={styles.divider} />
        <DockItem
          mouseX={mouseX}
          magnify={magnify}
          label={isLight ? "Switch to dark theme" : "Switch to light theme"}
          onClick={() => setTheme(isLight ? "dark" : "light")}
          icon={isLight ? <MoonIcon size={26} /> : <SunIcon size={26} />}
        />
      </motion.div>
    </div>
  );
}
