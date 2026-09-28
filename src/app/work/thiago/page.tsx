import Link from "next/link";

export default function ThiagoPage() {
  return (
    <main className="case-study">
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
      <header className="case-hero">
        <p className="eyebrow">CONVERSATIONAL AI · UX DESIGN</p>

        <h1>Thiago</h1>

        <p className="case-tagline">
          Helping students find where they belong.
        </p>

        <p className="case-intro">
          Thiago is an AI-powered chatbot designed to help students at
          St. Edward&apos;s University discover campus organizations that
          match their interests, preferences, personality, and goals.
        </p>

        <div className="case-details">
          <div>
            <span>ROLE</span>
            <p>UX Designer / Conversational AI Designer</p>
          </div>

          <div>
            <span>PLATFORM</span>
            <p>BoodleBox AI</p>
          </div>

          <div>
            <span>YEAR</span>
            <p>2026</p>
          </div>

          <div>
            <span>FOCUS</span>
            <p>Research · AI Logic · Conversation Design · Testing</p>
          </div>
        </div>
      </header>

      {/* 01 CHALLENGE */}
      <section className="case-section">
        <p className="section-number">01</p>

        <div className="case-content">
          <p className="section-label">THE CHALLENGE</p>

          <h2>
            Students had plenty of options, but no easy way to find the
            right one.
          </h2>

          <p>
            St. Edward&apos;s University offers a wide range of student
            organizations, but many students are unaware of the
            opportunities available to them.
          </p>

          <p>
            Information can be spread across university resources,
            social media, flyers, and other channels. Finding an
            organization that feels relevant can become an unnecessarily
            complicated process.
          </p>

          <p>
            Our goal was to create a centralized and personalized way
            for students to discover organizations without requiring
            them to manually browse through a large directory.
          </p>
        </div>
      </section>

      {/* 02 RESEARCH */}
      <section className="case-section">
        <p className="section-number">02</p>

        <div className="case-content">
          <p className="section-label">RESEARCH & INSIGHTS</p>

          <h2>
            Students weren&apos;t struggling with a lack of organizations.
            They were struggling to discover them.
          </h2>

          <p>
            We used surveys to understand how students currently
            discover campus organizations, what frustrates them during
            the process, and what prevents them from getting involved.
          </p>

          <div className="insight-grid">
            <article className="insight-card">
              <span>01</span>
              <h3>Low awareness</h3>
              <p>
                Students did not always know which organizations were
                available, creating an immediate discovery barrier.
              </p>
            </article>

            <article className="insight-card">
              <span>02</span>
              <h3>Scattered information</h3>
              <p>
                Finding organization information could require looking
                across multiple university and social channels.
              </p>
            </article>

            <article className="insight-card">
              <span>03</span>
              <h3>No personalized discovery</h3>
              <p>
                Students wanted recommendations based on their interests
                rather than manually searching through roughly 140
                organizations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 03 DEFINE */}
      <section className="case-section define-section">
        <p className="section-number">03</p>

        <div className="case-content">
          <p className="section-label">DEFINE</p>

          <h2>
            The real problem wasn&apos;t finding information. It was
            finding belonging.
          </h2>

          <p>
            The research shifted our focus away from building another
            directory. Students needed a way to discover communities
            that felt relevant to who they were.
          </p>

          <div className="persona-card">
            <div className="persona-top">
              <span>PRIMARY PERSONA</span>
              <span>INCOMING FRESHMAN</span>
            </div>

            <h3>Meet Andrew.</h3>

            <p className="persona-lead">
              Andrew is entering college without an established social
              circle and wants to find people and communities where he
              feels like he belongs.
            </p>

            <div className="persona-details">
              <div>
                <span>NEEDS</span>
                <p>
                  A simple way to discover organizations matching his
                  interests and personality.
                </p>
              </div>

              <div>
                <span>FRUSTRATION</span>
                <p>
                  Too many options spread across different places with
                  little guidance about where to begin.
                </p>
              </div>

              <div>
                <span>GOAL</span>
                <p>
                  Find communities where he can meet people, participate,
                  and feel connected to campus.
                </p>
              </div>
            </div>
          </div>

          <div className="design-question">
            <span>DESIGN QUESTION</span>

            <p>
              How might we help students discover campus organizations
              that align with who they are without overwhelming them
              with options?
            </p>
          </div>
        </div>
      </section>

      {/* 04 DESIGNING THE AI */}
      <section className="case-section ai-section">
        <p className="section-number">04</p>

        <div className="case-content">
          <p className="section-label">DESIGNING THE AI</p>

          <h2>
            Turning student input into meaningful recommendations.
          </h2>

          <p>
            My role extended beyond the interface. I researched and
            gathered information about student organizations, helped
            structure the information Thiago would use, and designed
            the logic and response structure behind the AI experience.
          </p>

          <p>
            The goal was to make the interaction conversational while
            giving Thiago enough context to make useful recommendations.
          </p>

          <div className="ai-flow">
            <div className="ai-flow-card">
              <span>01</span>
              <p className="ai-flow-label">STUDENT INPUT</p>
              <h3>Understand the student</h3>

              <p>
                Gather context around interests, personality, goals,
                preferences, and availability.
              </p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="ai-flow-card">
              <span>02</span>
              <p className="ai-flow-label">CONTEXT</p>
              <h3>Interpret what matters</h3>

              <p>
                Use the student&apos;s answers as context against the
                organization information gathered for the system.
              </p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="ai-flow-card ai-flow-featured">
              <span>03</span>
              <p className="ai-flow-label">THIAGO AI LOGIC</p>
              <h3>Find meaningful matches</h3>

              <p>
                Recommendation and response logic guide Thiago toward
                useful matches rather than simply returning a long list.
              </p>
            </div>
          </div>

          {/* REAL THIAGO EXPERIENCE */}
          <div className="thiago-demo">
            <div className="thiago-demo-heading">
              <p className="section-label">THE EXPERIENCE IN ACTION</p>

              <h3>Building context through conversation.</h3>

              <p>
                Rather than immediately presenting students with a long
                list of organizations, Thiago begins by learning about
                the student through conversational questions.
              </p>
            </div>

            <figure className="thiago-screenshot">
              <img
                src="/thiago/thiago-start.png"
                alt="Thiago beginning a conversation with a student looking for a campus organization"
              />

              <figcaption>
                <span>01</span>

                <div>
                  <strong>Starting the conversation</strong>

                  <p>
                    A student can begin with an open-ended request.
                    Thiago responds by asking about their interests
                    instead of immediately returning organization
                    recommendations.
                  </p>
                </div>
              </figcaption>
            </figure>

            <figure className="thiago-screenshot">
              <img
                src="/thiago/thiago-context.png"
                alt="Thiago gathering information about a student's interests, goals, and availability"
              />

              <figcaption>
                <span>02</span>

                <div>
                  <strong>Building student context</strong>

                  <p>
                    Thiago progressively gathers information about
                    interests, goals, and availability. These responses
                    provide additional context for generating more
                    relevant recommendations.
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 05 BUILD & TEST */}
      <section className="case-section testing-section">
        <p className="section-number">05</p>

        <div className="case-content">
          <p className="section-label">BUILD 1.0 & TESTING</p>

          <h2>
            The concept worked. The conversation needed work.
          </h2>

          <p>
            We built a functional version of Thiago in BoodleBox and
            tested the experience with students to evaluate ease of use,
            clarity, and the relevance of its recommendations.
          </p>

          <div className="testing-summary">
            <div className="testing-positive">
              <p className="testing-label">WHAT WORKED</p>

              <h3>Students understood the experience.</h3>

              <p>
                Students were willing to engage with Thiago and found
                the conversational approach more engaging than
                traditional browsing.
              </p>
            </div>

            <div className="testing-problem">
              <p className="testing-label">FRICTION</p>

              <h3>The conversation was doing too much.</h3>

              <p>
                Repeated questions, repetitive wording, demanding
                prompts, and a large instruction structure made parts
                of the experience less efficient.
              </p>
            </div>
          </div>

          <div className="testing-findings">
            <div>
              <span>01</span>
              <h3>Repeated questions</h3>
              <p>
                Information was sometimes requested after students had
                already provided it.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Repetitive language</h3>
              <p>
                Similar wording made parts of the conversation feel
                less natural.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Heavy prompts</h3>
              <p>
                Some questions demanded too much information from the
                student at once.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Response efficiency</h3>
              <p>
                The instruction structure needed to be simplified to
                improve the interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 ITERATION */}
      <section className="case-section iteration-section">
        <p className="section-number">06</p>

        <div className="case-content">
          <p className="section-label">ITERATION</p>

          <h2>
            Simplifying the system made the experience stronger.
          </h2>

          <p>
            Testing showed us where the conversation was creating
            unnecessary friction. We shortened and reorganized the
            instructions, removed redundant behavior, and reconsidered
            how recommendations were presented.
          </p>

          <div className="before-after">
            <div className="before-card">
              <p className="comparison-label">BEFORE</p>

              <h3>Build 1.0</h3>

              <ul>
                <li>Long instruction structure</li>
                <li>Repeated questions</li>
                <li>Repetitive wording</li>
                <li>Student summary before matching</li>
                <li>More demanding interactions</li>
              </ul>
            </div>

            <div className="after-card">
              <p className="comparison-label">AFTER</p>

              <h3>Refined experience</h3>

              <ul>
                <li>Shorter, clearer instructions</li>
                <li>Reduced redundancy</li>
                <li>Fallback logic for incomplete input</li>
                <li>Direct recommendations</li>
                <li>Clear recommendation hierarchy</li>
              </ul>
            </div>
          </div>

          <div className="iteration-callout">
            <p className="section-label">KEY CHANGE</p>

            <h3>
              We moved from building a profile first to using student
              input directly as recommendation context.
            </h3>
          </div>
        </div>
      </section>

      {/* 07 FINAL SYSTEM */}
      <section className="case-section final-system-section">
        <p className="section-number">07</p>

        <div className="case-content">
          <p className="section-label">
            FINAL RECOMMENDATION SYSTEM
          </p>

          <h2>
            Enough variety to encourage discovery. Not enough to
            overwhelm.
          </h2>

          <p>
            The refined system organizes recommendations into three
            levels, creating a progression from familiar matches to a
            more exploratory option.
          </p>

          <div className="final-recommendations">
            <article>
              <span>01</span>
              <p className="recommendation-type">CORE FITS</p>
              <h3>Closest alignment</h3>

              <p>
                One or two organizations closely aligned with the
                student&apos;s interests, personality, and goals.
              </p>
            </article>

            <article>
              <span>02</span>
              <p className="recommendation-type">GOOD FITS</p>
              <h3>Relevant expansion</h3>

              <p>
                One or two organizations that still align with the
                student while pushing slightly beyond their initial
                comfort zone.
              </p>
            </article>

            <article>
              <span>03</span>
              <p className="recommendation-type">STRETCH OPTION</p>
              <h3>Something new</h3>

              <p>
                One genuine reach that gives the student something
                different but worthwhile to consider.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 08 OUTCOME */}
      <section className="case-section outcome-section">
        <p className="section-number">08</p>

        <div className="case-content">
          <p className="section-label">OUTCOME</p>

          <h2>
            From a directory problem to a personalized discovery
            experience.
          </h2>

          <p>
            Thiago brought organization information into a more
            centralized conversational experience and used student
            context to make discovery more personal.
          </p>

          <p>
            Testing indicated that students found the conversational
            approach intuitive and engaging. Their feedback also
            directly shaped how the recommendation experience evolved.
          </p>

          <div className="outcome-statement">
            <p>
              The strongest lesson wasn&apos;t that AI could recommend a
              club. It was that the quality of the experience depended
              on how carefully we designed the conversation around the
              student.
            </p>
          </div>
        </div>
      </section>

      {/* 09 REFLECTION */}
      <section className="case-section reflection-section">
        <p className="section-number">09</p>

        <div className="case-content">
          <p className="section-label">REFLECTION</p>

          <h2>What I learned.</h2>

          <div className="reflection-grid">
            <div>
              <span>01</span>
              <h3>AI still needs UX.</h3>

              <p>
                Response structure, wording, fallback behavior, and
                information architecture have a major effect on how an
                AI experience feels.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>More logic isn&apos;t always better.</h3>

              <p>
                Simplifying instructions and removing unnecessary
                behavior helped make the system more focused.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Testing changes the product.</h3>

              <p>
                Student feedback exposed friction that was difficult to
                see while building the initial experience.
              </p>
            </div>
          </div>

          <div className="future-work">
            <p className="section-label">
              IF I CONTINUED THE PROJECT
            </p>

            <p>
              I would explore a stronger recommendation algorithm,
              connect the experience to continuously updated
              organization and event information, and conduct additional
              testing with a larger range of students.
            </p>
          </div>
        </div>
      </section>

      {/* END */}
      <section className="next-project">
        <p>END OF CASE STUDY</p>

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