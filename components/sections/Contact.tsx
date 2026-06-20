"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { profile } from "@/content/site";
import { MailIcon, LinkedInMark, DownloadIcon, CheckIcon, SendIcon } from "@/lib/icons";
import SmoothButton from "@/components/ui/smoothui/smooth-button";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    const normalizedEmail = email.trim();
    if (!name.trim()) next.name = "Name is required.";
    if (!normalizedEmail) next.email = "Email is required.";
    else if (!EMAIL_RE.test(normalizedEmail))
      next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSending(true);
    // Matches the design's behavior: a simulated submit + success state.
    // To actually deliver messages, POST these fields to an email service
    // (e.g. Resend / Formspree) from here. The email + LinkedIn links above
    // are the live contact channels in the meantime.
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1100);
  };

  const labelText = { fontSize: 14, fontWeight: 600, color: "var(--t3,#9f9fa9)" } as const;
  const errorText = { fontSize: 12.5, fontWeight: 500, color: "#f87171" } as const;

  return (
    <section id="contact" style={{ padding: "64px 0 40px" }}>
      <div
        className={styles.card}
        style={{
          borderRadius: 28,
          border: "1px solid var(--line,rgba(255,255,255,0.09))",
          background:
            "linear-gradient(160deg,rgba(6,182,212,0.07),rgba(47,99,201,0.06)),var(--surface,#0e0e14)",
        }}
      >
        <div className={styles.gridContact}>
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px,4vw,46px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--t1,#fff)",
                lineHeight: 1.02,
              }}
            >
              Let&apos;s Connect
            </h2>
            <p
              style={{
                margin: "16px 0 28px",
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "var(--t2,#d4d4d8)",
                maxWidth: 430,
              }}
            >
              Looking for a strategic finance partner, curious about my work, or want to talk startups
              and AI? I&apos;d love to hear from you.
            </p>

            <a href={`mailto:${profile.email}`} className={styles.linkRow} style={{ marginBottom: 11 }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "rgba(6,182,212,0.14)",
                  color: "#22d3ee",
                }}
              >
                <MailIcon size={22} />
              </span>
              <span>
                <span style={{ display: "block", fontSize: 16, color: "var(--t4,#71717b)", fontWeight: 600 }}>
                  Email
                </span>
                <span style={{ display: "block", fontSize: 18, fontWeight: 600, color: "var(--t1,#fff)" }}>
                  {profile.email}
                </span>
              </span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className={styles.linkRow}
              style={{ marginBottom: 24 }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "rgba(91,141,239,0.16)",
                  color: "#5b8def",
                }}
              >
                <LinkedInMark size={26} />
              </span>
              <span>
                <span style={{ display: "block", fontSize: 16, color: "var(--t4,#71717b)", fontWeight: 600 }}>
                  LinkedIn
                </span>
                <span style={{ display: "block", fontSize: 18, fontWeight: 600, color: "var(--t1,#fff)" }}>
                  {profile.linkedinLabel}
                </span>
              </span>
            </a>

            <a href={profile.resume} target="_blank" rel="noopener" className={styles.resumeBtn}>
              <DownloadIcon size={16} />
              Download Resume (PDF)
            </a>
          </div>

          <div>
            {sent ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "100%",
                  minHeight: 340,
                  borderRadius: 18,
                  background: "var(--surface,#111118)",
                  border: "1px solid var(--line,rgba(255,255,255,0.09))",
                  padding: 30,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 62,
                    height: 62,
                    borderRadius: 999,
                    background: "rgba(16,222,127,0.14)",
                    color: "#10de7f",
                    marginBottom: 18,
                  }}
                >
                  <CheckIcon size={30} strokeWidth={2.2} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "var(--t1,#fff)", letterSpacing: "-0.02em" }}>
                  Message Sent!
                </div>
                <div style={{ fontSize: 15, color: "var(--t3,#9f9fa9)", marginTop: 8 }}>
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className={styles.form}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  borderRadius: 18,
                  background: "var(--surface,#111118)",
                  border: "1px solid var(--line,rgba(255,255,255,0.09))",
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--t1,#fff)", letterSpacing: "-0.01em" }}>
                  Send a Message
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <label style={{ flex: 1, minWidth: 140, display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={labelText}>Name</span>
                    <input
                      className={styles.input}
                      style={errors.name ? { borderColor: "#f87171" } : undefined}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && (
                      <span id="contact-name-error" style={errorText}>
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <label style={{ flex: 1, minWidth: 140, display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={labelText}>Email</span>
                    <input
                      className={styles.input}
                      style={errors.email ? { borderColor: "#f87171" } : undefined}
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && (
                      <span id="contact-email-error" style={errorText}>
                        {errors.email}
                      </span>
                    )}
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={labelText}>Subject</span>
                  <input
                    className={styles.input}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                  />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={labelText}>Message</span>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    style={errors.message ? { borderColor: "#f87171" } : undefined}
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                    }}
                    placeholder="Your message..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message && (
                    <span id="contact-message-error" style={errorText}>
                      {errors.message}
                    </span>
                  )}
                </label>
                <SmoothButton
                  type="submit"
                  variant="candy"
                  disabled={sending}
                  className="mt-1 h-11 w-full text-[15px]"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <SendIcon size={16} />
                </SmoothButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
