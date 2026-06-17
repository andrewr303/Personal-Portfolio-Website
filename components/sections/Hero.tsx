import Link from "next/link";
import styles from "./Hero.module.css";
import { ArrowRightIcon } from "@/lib/icons";

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.dotGrid} aria-hidden />
      <div className={styles.row}>
        <div className={styles.copy}>
          <div className={styles.badge}>Financial analyst turned AI builder</div>
          <h1 className={styles.h1}>
            Andrew
            <br />
            Rodriguez
          </h1>
          <p className={styles.lead}>Founder and finance operator building AI-native products.</p>
          <p className={styles.body}>
            A finance-native founder and software engineer building{" "}
            <strong>HypeStake</strong>, an AI-powered creator-brand equity marketplace. Taken from
            concept to a working, shipped product. A rare hybrid of finance and full-stack AI
            engineering.
          </p>
          <div className={styles.ctas}>
            <Link href="/projects" className={styles.btnPrimary}>
              View My Work
              <ArrowRightIcon size={16} strokeWidth={2.2} />
            </Link>
            <a href="#contact" className={styles.btnLight}>
              Connect With Me
            </a>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.portrait} src="/assets/andrew-portrait.jpg" alt="Andrew Rodriguez" />
      </div>
    </section>
  );
}
