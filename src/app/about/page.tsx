import Link from "next/link";

export default function AboutPage() {
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

      <section className="about-hero">
        <p className="eyebrow">ABOUT ME</p>

        <h1>
          Designer by focus.
          <br />
          Technologist by curiosity.
        </h1>

        <div className="about-intro">
          <p>
            I&apos;m Bryan Rivas, a UX Design graduate from St. Edward&apos;s
            University. My work focuses on understanding people and
            turning their needs into digital experiences that feel
            intuitive and useful.
          </p>

          <p>
            Before focusing on UX, I studied computer science. That
            technical background continues to influence the way I think
            about products and has pushed me to keep developing my
            front-end skills alongside design.
          </p>
        </div>
      </section>

      <section className="about-skills">
        <p className="section-label">WHAT I DO</p>

        <div className="skills-grid">
          <div>
            <span>01</span>
            <h2>UX Design</h2>
            <p>
              User research, personas, journey mapping, information
              architecture, wireframing, prototyping, usability testing,
              accessibility, and design thinking.
            </p>
          </div>

          <div>
            <span>02</span>
            <h2>Conversational AI</h2>
            <p>
              Conversation flows, AI response structure, prompt
              engineering, decision logic, testing, iteration, and
              knowledge organization.
            </p>
          </div>

          <div>
            <span>03</span>
            <h2>Front-End</h2>
            <p>
              HTML, CSS, JavaScript, TypeScript, and an expanding
              understanding of React and Next.js.
            </p>
          </div>
        </div>
      </section>

      <section className="about-education">
        <p className="section-label">EDUCATION</p>

        <div>
          <h2>St. Edward&apos;s University</h2>
          <p>Bachelor of Arts — User Experience Design</p>
          <p>Austin, Texas · May 2026</p>
        </div>
      </section>

      <section className="about-cta">
        <p className="section-label">LET&apos;S CONNECT</p>
        <h2>Interested in working together?</h2>

        <Link href="/contact" className="button-primary">
          Contact me
        </Link>
      </section>

      <footer className="footer">
        <p>© 2026 Bryan Rivas</p>
        <Link href="/">Home →</Link>
      </footer>
    </main>
  );
}