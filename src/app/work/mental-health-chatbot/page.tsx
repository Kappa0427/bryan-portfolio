import Link from "next/link";

export default function MentalHealthChatbotPage() {
  return (
    <main className="mh-project">
      {/* NAVIGATION */}
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

      {/* HERO */}
      <header className="mh-hero">
        <p className="eyebrow">
          CONVERSATIONAL UX · FIGMA PROTOTYPE
        </p>

        <h1>Mental Health Chatbot</h1>

        <p className="mh-tagline">
          Designing a supportive way for students to navigate anxiety,
          focus, motivation, and campus resources.
        </p>

        <p className="mh-intro">
          A conversational prototype designed to explore how students
          could access mental health support through simple choices,
          guided conversation, and relevant campus resources.
        </p>

        <div className="mh-details">
          <div>
            <span>ROLE</span>
            <p>UX / UI Designer</p>
          </div>

          <div>
            <span>TOOL</span>
            <p>Figma</p>
          </div>

          <div>
            <span>TYPE</span>
            <p>Interactive Prototype</p>
          </div>

          <div>
            <span>FOCUS</span>
            <p>Conversational UX · User Flows · Accessibility</p>
          </div>
        </div>
      </header>

      {/* 01 OVERVIEW */}
      <section className="mh-section">
        <p className="section-number">01</p>

        <div className="mh-content">
          <p className="section-label">THE PROBLEM</p>

          <h2>
            Finding support should not feel like another problem to solve.
          </h2>

          <p>
            Students experiencing anxiety, difficulty focusing, low
            motivation, or stress may need support but may not know where
            to begin.
          </p>

          <p>
            The goal of this project was to explore a conversational
            experience that could guide students toward relevant support
            through clear choices rather than requiring them to search
            through multiple resources on their own.
          </p>
        </div>
      </section>

      {/* 02 STARTING EXPERIENCE */}
      <section className="mh-section mh-conversation-section">
        <p className="section-number">02</p>

        <div className="mh-content">
          <p className="section-label">STARTING THE CONVERSATION</p>

          <h2>
            Give students a clear place to begin.
          </h2>

          <p>
            The opening experience presents several common support needs
            instead of requiring the student to know exactly what kind of
            resource they should search for.
          </p>

          <div className="mh-screen-feature">
            <div className="mh-phone">
              <img
                src="/mental-health/mh-start.png"
                alt="Mental health chatbot prototype opening screen"
              />
            </div>

            <div className="mh-screen-description">
              <span>01</span>

              <h3>Simple entry points</h3>

              <p>
                Students can begin by selecting the option that most
                closely represents what they are experiencing, including
                anxiety, focus and motivation, coping strategies, or
                wanting to talk.
              </p>

              <p>
                The interface also makes emergency support visible rather
                than hiding it deeper in the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 BRANCHING FLOW */}
      <section className="mh-section mh-branch-section">
        <p className="section-number">03</p>

        <div className="mh-content">
          <p className="section-label">BRANCHING SUPPORT</p>

          <h2>
            Different needs lead to different conversations.
          </h2>

          <p>
            Instead of sending every student through the same path, the
            prototype branches based on the support they select.
          </p>

          <div className="mh-branch-grid">
            <article className="mh-branch">
              <div className="mh-phone">
                <img
                  src="/mental-health/mh-anxiety.png"
                  alt="Mental health chatbot anxiety support path showing counseling resources"
                />
              </div>

              <div className="mh-branch-copy">
                <p className="mh-branch-label">ANXIETY SUPPORT</p>

                <h3>Connect students to relevant resources.</h3>

                <p>
                  The anxiety path provides counseling resources and then
                  continues the conversation by offering additional
                  support options.
                </p>
              </div>
            </article>

            <article className="mh-branch">
              <div className="mh-phone">
                <img
                  src="/mental-health/mh-focus.png"
                  alt="Mental health chatbot focus and motivation support path"
                />
              </div>

              <div className="mh-branch-copy">
                <p className="mh-branch-label">
                  FOCUS & MOTIVATION
                </p>

                <h3>Narrow down what the student needs.</h3>

                <p>
                  The focus and motivation path introduces relevant
                  wellness resources before asking the student to identify
                  whether they are struggling with focus, procrastination,
                  or feeling overwhelmed.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 04 CONVERSATIONAL LOGIC */}
      <section className="mh-section mh-logic-section">
        <p className="section-number">04</p>

        <div className="mh-content">
          <p className="section-label">CONVERSATIONAL UX</p>

          <h2>
            Structure the conversation around the student&apos;s next
            decision.
          </h2>

          <p>
            The prototype uses progressive choices to move students from
            a broad need toward more specific support.
          </p>

          <div className="mh-flow">
            <div className="mh-flow-card">
              <span>01</span>
              <p className="mh-flow-label">IDENTIFY</p>
              <h3>What do you need?</h3>
              <p>
                Begin with broad categories that are easy to understand.
              </p>
            </div>

            <div className="mh-flow-arrow">→</div>

            <div className="mh-flow-card">
              <span>02</span>
              <p className="mh-flow-label">GUIDE</p>
              <h3>Provide direction</h3>
              <p>
                Present resources and support relevant to the selected
                path.
              </p>
            </div>

            <div className="mh-flow-arrow">→</div>

            <div className="mh-flow-card mh-flow-featured">
              <span>03</span>
              <p className="mh-flow-label">REFINE</p>
              <h3>Continue the conversation</h3>
              <p>
                Ask smaller follow-up questions to better understand what
                the student needs next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 DESIGN DECISIONS */}
      <section className="mh-section">
        <p className="section-number">05</p>

        <div className="mh-content">
          <p className="section-label">DESIGN DECISIONS</p>

          <h2>
            Keeping a sensitive experience clear and approachable.
          </h2>

          <div className="mh-decisions">
            <article>
              <span>01</span>
              <h3>Clear choices</h3>
              <p>
                Numbered options reduce the amount of information a
                student needs to enter and make the next action obvious.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Progressive conversation</h3>
              <p>
                Follow-up questions break the experience into smaller
                decisions instead of asking for everything at once.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Campus resources</h3>
              <p>
                Relevant university resources are incorporated into the
                flow so students can move from conversation to available
                support.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Urgent support visibility</h3>
              <p>
                Crisis support information is visible from the beginning
                of the experience rather than being treated as a hidden
                secondary option.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 06 REFLECTION */}
      <section className="mh-section mh-reflection-section">
        <p className="section-number">06</p>

        <div className="mh-content">
          <p className="section-label">REFLECTION</p>

          <h2>What I learned.</h2>

          <p>
            This project helped me think beyond the visual interface and
            focus on how the structure of a conversation affects the user
            experience.
          </p>

          <div className="mh-reflection-grid">
            <div>
              <span>01</span>
              <h3>Conversation is part of the interface.</h3>
              <p>
                The wording, order of choices, and follow-up questions all
                influence how easy the experience is to navigate.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Different needs require different paths.</h3>
              <p>
                Branching flows allow the experience to provide more
                relevant guidance without overwhelming the student.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Resources need context.</h3>
              <p>
                Connecting resources to the student&apos;s selected need
                can make them easier to understand and act on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* END */}
      <section className="next-project">
        <p>END OF PROJECT</p>

        <h2>Thanks for reading.</h2>

        <Link href="/#work">← Back to all work</Link>
      </section>

      <footer className="footer">
        <p>© 2026 Bryan Rivas</p>
        <Link href="/contact">Contact →</Link>
      </footer>
    </main>
  );
}