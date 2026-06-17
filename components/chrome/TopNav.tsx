import Link from "next/link";
import styles from "./TopNav.module.css";
import { ThemeToggle } from "./ThemeToggle";
import {
  HomeIcon,
  WorkIcon,
  ProjectsIcon,
  ToolsIcon,
  MailIcon,
} from "@/lib/icons";

type NavKey = "home" | "work" | "projects" | "tools";

const LINKS: { key: NavKey; href: string; label: string; Icon: typeof WorkIcon }[] = [
  { key: "work", href: "/work", label: "Work", Icon: WorkIcon },
  { key: "projects", href: "/projects", label: "Projects", Icon: ProjectsIcon },
  { key: "tools", href: "/tools", label: "Tools", Icon: ToolsIcon },
];

export function TopNav({ active }: { active: NavKey }) {
  return (
    <div className={styles.wrap}>
      <nav className={styles.nav} aria-label="Primary">
        <Link
          href="/"
          title="Home"
          aria-label="Home"
          className={`${styles.iconBtn} ${active === "home" ? styles.active : ""}`}
        >
          <HomeIcon size={18} />
        </Link>
        <span className={styles.divider} />
        {LINKS.map(({ key, href, label, Icon }) => (
          <Link
            key={key}
            href={href}
            className={`${styles.link} ${active === key ? styles.active : ""}`}
          >
            <Icon size={17} />
            <span className={styles.navtxt}>{label}</span>
          </Link>
        ))}
        <Link href="/#contact" className={styles.link}>
          <MailIcon size={17} />
          <span className={styles.navtxt}>Contact</span>
        </Link>
        <span className={styles.divider} />
        <ThemeToggle className={styles.iconBtn} iconSize={18} />
      </nav>
    </div>
  );
}
