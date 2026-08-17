# ROADMAP.md — Website OS Phases

Status against the 14-phase plan the Website OS mandate was originally
scoped in. Kept current whenever a phase (or part of one) ships — a stale
roadmap is worse than none. Priority order follows the ranking Requested
alongside the mandate: architecture > reusability > component quality >
theme quality > registry > reference intelligence > builder experience >
showcase > animation > nice-to-have.

## Done

| Phase                  | What shipped                                                                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Repository analysis | Full inventory — see the Context section of the approved plan and `ARCHITECTURE.md`.                                                                                                        |
| 2. Architecture        | Five-layer model documented (`ARCHITECTURE.md`), `CLAUDE.md` §8 reconciles library growth with client-project minimalism.                                                                   |
| 3. Design token system | `--border-width`, `--shadow-surface`, `--section-rhythm`, `--spotlight-glow` added; wired into `Section`, `Button`, `TestimonialCard`, `SpotlightCard`, `FeatureIcon` (`DESIGN_SYSTEM.md`). |
| 4. Theme system        | Three new structurally distinct looks — brutalist, swiss, organic — alongside the original six (`THEMES.md`).                                                                               |
| 7. Component registry  | `src/registry/components.ts`, 45 entries (`COMPONENT_REGISTRY.md`).                                                                                                                         |
| 8. Reference library   | 7 sources researched and documented, patterns extracted, cross-source analysis (`REFERENCE_LIBRARY.md`).                                                                                    |
| 11. AI website builder | Discovery workflow documented as a Claude workflow, not an in-app UI (`AI_WEBSITE_BUILDER.md`).                                                                                             |
| 12. Website Architect  | Pre-coding decision checklist + priority order (`WEBSITE_ARCHITECT.md`).                                                                                                                    |
| 14. Documentation      | This round's 10 new root documents, cross-linked, `PLAN.md`/`README.md` updated to point to them.                                                                                           |

## Backlog (not built — no speculative work, CLAUDE.md §8)

| Phase                                       | Scope                                                                                                                                  | Why deferred                                                                                                                                                                                                         |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5. Component library — full variant catalog | The 150+ variants named in the original mandate (13 nav, 18 hero, 15 button, 14 card, 11 grid variants, etc.)                          | No concrete client brief needs most of these yet; building them speculatively is exactly the overengineering CLAUDE.md §1 and the mandate's own §40 warn against. Add variants as real briefs demand them.           |
| 6. Motion system — remaining patterns       | Page transitions, parallax, marquee, cursor effects, mask reveal, scroll progress                                                      | `MOTION_SYSTEM.md` lists what exists; add each only when a component needs it.                                                                                                                                       |
| — Grid system                               | Bento, masonry, horizontal-scroll, asymmetric grids                                                                                    | Flagged directly by reference-library research (`pattern-analysis.md`) as the clearest real gap; next candidate when a portfolio-heavy brief needs it.                                                               |
| — Real booking/calendar UI                  | An actual in-house availability/slot-picker, beyond today's external-tool link                                                         | `Booking` intentionally stays a link-out per the original feature-flag decision; revisit only if a client brief specifically rejects external tools.                                                                 |
| 9. Showcase                                 | A real filterable catalog UI (category/theme/style/industry/animation/complexity)                                                      | `/looks` covers look × hero-variant preview today; a full registry-driven showcase is worth building once the registry has proven itself in real project use.                                                        |
| 10. Template/preset system                  | Named presets bundling look + typography + component selection per industry (`{ name: "Luxury Architecture", theme: "editorial", … }`) | Premature before enough real client projects exist to generalize a preset from — presets should be extracted from actual finished sites, not guessed upfront.                                                        |
| 13. Self-review system                      | Structured design/UX/content/technical scoring with an explicit "would I show a paying client" gate                                    | `WEBSITE_ARCHITECT.md`'s post-build check covers the essentials today (DESIGN.md §1/§18, mobile, build health); a fuller scored system is worth building once there's a second real project to calibrate it against. |
| — In-app builder UI                         | A hosted, form-based builder experience                                                                                                | This repo is a static marketing site with no backend/admin; a real builder UI is a separate application and a materially bigger project than a library extension.                                                    |

## Adding to this roadmap

A backlog item graduates to "done" the same way anything else in this
library does: a concrete brief needs it, it gets built completely (not
partially), documented, registered, and verified — never started and
left half-finished (CLAUDE.md §6 "never commit half-finished code"
applies at the roadmap level too).
