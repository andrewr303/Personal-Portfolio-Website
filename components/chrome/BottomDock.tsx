import Link from "next/link";
import styles from "./BottomDock.module.css";
import { ThemeToggle } from "./ThemeToggle";
import { LinkedInColorMark, XMark } from "@/lib/icons";
import { profile } from "@/content/site";

/** Bottom floating dock — appears on the home page only (matches the design). */
export function BottomDock() {
  return (
    <div className={styles.wrap}>
      <div className={styles.dock}>
        <Link href="/work" title="Resume" aria-label="Go to work experience" className={styles.item}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/icon-resume.png" alt="" width={28} height={28} />
        </Link>
        <span className={styles.divider} />
        <a
          href={profile.github}
          target="_blank"
          rel="noopener"
          title="GitHub"
          className={styles.item}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/github.png" alt="" width={28} height={28} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener"
          title="LinkedIn"
          className={styles.item}
        >
          <LinkedInColorMark size={28} />
        </a>
        <a
          href={profile.twitter}
          target="_blank"
          rel="noopener"
          title="X"
          className={styles.item}
        >
          <XMark size={28} />
        </a>
        <a href={`mailto:${profile.email}`} title="Email" className={styles.item}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mail.png" alt="" width={28} height={28} />
        </a>
        <span className={styles.divider} />
        <ThemeToggle className={styles.item} iconSize={26} />
      </div>
    </div>
  );
}
