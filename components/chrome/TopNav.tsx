import Link from "next/link";
import styles from "./TopNav.module.css";
import {
  HomeIcon,
  WorkIcon,
  ProjectsIcon,
  ToolsIcon,
  MailIcon,
} from "@/lib/icons";

type NavKey = "home" | "work" | "projects" | "tools";

const LINKS: { key: NavKey | "contact"; href: string; label: string; Icon: typeof WorkIcon }[] = [
  { key: "work", href: "/work", label: "Work", Icon: WorkIcon },
  { key: "projects", href: "/projects", label: "Projects", Icon: ProjectsIcon },
  { key: "tools", href: "/tools", label: "Tools", Icon: ToolsIcon },
  { key: "contact", href: "/#contact", label: "Contact", Icon: MailIcon },
];

export function TopNav({ active }: { active: NavKey }) {
  return (
    <header className={styles.wrap}>
      <nav className={styles.nav} aria-label="Primary">
        <Link
          href="/"
          aria-label="Home"
          title="Home"
          aria-current={active === "home" ? "page" : undefined}
          className={`${styles.home} ${active === "home" ? styles.active : ""}`}
        >
          <HomeIcon size={17} />
        </Link>
        <span className={styles.divider} aria-hidden />
        <ul className={styles.list}>
          {LINKS.map(({ key, href, label, Icon }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                >
                  <span className={styles.icon} aria-hidden>
                    <Icon size={16} />
                  </span>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
