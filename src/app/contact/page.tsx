"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.message || "Something went wrong.");
        return;
      }

      setStatus("Thanks! Your message was submitted.");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <nav className="navbar">
        <Link href="/" className="nav-logo">
          BR
        </Link>

        <div className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <a
            href="/Bryan-Rivas-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>

      <section className="contact-page">
        <div className="contact-heading">
          <p className="eyebrow">CONTACT</p>

          <h1>Let&apos;s build something thoughtful.</h1>

          <p>
            I&apos;m interested in UX, product design, conversational AI,
            and front-end opportunities.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">NAME</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">EMAIL</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">MESSAGE</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about what you're working on..."
              rows={7}
              required
            />
          </div>

          <button
            className="button-primary submit-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {status && (
            <p className="form-status" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Bryan Rivas</p>
        <Link href="/">Home →</Link>
      </footer>
    </main>
  );
}