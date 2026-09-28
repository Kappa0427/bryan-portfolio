import Link from "next/link";

export default function Home() {
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

      <section className="hero">
        <p className="eyebrow">
          UX DESIGNER · CONVERSATIONAL AI · FRONT-END
        </p>

        <h1>
          I design digital experiences that put people first.
        </h1>

        <p className="hero-description">
          Hi, I&apos;m Bryan — a UX Design graduate creating thoughtful
          digital experiences through user research, conversational AI,
          prototyping, usability testing, and technology.
        </p>

        <div className="hero-buttons">
          <a className="button-primary" href="#work">
            View my work
          </a>

          <Link className="button-secondary" href="/about">
            About me
          </Link>
        </div>
      </section>

      <section className="work" id="work">
        <p className="section-label">SELECTED WORK</p>
        <h2>Projects</h2>

        <article className="project-card project-featured">
          <p className="project-label">
            FEATURED CASE STUDY · 2026
          </p>

          <h3>Thiago</h3>

          <p className="project-description">
            An AI-powered experience designed to help St. Edward&apos;s
            University students discover campus organizations based on
            their interests, goals, and preferences.
          </p>

          <p className="project-tags">
            UX Research · Conversational AI · AI Logic · Usability Testing
          </p>

          <Link className="project-link" href="/work/thiago">
            View case study →
          </Link>
        </article>

        <div className="project-grid">
          <article className="small-project-card">
            <p className="project-label">UX / UI DESIGN</p>

            <h3>Mental Health Chatbot</h3>

            <p>
              A Figma prototype exploring conversational support for
              students navigating anxiety, ADHD, stress, motivation,
              and campus resources.
            </p>

            <div className="small-project-footer">
              <span>Figma</span>
              <span>Conversational UX</span>
            </div>

            <Link
              href="/work/mental-health-chatbot"
              className="project-link"
            >
              View project →
            </Link>
          </article>

          <article className="small-project-card">
            <p className="project-label">PRODUCT DESIGN</p>

            <h3>Mood Tracker</h3>

            <p>
              A mobile experience designed around simple mood tracking,
              intuitive navigation, and understandable data visualization.
            </p>

            <div className="small-project-footer">
              <span>UX Research</span>
              <span>Figma</span>
            </div>
          </article>
        </div>
      </section>

      <section className="home-about">
        <p className="section-label">ABOUT</p>

        <div>
          <h2>
            Design thinking backed by technical curiosity.
          </h2>

          <p>
            My path started in computer science before I moved into UX
            design. That combination influences how I approach products:
            understanding people first while also thinking about how the
            experience can actually be built.
          </p>

          <Link href="/about" className="text-link">
            More about me →
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Bryan Rivas</p>

        <Link href="/contact">
          Let&apos;s work together →
        </Link>
      </footer>
    </main>
  );
}