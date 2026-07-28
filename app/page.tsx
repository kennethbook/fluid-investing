"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const backScrollRef = useRef<HTMLDivElement>(null);
  const letterBodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = backScrollRef.current;
    const letter = letterBodyRef.current;
    if (!container || !letter) return;

    let animationFrame = 0;

    const fitLetter = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        let minimum = 11;
        let maximum = 24;
        let best = minimum;

        for (let step = 0; step < 12; step += 1) {
          const candidate = (minimum + maximum) / 2;
          letter.style.fontSize = `${candidate}px`;

          if (container.scrollHeight <= container.clientHeight + 1) {
            best = candidate;
            minimum = candidate;
          } else {
            maximum = candidate;
          }
        }

        letter.style.fontSize = `${best}px`;
      });
    };

    const observer = new ResizeObserver(fitLetter);
    observer.observe(container);
    fitLetter();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="page">
      <section
        className={`card-scene${isOpen ? " is-open" : ""}`}
        aria-label="A note from Fluid"
      >
        <div className="card">
          <button
            className="card-face card-front"
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open the note from Fluid"
            aria-hidden={isOpen}
            tabIndex={isOpen ? -1 : 0}
          >
            <span className="face-frame" aria-hidden="true" />
            <span className="front-content">
              <img
                className="front-logo"
                src="/fluid-logo.png"
                alt=""
                width={260}
                height={260}
              />
              <span className="front-title">A note from Fluid</span>
            </span>
            <span className="yc-badge">
              <span className="yc-mark" aria-hidden="true">
                Y
              </span>
              <span>Backed by Y Combinator</span>
            </span>
          </button>

          <article
            className="card-face card-back"
            aria-hidden={!isOpen}
            aria-label="Close the note from Fluid"
            role="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) return;
              setIsOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsOpen(false);
              }
            }}
          >
            <span className="face-frame" aria-hidden="true" />
            <div className="back-scroll" ref={backScrollRef}>
              <div className="letter-body" ref={letterBodyRef}>
                <p>Dear friends,</p>

                <p>
                  Fluid Markets was the first company to attempt to build futures
                  markets on public company key performance indicators. We set
                  out to give institutional investors a direct way to trade
                  their views on revenue, earnings, business segments, and
                  other fundamentals without taking broader equity market risk.
                </p>

                <p>
                  Fluid is no longer operating, but we remain proud of the idea
                  and grateful to everyone who helped us explore it.
                </p>

                <p>
                  For those who would like to trade prediction markets today,
                  feel free to visit{" "}
                  <a
                    href="https://kalshi.com/"
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    Kalshi
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://polymarket.com/"
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    Polymarket
                  </a>
                  .
                </p>

                <p>
                  If you have feedback, questions, or want to get in touch,
                  please{" "}
                  <a
                    href="mailto:kenbookbsd@gmail.com?subject=Fluid%20feedback"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    reach out
                  </a>
                  .
                </p>

                <p className="signoff">
                  Best,
                  <br />
                  The Fluid team
                </p>

                <div className="archive-links" aria-label="Fluid profiles">
                  <a
                    href="https://www.linkedin.com/posts/y-combinator_fluid-markets-yc-w23-is-building-capital-activity-7011816920689647616-Ipz9"
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                    aria-label="Fluid on LinkedIn"
                  >
                    <span className="linkedin-mark" aria-hidden="true">
                      in
                    </span>
                  </a>
                  <a
                    href="https://www.ycombinator.com/launches/IJt-fluid-markets-exchange-to-invest-in-company-earnings"
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                    aria-label="Fluid on Y Combinator"
                  >
                    <span className="yc-mark" aria-hidden="true">
                      Y
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
