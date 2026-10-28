import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  CheckCircle,
  WarningCircle,
  LockKey,
  Files,
  FileText,
  Signature,
  Receipt,
  UserCircle,
  ChartBar,
  CalendarBlank,
  Export,
  Plus,
  Minus,
  X,
  List,
  MagnifyingGlass,
  CaretDown,
  Eye,
  ShieldCheck,
  Pause,
  Play,
  LinkedinLogo,
  BookOpen,
  Database,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/geist";
import {
  modules,
  roles,
  matters,
  sourceItems,
  sources,
  faqs,
  questions,
  articles,
} from "./data";
import "./styles.css";
import CinematicIntro from "./CinematicIntro";
const setIntroMenu = (open) => { if (open) smooth?.stop(); else smooth?.start(); };
const enterHomepageHero = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const offset = -(document.querySelector('.header')?.getBoundingClientRect().height || 80);
  const target = hero.getBoundingClientRect().top + window.scrollY + offset;
  if (smooth) smooth.scrollTo(target, { duration: 2.2, easing: t => t < .5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2 });
  else window.scrollTo({ top: target, behavior: 'smooth' });
};
gsap.registerPlugin(ScrollTrigger);
const iconMap = {
  CheckCircle,
  WarningCircle,
  Signature,
  Receipt,
  ChartBar,
  Files,
  UserCircle,
  LockKey,
};
const asset = (name) => "/assets/" + name;
let smooth;
function Icon({ name, ...props }) {
  const C = iconMap[name] || FileText;
  return <C weight="light" {...props} />;
}
function Button({ to, children, secondary = false, className = "", ...rest }) {
  return to ? (
    <Link
      to={to}
      className={`button ${secondary ? "secondary" : ""} ${className}`}
      {...rest}
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  ) : (
    <button
      className={`button ${secondary ? "secondary" : ""} ${className}`}
      {...rest}
    >
      {children}
      <ArrowRight size={18} />
    </button>
  );
}
function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}
function DemoLabel() {
  return <span className="demo-label">Demo — synthetic data</span>;
}
function Tag({ children, good = false }) {
  return <span className={`tag ${good ? "good" : ""}`}>{children}</span>;
}
function SectionHead({ n, label, title, children }) {
  return (
    <div className="section-head reveal" data-from="down">
      <div>
        <Eyebrow>
          {n && <span>{n} / </span>}
          {label}
        </Eyebrow>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}
function Brand() {
  return (
    <Link className="brand" to="/" aria-label="LegalMatterOps home">
      <img className="brand-lockup" src={asset("brand/logo-horizontal-color.svg")} width="274" height="41" alt="LegalMatterOps" />
    </Link>
  );
}
function Header() {
  const [open, setOpen] = useState(null);
  const location = useLocation();
  useEffect(() => setOpen(null), [location]);
  useEffect(() => {
    const f = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", f);
    return () => document.removeEventListener("keydown", f);
  }, []);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span>Supervised matter readiness</span>
        <span>Research-stage concept · synthetic preview</span>
      </div>
      <header className="header">
        <div className="nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <button
              aria-expanded={open === "products"}
              onClick={() => setOpen(open === "products" ? null : "products")}
            >
              Products <CaretDown size={12} />
            </button>
            <Link to="/platform">Platform</Link>
            <button
              aria-expanded={open === "solutions"}
              onClick={() => setOpen(open === "solutions" ? null : "solutions")}
            >
              Solutions <CaretDown size={12} />
            </button>
            <Link to="/pricing">Pricing</Link>
            <Link to="/resources">Resources</Link>
          </nav>
          <div className="nav-actions">
            <Link className="signin" to="/sign-in">
              Sign in
            </Link>
            <Button to="/request-audit">Discuss an audit</Button>
            <button
              aria-label={open === "mobile" ? "Close menu" : "Open menu"}
              aria-expanded={open === "mobile"}
              className="mobile-toggle icon-button"
              onClick={() => setOpen(open === "mobile" ? null : "mobile")}
            >
              {open === "mobile" ? <X /> : <List />}
            </button>
          </div>
        </div>
        {open === "products" && (
          <div className="mega">
            <div className="container">
              <div className="mega-intro">
                <Eyebrow>The proposed suite</Eyebrow>
                <h3>
                  A focused tool
                  <br />
                  for each step.
                </h3>
                <Link className="text-link" to="/products">
                  Explore all five <ArrowRight />
                </Link>
              </div>
              <div className="mega-links">
                {modules.map((m) => (
                  <Link key={m.slug} to={"/products/" + m.slug}>
                    <span>{m.name}</span>
                    <small>{m.short}</small>
                    <ArrowUpRight />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        {open === "solutions" && (
          <div className="mega">
            <div className="container role-menu">
              {roles.map((r) => (
                <Link key={r.slug} to={"/solutions/" + r.slug}>
                  <Icon name={r.icon} />
                  <strong>{r.name}</strong>
                  <small>{r.task}</small>
                </Link>
              ))}
            </div>
          </div>
        )}
        {open === "mobile" && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {[
              ["Products", "/products"],
              ["Platform", "/platform"],
              ["Solutions", "/solutions"],
              ["Pricing", "/pricing"],
              ["Security", "/security"],
              ["Resources", "/resources"],
              ["Company", "/company"],
              ["Sign in", "/sign-in"],
            ].map(([n, p]) => (
              <Link key={p} to={p}>
                {n}
                <ArrowUpRight />
              </Link>
            ))}
            <Button to="/request-audit">Discuss an audit</Button>
          </nav>
        )}
      </header>
    </>
  );
}
function Footer({ motion, setMotion }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-closing">
          <div className="footer-closing-copy">
            <Eyebrow>The next chapter / a considered beginning</Eyebrow>
            <h2>
              Every detail.
              <br />
              <em>In good order.</em>
            </h2>
            <p>
              Bring the sources together.
              <br />
              Keep the right people in the picture.
            </p>
            <Button to="/request-audit">Start a conversation</Button>
          </div>
          <div className="footer-folio">
            <img
              src={asset("module-proof.webp")}
              alt="Two watercolor folios connected by their source evidence."
              loading="lazy"
            />
            <div className="footer-folio-caption">
              <span>FIELD NOTES / 045</span>
              <span>Sources → People → Review</span>
            </div>
          </div>
        </div>
        <div className="footer-index-heading">
          <span>THE LEGALMATTEROPS INDEX</span>
          <span>Five modules. One accountable process.</span>
        </div>
        <div className="footer-grid">
          <div>
            <Eyebrow>Products</Eyebrow>
            {modules.map((m) => (
              <Link key={m.slug} to={"/products/" + m.slug}>
                {m.name}
              </Link>
            ))}
          </div>
          <div>
            <Eyebrow>Explore</Eyebrow>
            {[
              ["Platform", "/platform"],
              ["Features", "/features"],
              ["Why change", "/why-change"],
              ["Solutions", "/solutions"],
              ["Ecosystem fit", "/integrations"],
              ["Synthetic demo", "/demo"],
            ].map(([n, p]) => (
              <Link key={p} to={p}>
                {n}
              </Link>
            ))}
          </div>
          <div>
            <Eyebrow>Company</Eyebrow>
            {[
              ["Our approach", "/company"],
              ["Contact", "/contact"],
              ["Resources", "/resources"],
              ["Evaluation plan", "/results"],
              ["Pricing hypothesis", "/pricing"],
              ["Security & oversight", "/security"],
            ].map(([n, p]) => (
              <Link key={p} to={p}>
                {n}
              </Link>
            ))}
          </div>
          <div>
            <Eyebrow>A considered beginning</Eyebrow>
            <p>Five proposed modules. One supervised starting point.</p>
            <p className="small">
              Concept preview only. No client data, legal decisions or live
              integrations.
            </p>
            <div className="socials">
              <span title="LinkedIn profile not yet supplied">
                <LinkedinLogo size={20} /> LinkedIn <small>Coming later</small>
              </span>
              <span>
                <BookOpen size={20} /> Crunchbase <small>Not listed</small>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-signature" aria-label="LegalMatterOps">
          <img src={asset("brand/monogram-ivory.svg")} alt="" />
          <img className="footer-wordmark" src={asset("brand/wordmark-ivory.svg")} alt="LegalMatterOps" />
          <a
            href="#main"
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault();
              smooth
                ? smooth.scrollTo(0)
                : window.scrollTo({
                    top: 0,
                    behavior: motion ? "smooth" : "instant",
                  });
            }}
          >
            <ArrowUpRight />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 LegalMatterOps · Concept preview</span>
          <div>
            <Link to="/legal/privacy">Privacy</Link>
            <Link to="/legal/terms">Terms</Link>
            <Link to="/accessibility">Accessibility</Link>
            <button onClick={() => setMotion(!motion)}>
              {motion ? <Pause size={13} /> : <Play size={13} />}Motion{" "}
              {motion ? "on" : "off"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
function ReadinessCard({ compact = false }) {
  return (
    <div className={`readiness-card ${compact ? "compact" : ""}`}>
      <div className="record-heading">
        <span>LM-055</span>
        <DemoLabel />
      </div>
      <Eyebrow>Matter readiness checklist</Eyebrow>
      <ul>
        {[
          ["Intake complete", true],
          ["Conflicts unresolved", false],
          ["Engagement unsigned", false],
          ["Billing code missing", false],
        ].map(([t, g], i) => (
          <li key={t} className={i === 1 ? "unresolved" : ""}>
            {g ? <CheckCircle weight="fill" /> : <WarningCircle />}
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="card-caption">Attorney review required</div>
    </div>
  );
}
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-copy">
        <Eyebrow>Clarity at every handoff</Eyebrow>
        <h2 className="hero-title">
          <span data-hero="title">Put every piece</span>
          <span data-hero="title">in its proper place.</span>
        </h2>
        <p data-hero="copy">A supervised view of matter readiness.</p>
        <div className="button-row" data-hero="copy">
          <Button to="/demo" secondary>
            Explore the synthetic demo
          </Button>
          <Button to="/request-audit">Discuss an audit</Button>
        </div>
      </div>
      <div className="hero-art" data-hero="rain-scene">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            className="hero-fragment rain-fragment"
            key={i}
            style={{
              clipPath: `inset(${Math.floor(i / 6) * 50}% ${Math.max(0, 100 - (((i % 6) + 1) * 100) / 6 - 0.08)}% ${Math.max(0, 50 - Math.floor(i / 6) * 50 - 0.08)}% ${((i % 6) * 100) / 6}%)`,
            }}
          >
            <img
              src={asset("hero-collage.webp")}
              alt={
                i === 0
                  ? "Painted paper sources move from scattered documents toward a structured review."
                  : ""
              }
              fetchPriority="high"
            />
          </div>
        ))}
        <div className="hero-readiness" data-hero="card">
          <ReadinessCard />
        </div>
        <span className="handnote note-source">Source</span>
        <span className="handnote note-owner">Owner</span>
        <span className="handnote note-review">Review</span>
      </div>
      <div className="hero-bottom container">
        <span>
          <span className="tiny-dot" /> Five proposed modules. One accountable
          process.
        </span>
        <a
          href="#evidence"
          onClick={(e) => {
            e.preventDefault();
            smooth
              ? smooth.scrollTo("#evidence", { offset: -80 })
              : document.querySelector("#evidence").scrollIntoView();
          }}
        >
          Follow the handoff <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
function Evidence() {
  const [active, setActive] = useState(1);
  const item = sourceItems[active];
  return (
    <section className="section evidence-section" id="evidence">
      <div className="container evidence-grid">
        <div className="evidence-copy reveal" data-from="left">
          <span className="chapter-number">01</span>
          <Eyebrow>Evidence / connect the pieces</Eyebrow>
          <h2>
            From scattered
            <br />
            details to a<br />
            traceable handoff.
          </h2>
          <p>
            Every matter starts with many sources. Bring the missing steps,
            their evidence and the next responsible person into one considered
            view.
          </p>
          <Link className="text-link" to="/why-change">
            Where handoffs break <ArrowUpRight />
          </Link>
          <DemoLabel />
        </div>
        <div className="evidence-stage">
          <img
            className="evidence-illustration reveal"
            src={asset("evidence-layers.webp")}
            alt="Six source sheets unfold to reveal individual pieces of administrative evidence."
            loading="lazy"
          />
          <div className="evidence-annotations">
            {sourceItems.map((s, i) => (
              <button
                className={`annotation reveal ${active === i ? "selected" : ""}`}
                key={s.title}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <span className="annotation-index">0{i + 1}</span>
                <span>
                  <strong>{s.title}</strong>
                  <small>{s.source}</small>
                </span>
                <Tag good={i === 0}>{s.status}</Tag>
              </button>
            ))}
          </div>
          <div className="evidence-detail" key={active}>
            <div>
              <Icon name={item.icon} size={24} />
              <strong>{item.title}</strong>
              <Tag good={active === 0}>{item.status}</Tag>
            </div>
            <p>{item.body}</p>
            <span>
              {item.actor} · {item.time}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
function ModuleCard({ m, index = 0 }) {
  return (
    <article className={`module-card ${m.color}`}>
      <Link
        className="module-art"
        to={"/products/" + m.slug}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img src={asset(m.image)} alt="" loading="lazy" />
      </Link>
      <div className="module-copy">
        <Eyebrow>0{index + 1} / Proposed module</Eyebrow>
        <h3>{m.name}</h3>
        <p>{m.desc}</p>
        <Link className="module-link" to={"/products/" + m.slug}>
          <span>Explore {m.name}</span>
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </article>
  );
}
function Suite({ motion }) {
  const section = useRef(),
    track = useRef(),
    trigger = useRef();
  const [active, setActive] = useState(0);
  useLayoutEffect(() => {
    if (!motion) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1100px) and (min-height: 720px)", () => {
      const tween = gsap.to(track.current, {
        x: () =>
          -(
            track.current.scrollWidth - track.current.parentElement.clientWidth
          ),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          pin: true,
          start: "top 80px",
          end: () =>
            "+=" +
            (track.current.scrollWidth -
              track.current.parentElement.clientWidth),
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (s) => setActive(Math.round(s.progress * 4)),
        },
      });
      trigger.current = tween.scrollTrigger;
      return () => {
        trigger.current = null;
      };
    });
    return () => mm.revert();
  }, [motion]);
  const go = (i) => {
    i = Math.max(0, Math.min(4, i));
    setActive(i);
    if (trigger.current) {
      const y =
        trigger.current.start +
        (trigger.current.end - trigger.current.start) * (i / 4);
      smooth
        ? smooth.scrollTo(y)
        : window.scrollTo({ top: y, behavior: "smooth" });
    } else
      track.current.parentElement.scrollTo({
        left: i * (track.current.children[0].offsetWidth + 24),
        behavior: motion ? "smooth" : "instant",
      });
  };
  return (
    <section className="suite-section" ref={section}>
      <div className="container">
        <SectionHead
          n="02"
          label="The proposed suite"
          title="A focused tool for each step."
        >
          Five separate offers, connected by source evidence and accountable
          human review.
        </SectionHead>
        <div className="suite-nav">
          <div
            className="module-controls"
            aria-label="Explore proposed modules"
          >
            {modules.map((m, i) => (
              <button
                aria-pressed={active === i}
                key={m.slug}
                onClick={() => go(i)}
              >
                {m.name}
              </button>
            ))}
          </div>
          <div className="suite-arrows">
            <button
              className="icon-button"
              aria-label="Previous module"
              onClick={() => go(active - 1)}
              disabled={active === 0}
            >
              <ArrowLeft />
            </button>
            <button
              className="icon-button"
              aria-label="Next module"
              onClick={() => go(active + 1)}
              disabled={active === 4}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="suite-window">
          <div
            className="suite-track"
            ref={track}
            onFocusCapture={(e) => {
              const card = e.target.closest(".module-card");
              if (card && trigger.current) {
                const i = Array.from(track.current.children).indexOf(card);
                if (i !== active) go(i);
              }
            }}
          >
            {modules.map((m, i) => (
              <ModuleCard key={m.slug} m={m} index={i} />
            ))}
          </div>
        </div>
        <div className="suite-bottom">
          <span>Start with Matter Desk. Expand only with evidence.</span>
          <Link className="text-link" to="/products">
            View the complete suite <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
function Permission() {
  const [role, setRole] = useState("Intake");
  return (
    <section className="section permission-section">
      <div className="container permission-grid">
        <div className="permission-art reveal" data-from="left">
          <img
            src={asset("permission-map.webp")}
            alt="A painted permission map connects intake, billing, counsel and access oversight."
            loading="lazy"
          />
          <div className="role-switch" aria-label="Role preview">
            {["Intake", "Billing", "Counsel", "IT"].map((r) => (
              <button
                key={r}
                aria-pressed={role === r}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="permission-notice">
            <LockKey size={18} />
            {role === "Counsel"
              ? "Evidence visible · decision remains unresolved"
              : `${role} view · legal review reserved to counsel`}
          </div>
        </div>
        <div className="reveal" data-from="right">
          <Eyebrow>03 / Review, with responsibility</Eyebrow>
          <h2>
            Counsel owns
            <br />
            the decision.
          </h2>
          <p>
            See the sources, context and open items before attorney review. The
            responsible lawyer owns conflicts, engagement and representation
            decisions.
          </p>
          <div className="access-card">
            <LockKey size={22} />
            <div>
              <strong>Access restricted — demo</strong>
              <p>
                Role previews illustrate a permission boundary. All records here
                are fictional.
              </p>
            </div>
          </div>
          <div className="audit-strip">
            <div>
              <DemoLabel />
              <strong>Matter audit export</strong>
              <small>Sources · owners · unresolved items</small>
            </div>
            <Link to="/demo/report" aria-label="View illustrative audit report">
              <Export size={24} />
            </Link>
          </div>
          <Link className="text-link" to="/security">
            Explore oversight & access <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
function Incumbents() {
  const cards = [
    {
      name: "Clio",
      title: "Search. Review. Retain.",
      label: "Search & report retention",
      description:
        "Clio already documents contact and matter searches and conflict reports.",
      image: "module-desk.webp",
      steps: ["Contact", "Matter", "Report"],
      icon: MagnifyingGlass,
      href: sources.conflict,
      tone: "sage",
    },
    {
      name: "Litify",
      title: "A workflow already in motion.",
      label: "Intake & matter workflows",
      description:
        "Intake, task plans and reporting may already cover the work.",
      image: "module-signal.webp",
      steps: ["Intake", "Task plan", "Handoff"],
      icon: Files,
      href: sources.litify,
      tone: "ochre",
    },
    {
      name: "LegalMatterOps",
      title: "Make the gap visible.",
      label: "A gap to validate",
      description:
        "Test cross-system administrative readiness in one repeat matter type.",
      image: "evidence-layers.webp",
      steps: ["Evidence", "Open item", "Reviewer"],
      icon: Eye,
      href: "/integrations",
      tone: "coral",
    },
  ];
  return (
    <section className="section comparison-section">
      <div className="container">
        <SectionHead
          n="04"
          label="A considered fit"
          title="Start with what already works."
        >
          Understand what your existing systems cover. Then examine the handoff
          between them.
        </SectionHead>
        <div className="comparison-grid">
          {cards.map((c, i) => (
            <article
              className={"comparison-card ecosystem-card reveal " + c.tone}
              key={c.name}
            >
              <div className="ecosystem-visual">
                <div className="ecosystem-card-top">
                  <span>
                    0{i + 1} /{" "}
                    {i === 2 ? "PROPOSED APPROACH" : "EXISTING ECOSYSTEM"}
                  </span>
                  <c.icon size={19} weight="light" />
                </div>
                <img
                  src={asset(c.image)}
                  alt={
                    c.label +
                    " — original watercolor workflow illustration, not a product screenshot."
                  }
                  loading="lazy"
                />
                <div className="ecosystem-flow">
                  {c.steps.map((step, j) => (
                    <React.Fragment key={step}>
                      <span>{step}</span>
                      {j < 2 && <ArrowRight size={12} />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="ecosystem-copy">
                <h3>{c.name}</h3>
                <div className="ecosystem-thesis">{c.title}</div>
                <p>{c.description}</p>
                {c.href.startsWith("https") ? (
                  <a
                    className="ecosystem-link"
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read the official source <ArrowUpRight />
                  </a>
                ) : (
                  <Link className="ecosystem-link" to={c.href}>
                    Explore the proposed fit <ArrowRight />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="ecosystem-note">
          Original workflow illustrations · no partnership, connected
          integration or product-UI reproduction.
        </p>
      </div>
    </section>
  );
}
function RoleSection() {
  const [active, setActive] = useState(0);
  const r = roles[active];
  return (
    <section className="section roles-section">
      <div className="container">
        <SectionHead
          n="05"
          label="Built around responsibilities"
          title="One process. Different perspectives."
        />
        <div className="role-experience">
          <div className="role-list">
            {roles.map((role, i) => (
              <button
                key={role.slug}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={i === active ? "active" : ""}
              >
                <Icon name={role.icon} />
                <span>{role.name}</span>
                <ArrowUpRight />
              </button>
            ))}
          </div>
          <div className="role-feature" key={r.slug}>
            <div>
              <Eyebrow>{r.task}</Eyebrow>
              <h3>{r.title}</h3>
              <p>{r.detail}</p>
              <Link className="text-link" to={"/solutions/" + r.slug}>
                Explore your view <ArrowRight />
              </Link>
            </div>
            <div className="role-mini">
              <DemoLabel />
              <Icon name={r.icon} size={38} />
              <strong>{r.name}</strong>
              <span>{r.task}</span>
              <div>
                <LockKey /> Scoped responsibility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Evaluation() {
  return (
    <section className="section evaluation">
      <div className="container evaluation-grid">
        <div className="reveal">
          <Eyebrow>06 / Evidence before expansion</Eyebrow>
          <h2>
            A measurement plan.
            <br />
            Not a performance claim.
          </h2>
          <p>
            Start with a supervised retrospective review. Measure the missing
            steps and administrative effort, then decide whether there is a
            useful gap.
          </p>
          <Link className="text-link" to="/results">
            See the evaluation plan <ArrowRight />
          </Link>
        </div>
        <div className="worksheet reveal" data-from="right">
          <div className="worksheet-title">
            <FileText size={23} />
            <span>Pilot scorecard</span>
            <Tag>Targets, not results</Tag>
          </div>
          {[
            ["Operations interviews", "8"],
            ["Lawyer / IT reviewers", "3"],
            ["Anonymized past matters", "30"],
            ["Paid limited pilot", "1"],
          ].map(([n, v]) => (
            <div className="score-row" key={n}>
              <span>{n}</span>
              <strong>{v}</strong>
              <span className="unfilled">Not started</span>
            </div>
          ))}
          <p>No customer results have been published.</p>
        </div>
      </div>
    </section>
  );
}
function AuditCTA() {
  return (
    <section className="audit-cta">
      <div className="container">
        <div className="reveal">
          <Eyebrow>A focused first step</Eyebrow>
          <h2>
            Start small.
            <br />
            Learn something useful.
          </h2>
          <p>
            One repeat matter type. A supervised look at the administrative
            handoffs. Client details stay out of this website.
          </p>
          <Button to="/request-audit">Discuss a scoped audit</Button>
        </div>
        <div className="offer-sheet reveal" data-from="right">
          <Eyebrow>Proposed Matter Desk audit</Eyebrow>
          <div className="price">
            $1,200<span>Test-price hypothesis</span>
          </div>
          <ul>
            <li>
              <CheckCircle />
              30 authorized, anonymized past matters
            </li>
            <li>
              <CheckCircle />A source-linked completeness worksheet
            </li>
            <li>
              <CheckCircle />
              30-minute findings review
            </li>
            <li>
              <LockKey />
              Counsel and security approval first
            </li>
          </ul>
          <p>Not an active offer, checkout or firm quote.</p>
          <Link className="text-link" to="/pricing">
            Read the proposed scope <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  return (
    <section className="section faq">
      <div className="container faq-grid">
        <div>
          <Eyebrow>A little more clarity</Eyebrow>
          <h2>
            Good questions.
            <br />
            Clear boundaries.
          </h2>
          <img
            src={asset("module-proof.webp")}
            alt="Two paper sources arranged for careful comparison."
            loading="lazy"
          />
        </div>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={20} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
function Home({ motion }) {
  return (
    <>
      <CinematicIntro motion={motion} onMenuChange={setIntroMenu} onComplete={enterHomepageHero} />
      <Header />
      <Hero />
      <Evidence />
      <Suite motion={motion} />
      <Permission />
      <Incumbents />
      <RoleSection />
      <Evaluation />
      <AuditCTA />
      <FAQ />
    </>
  );
}
function PageHero({
  label,
  title,
  text,
  image = "module-desk.webp",
  children,
}) {
  return (
    <section className="page-hero container">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h1 data-hero="title">{title}</h1>
        <p data-hero="copy">{text}</p>
        {children || (
          <Button to="/demo" secondary>
            Explore the synthetic demo
          </Button>
        )}
      </div>
      <div className="page-hero-art" data-hero="art">
        <img
          src={asset(image)}
          alt="Watercolor paper evidence, arranged for a considered review."
        />
        <span className="art-caption">
          LegalMatterOps / A study in readiness
        </span>
      </div>
    </section>
  );
}
function ProductPage() {
  const { slug } = useParams();
  const m = modules.find((m) => m.slug === slug);
  if (!m) return <NotFound />;
  return (
    <>
      <PageHero
        label={"Proposed module / " + m.name}
        title={m.title}
        text={m.desc}
        image={m.image}
      />
      <section className="section container detail-grid">
        <div>
          <Eyebrow>What comes into view</Eyebrow>
          <h2>
            {m.short},<br />
            with context.
          </h2>
          <p>{m.output}</p>
          <div className="boundary">
            <LockKey />
            <p>{m.boundary}</p>
          </div>
          <Button to="/request-audit">Discuss the proposed scope</Button>
        </div>
        <div className="paper-panel">
          <DemoLabel />
          <h3>{m.name} / sample worksheet</h3>
          {m.visual.map((s, i) => (
            <div className="source-row" key={s}>
              <FileText />
              <span>{s}</span>
              <Tag good={m.states[i] === "Verified"}>{m.states[i]}</Tag>
            </div>
          ))}
          <ul className="feature-list">
            {m.items.map((i) => (
              <li key={i}>
                <CheckCircle />
                {i}
              </li>
            ))}
          </ul>
          <p className="small">
            Illustrative workflow. No external system changes.
          </p>
        </div>
      </section>
      <section className="section container">
        <SectionHead
          label="A supervised sequence"
          title="Evidence. Exception. Owner. Review."
        />
        <div className="step-grid">
          {[
            ["01", "Source", "Locate the original artifact and its version."],
            [
              "02",
              "Exception",
              "Identify the missing or contradictory administrative step.",
            ],
            [
              "03",
              "Owner",
              "Assign a proposed next action to the responsible role.",
            ],
            [
              "04",
              "Review",
              "Preserve the legal gate and export a scoped evidence trail.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <RelatedModules current={slug} />
    </>
  );
}
function RelatedModules({ current }) {
  return (
    <section className="section container">
      <SectionHead label="The wider picture" title="A place for every step." />
      <div className="product-grid">
        {modules
          .filter((m) => m.slug !== current)
          .slice(0, 3)
          .map((m, i) => (
            <ModuleCard m={m} key={m.slug} index={i} />
          ))}
      </div>
    </section>
  );
}
function Products() {
  return (
    <>
      <PageHero
        label="The proposed suite"
        title="Five focused tools. One considered process."
        text="Each module is a separate test of an administrative need. Start with a supervised Matter Desk audit in one practice."
        image="hero-collage.webp"
      />
      <section className="section container product-grid">
        {modules.map((m, i) => (
          <ModuleCard m={m} index={i} key={m.slug} />
        ))}
      </section>
      <AuditCTA />
    </>
  );
}
function RolePage() {
  const { slug } = useParams();
  const r = roles.find((r) => r.slug === slug);
  if (!r) return <NotFound />;
  return (
    <>
      <PageHero
        label={r.name}
        title={r.title}
        text={r.desc}
        image="permission-map.webp"
      />
      <section className="section container detail-grid">
        <div>
          <Eyebrow>Your responsibility</Eyebrow>
          <h2>{r.task}.</h2>
          <p>{r.detail}</p>
          <Button to={"/products/" + r.module} secondary>
            Explore your starting module
          </Button>
        </div>
        <div className="paper-panel">
          <DemoLabel />
          <h3>LM-055 / the next handoff</h3>
          <ReadinessCard compact />
          <div className="boundary">
            <LockKey />
            <p>
              Technical access, budget authority and legal decision authority
              are separate responsibilities.
            </p>
          </div>
        </div>
      </section>
      <Permission />
    </>
  );
}
function Platform() {
  return (
    <>
      <PageHero
        label="Platform concept"
        title="The workbench between systems and people."
        text="A source-linked administrative view around one matter and one decision. Read-only examples keep the evidence, exception and reviewer together."
        image="hero-collage.webp"
      />
      <Evidence />
      <Permission />
      <section className="section container">
        <SectionHead
          label="Defined scope"
          title="Small enough to examine closely."
        />
        <div className="comparison-grid">
          {[
            [
              "Read-only board",
              "Synthetic matter records, checklist states and named owners.",
            ],
            [
              "Source provenance",
              "A source reference, version, actor, permission and verification time for each step.",
            ],
            [
              "Human review",
              "Lawyer sign-off placeholders and illustrative audit exports. No live conflict algorithm, imports or docket computation.",
            ],
          ].map(([t, p]) => (
            <article className="comparison-card" key={t}>
              <Files size={32} />
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <AuditCTA />
    </>
  );
}
function Security() {
  return (
    <>
      <PageHero
        label="Oversight & access"
        title="Define the boundary before the data."
        text="A confidentiality-conscious conversation with counsel and IT. No claim of guaranteed privilege, certification or regulator approval."
        image="permission-map.webp"
      />
      <Permission />
      <section className="section container">
        <SectionHead
          label="Questions to resolve"
          title="Start with the people accountable."
        />
        <div className="question-grid">
          {questions.map((q, i) => (
            <article key={q}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{q}</p>
            </article>
          ))}
        </div>
        <div className="source-note">
          <BookOpen />
          <p>
            ABA Formal Opinion 512 addresses lawyers’ professional obligations
            when using generative AI. It is not blanket approval for automated
            legal judgments. Jurisdiction and firm-specific review remain
            necessary.{" "}
            <a href={sources.aba} target="_blank" rel="noreferrer">
              Read the official opinion ↗
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
function Pricing() {
  return (
    <>
      <PageHero
        label="Pricing hypothesis"
        title="A small scope. A clear question."
        text="Could a supervised retrospective audit reveal an administrative gap worth addressing? The first proposed test has a defined cohort and findings review."
        image="module-desk.webp"
      />
      <AuditCTA />
      <section className="section container">
        <SectionHead
          label="Five independent tests"
          title="Expansion is earned by evidence."
        />
        <div className="pricing-list">
          {modules.map((m, i) => (
            <Link key={m.slug} to={"/products/" + m.slug}>
              <span>0{i + 1}</span>
              <strong>{m.name}</strong>
              <span>{m.short}</span>
              <Tag>{i === 0 ? "$1,200 hypothesis" : "Scope to validate"}</Tag>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
        <p className="small">
          No payment collection. Proposed fees require a reviewed scope and
          separate agreement.
        </p>
      </section>
      <Evaluation />
    </>
  );
}
function Company() {
  return (
    <>
      <PageHero
        label="Our approach"
        title="Good operations leave a clear trail."
        text="Our vision is simple: a firm can trace why a matter was or was not ready to open, with the responsible lawyer visible at every legal gate."
        image="module-proof.webp"
      />
      <section className="section container detail-grid">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h2>
            Fewer missing steps.
            <br />
            Thoughtful oversight.
          </h2>
          <p>
            Explore ways to reduce missing administrative setup steps while
            preserving permission-aware access and attorney oversight.
          </p>
          <p>
            This is Concept 45, a research-stage exploration under the
            LegalMatterOps name. We have not demonstrated demand, customer
            results or a shipped legal platform.
          </p>
        </div>
        <div className="paper-panel">
          <Eyebrow>Principles, in practice</Eyebrow>
          {[
            ["01", "Sources before summaries"],
            ["02", "Named responsibility"],
            ["03", "A visible unresolved state"],
            ["04", "Evidence before expansion"],
          ].map(([n, t]) => (
            <div className="source-row" key={n}>
              <span>{n}</span>
              <strong>{t}</strong>
            </div>
          ))}
        </div>
      </section>
      <Evaluation />
    </>
  );
}
function Resources() {
  return (
    <>
      <PageHero
        label="The reading room"
        title="A little context for each decision."
        text="Original briefs, worksheets and questions for a supervised administrative audit. No client files or legal templates."
        image="evidence-layers.webp"
      />
      <section className="section container resource-grid">
        {Object.entries(articles).map(([slug, a], i) => (
          <Link className="resource-card" to={"/resources/" + slug} key={slug}>
            <span>Note / 0{i + 1}</span>
            <FileText size={42} weight="light" />
            <h3>{a.title}</h3>
            <p>{a.intro}</p>
            <span className="text-link">
              Read the note <ArrowUpRight />
            </span>
          </Link>
        ))}
      </section>
      <section className="section container">
        <SectionHead
          label="Primary sources"
          title="Read the underlying documentation."
        />
        <div className="source-links">
          <a href={sources.clio} target="_blank" rel="noreferrer">
            Clio / Global Search <ArrowUpRight />
          </a>
          <a href={sources.conflict} target="_blank" rel="noreferrer">
            Clio / conflict checks <ArrowUpRight />
          </a>
          <a href={sources.litify} target="_blank" rel="noreferrer">
            Litify / platform <ArrowUpRight />
          </a>
          <a href={sources.aba} target="_blank" rel="noreferrer">
            ABA / Formal Opinion 512 <ArrowUpRight />
          </a>
        </div>
      </section>
    </>
  );
}
function Article() {
  const { slug } = useParams();
  const a = articles[slug];
  if (!a) return <NotFound />;
  return (
    <>
      <PageHero
        label="Reading room / research note"
        title={a.title}
        text={a.intro}
        image={
          slug.includes("security")
            ? "permission-map.webp"
            : "module-proof.webp"
        }
      >
        <Button to="/resources" secondary>
          Back to the reading room
        </Button>
      </PageHero>
      <section className="section container article-layout">
        <aside>
          <Eyebrow>In this note</Eyebrow>
          {a.sections.map(([h], i) => (
            <a href={"#note-" + i} key={h}>
              {h}
            </a>
          ))}
          <DemoLabel />
        </aside>
        <article>
          {a.sections.map(([h, p], i) => (
            <section id={"note-" + i} key={h}>
              <span className="article-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}
          <div className="source-note">
            <BookOpen />
            <p>
              Further context: <a href={sources.clio}>Clio documentation</a>,{" "}
              <a href={sources.litify}>Litify platform</a> and{" "}
              <a href={sources.aba}>ABA Formal Opinion 512</a>. These sources do
              not endorse LegalMatterOps.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
function RequestForm({ contact = false }) {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        label={contact ? "Contact" : "Discuss a scoped audit"}
        title="Begin with a conversation."
        text="Tell us about the operational context. Keep client names, opposing parties and matter facts out of this public prototype."
        image="module-desk.webp"
      >
        <a className="text-link" href="#request-form">
          Prepare an inquiry <ArrowRight />
        </a>
      </PageHero>
      <section className="section container form-layout" id="request-form">
        <div>
          <Eyebrow>The proposed next steps</Eyebrow>
          <h2>
            One practice.
            <br />A careful beginning.
          </h2>
          <ol className="process-list">
            <li>Security review</li>
            <li>Anonymized retrospective audit</li>
            <li>Lawyer sign-off protocol</li>
            <li>Paid limited pilot</li>
          </ol>
          <div className="boundary">
            <LockKey />
            <p>
              This form is a local prototype. It does not send or retain your
              information. No files, payment or sensitive records are accepted.
            </p>
          </div>
        </div>
        <form
          className="paper-panel inquiry-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Eyebrow>Prototype inquiry form</Eyebrow>
          <div className="form-grid">
            <label>
              Work email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@firm.com"
              />
            </label>
            <label>
              Your role
              <select required defaultValue="">
                <option value="" disabled>
                  Select role
                </option>
                {[
                  "COO / practice administrator",
                  "Intake manager",
                  "Responsible counsel",
                  "IT / security",
                  "Implementation partner",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Firm size
              <select required defaultValue="">
                <option value="" disabled>
                  Select bracket
                </option>
                {["1–10", "11–50", "51–200", "201+"].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Practice type
              <select required defaultValue="">
                <option value="" disabled>
                  Select practice
                </option>
                {[
                  "Business / commercial",
                  "Estate planning",
                  "Employment",
                  "Real estate",
                  "Other practice",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Current platform
              <select required defaultValue="">
                <option value="" disabled>
                  Select platform
                </option>
                {[
                  "Clio",
                  "Litify",
                  "Another platform",
                  "Evaluating platforms",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Area of interest
              <select defaultValue="Matter Desk">
                {modules.map((m) => (
                  <option key={m.slug}>{m.name}</option>
                ))}
                <option>Security review</option>
              </select>
            </label>
          </div>
          <label className="checkbox">
            <input type="checkbox" required />I consent to this local form
            demonstration and understand that no inquiry will be sent.
          </label>
          <p className="small">
            A future live form would require a published privacy notice and
            explicit contact consent.{" "}
            <Link to="/legal/privacy">Read the prototype privacy notice.</Link>
          </p>
          <Button type="submit">Preview inquiry confirmation</Button>
          {sent && (
            <div className="form-success" role="status">
              <CheckCircle />
              <div>
                <strong>Prototype inquiry complete.</strong>
                <p>
                  Nothing was sent or saved. Contact delivery and audit booking
                  are not connected in this preview.
                </p>
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
}
function SignIn() {
  const [message, setMessage] = useState(false);
  return (
    <section className="auth-layout container">
      <div>
        <Eyebrow>A considered workspace</Eyebrow>
        <h1>
          Every piece.
          <br />
          In good order.
        </h1>
        <img
          src={asset("module-proof.webp")}
          alt="Watercolor evidence folios arranged for review."
        />
      </div>
      <div className="paper-panel auth-panel">
        <Brand />
        <h2>Welcome back.</h2>
        <p>
          Account access is not enabled for this concept. Explore the isolated
          synthetic workbench.
        </p>
        <div className="source-row">
          <LockKey />
          <span>Authentication preview</span>
        </div>
        <Button to="/demo">Enter the synthetic demo</Button>
        <button className="button secondary" onClick={() => setMessage(true)}>
          Firm SSO <ArrowRight />
        </button>
        {message && (
          <p role="status" className="form-success">
            SSO is not configured. No credentials are collected.
          </p>
        )}
        <Link className="text-link" to="/access-help">
          Need access help? <ArrowRight />
        </Link>
        <small>No production account is created.</small>
      </div>
    </section>
  );
}
function LegalPage({ kind }) {
  const content = {
    privacy: {
      title: "A transparent prototype.",
      intro: "Privacy notice / concept preview",
      parts: [
        [
          "What this site collects",
          "The prototype has no submission backend, advertising pixels or analytics SDK. Form input remains in the current page state and is not sent or stored by the application. Hosting infrastructure may record ordinary request metadata.",
        ],
        [
          "What not to share",
          "Do not provide client names, opposing parties, matter facts, privileged documents or sensitive records. This website does not accept file uploads.",
        ],
        [
          "Future contact & analytics",
          "Before a live launch, publish controller identity, contact details, hosting and retention information, and a consent-based work-email process. Planned events include security-information views and audit requests, with no matter data. Nothing is currently reported as a successful buyer commitment.",
        ],
      ],
    },
    terms: {
      title: "A study, with clear limits.",
      intro: "Terms / concept preview",
      parts: [
        [
          "Research-stage material",
          "LegalMatterOps is a concept website and isolated synthetic product demonstration. Proposed modules and pricing are hypotheses, not active commercial offers.",
        ],
        [
          "No legal workflow",
          "Nothing provides legal advice, conflict clearance, representation decisions or deadline calculation. Examples are fictional and must not be used for a real matter.",
        ],
        [
          "No endorsement or guarantees",
          "No attorney endorsement, regulator approval, privilege guarantee, certification, partnership or live integration is represented. Source links are informational.",
        ],
      ],
    },
    accessibility: {
      title: "A more considerate experience.",
      intro: "Accessibility / preview",
      parts: [
        [
          "Motion controls",
          "Use the Motion on/off control in the footer. System reduced-motion preferences disable cinematic movement by default. Content remains available with motion off.",
        ],
        [
          "Keyboard and display",
          "Navigation, forms, evidence selectors and the workbench use semantic controls and visible focus. Mobile uses vertical flow and a horizontally scrollable module rail rather than a pinned scene.",
        ],
        [
          "Ongoing review",
          "This prototype has been checked at desktop and mobile sizes. It has not undergone an independent accessibility audit.",
        ],
      ],
    },
    help: {
      title: "Access starts with a defined role.",
      intro: "Account access help",
      parts: [
        [
          "No live accounts yet",
          "Production accounts, SSO and password recovery are not connected. No credentials are requested or retained.",
        ],
        [
          "Explore safely",
          "Use the synthetic demo to review source evidence and role boundaries. IT access does not grant counsel decision authority.",
        ],
      ],
    },
  }[kind];
  return (
    <>
      <PageHero
        label={content.intro}
        title={content.title}
        text="LegalMatterOps / research-stage website"
        image="permission-map.webp"
      >
        <Button to={kind === "help" ? "/demo" : "/contact"} secondary>
          {kind === "help" ? "Enter the demo" : "Contact information"}
        </Button>
      </PageHero>
      <section className="section container legal-content">
        {content.parts.map(([h, p]) => (
          <article key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </article>
        ))}
      </section>
    </>
  );
}
function downloadDemo() {
  const data = {
    notice: "DEMO — SYNTHETIC DATA. CONCEPT PREVIEW. Illustrative only.",
    generated: "2026-10-20T10:00:00Z",
    matters,
    sources: sourceItems,
    conflicts: "Unresolved — attorney decision required",
    deadline: "No computation or validation performed",
  };
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = "LegalMatterOps-SYNTHETIC-audit.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function Demo() {
  const params = useParams(),
    location = useLocation(),
    navigate = useNavigate();
  const [search, setSearch] = useState(""),
    [filter, setFilter] = useState("All"),
    [role, setRole] = useState("Intake coordinator"),
    [source, setSource] = useState(1),
    [notice, setNotice] = useState("");
  const selected = matters.find((m) => m.id === params.id) || matters[4];
  const report = location.pathname === "/demo/report",
    pipeline = location.pathname === "/demo/pilot-pipeline";
  const shown = matters.filter(
    (m) =>
      (filter === "All" || m.status === filter) &&
      (m.id + " " + m.client + " " + m.issue)
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const counts = matters.reduce(
    (a, m) => ((a[m.status] = (a[m.status] || 0) + 1), a),
    {},
  );
  useEffect(() => {
    setNotice("");
    setSource(1);
  }, [selected.id, role]);
  return (
    <div className="demo-shell">
      <div className="demo-banner">
        <DemoLabel />
        <strong>Concept preview</strong>
        <span>No client data · no connected systems</span>
      </div>
      <div className="workbench-heading">
        <div>
          <Eyebrow>Fictional firm / Alder & Finch Practice</Eyebrow>
          <h1>Matter readiness</h1>
        </div>
        <label className="role-select">
          Preview role
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {[
              "Intake coordinator",
              "Conflicts partner",
              "Billing admin",
              "IT / security",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="workbench-tabs">
        <Link className={!report && !pipeline ? "active" : ""} to="/demo">
          Matter queue <span>10</span>
        </Link>
        <Link className={report ? "active" : ""} to="/demo/report">
          Illustrative report
        </Link>
        <Link className={pipeline ? "active" : ""} to="/demo/pilot-pipeline">
          Pilot stages
        </Link>
      </div>
      {report ? (
        <div className="demo-report">
          <div className="report-title">
            <div>
              <Eyebrow>Illustrative / 10 fictional records</Eyebrow>
              <h2>An administrative snapshot.</h2>
            </div>
            <Button onClick={downloadDemo} secondary>
              Export synthetic report
            </Button>
          </div>
          <div className="demo-metrics">
            {Object.entries(counts).map(([k, v]) => (
              <div key={k}>
                <strong>{v}</strong>
                <span>{k}</span>
                <small>Illustrative</small>
              </div>
            ))}
          </div>
          <div className="report-table">
            <div className="table-header">
              <span>Matter</span>
              <span>Administrative exception</span>
              <span>Owner</span>
              <span>State</span>
            </div>
            {matters.map((m) => (
              <Link to={"/demo/matters/" + m.id} key={m.id}>
                <span>{m.id}</span>
                <span>{m.issue}</span>
                <span>{m.owner}</span>
                <Tag good={m.status === "Completed"}>{m.status}</Tag>
              </Link>
            ))}
          </div>
          <p className="report-watermark">
            DEMO — SYNTHETIC DATA / ILLUSTRATIVE REPORT
          </p>
          <p>
            “Completed” refers only to a fictional administrative example. No
            legal clearance, measured ROI or deadline correctness is implied.
          </p>
        </div>
      ) : pipeline ? (
        <div className="pipeline-view">
          <SectionHead
            label="Proposed sequence / no actual commitments"
            title="A careful path to a limited pilot."
          />
          <div className="step-grid">
            {[
              [
                "Security review",
                "Access and safe retrospective-data protocol.",
              ],
              [
                "Anonymized audit",
                "30 authorized past matters in one practice.",
              ],
              [
                "Lawyer sign-off protocol",
                "Named counsel, review boundary and override process.",
              ],
              [
                "Paid pilot",
                "Managing partner/COO agreement and security approval.",
              ],
            ].map(([t, p], i) => (
              <article key={t}>
                <DemoLabel />
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{p}</p>
                <Tag>Not started</Tag>
              </article>
            ))}
          </div>
          <Button to="/request-audit">Discuss the proposed audit</Button>
        </div>
      ) : (
        <div className="workbench-grid">
          <aside className="matter-queue">
            <div className="queue-controls">
              <label className="search">
                <MagnifyingGlass />
                <input
                  aria-label="Search fictional matters"
                  placeholder="Find a fictional matter"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <select
                aria-label="Filter matter status"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {["All", "Pending", "Blocked", "Completed", "Rejected"].map(
                  (x) => (
                    <option key={x}>{x}</option>
                  ),
                )}
              </select>
            </div>
            <div className="queue-label">
              <span>{shown.length} of 10 records</span>
              <DemoLabel />
            </div>
            {shown.map((m) => (
              <button
                className={`matter-item ${m.id === selected.id ? "active" : ""}`}
                key={m.id}
                onClick={() => navigate("/demo/matters/" + m.id)}
              >
                <div>
                  <strong>{m.id}</strong>
                  <span className={"state-dot " + m.status.toLowerCase()} />
                </div>
                <span>{m.client}</span>
                <small>{m.issue}</small>
                <span className="queue-owner">{m.owner}</span>
              </button>
            ))}
            {!shown.length && (
              <p className="empty-state">
                No fictional matters match. Try a different search.
              </p>
            )}
          </aside>
          <section className="matter-detail">
            <div className="detail-top">
              <DemoLabel />
              <span>Read-only example</span>
            </div>
            <h2>{selected.client}</h2>
            <p className="detail-sub">
              {selected.id} · Fictional business advisory matter ·{" "}
              {selected.owner}
            </p>
            <div className="status-banner">
              <WarningCircle />
              <div>
                <strong>
                  {selected.id === "LM-055"
                    ? "3 open setup items"
                    : selected.issue}
                </strong>
                <span>
                  Proposed next action · owner review · 21 Oct 2026, 10:00
                </span>
              </div>
              <Tag good={selected.status === "Completed"}>
                {selected.status}
              </Tag>
            </div>
            <h3>Source-linked checklist</h3>
            {selected.id === "LM-055" ? (
              <>
                {sourceItems.map((s, i) => (
                  <button
                    className={
                      "checklist-row " + (source === i ? "active" : "")
                    }
                    key={s.title}
                    onClick={() => setSource(i)}
                  >
                    <Icon name={s.icon} />
                    <div>
                      <strong>{s.title}</strong>
                      <small>
                        {s.source} · {s.time}
                      </small>
                    </div>
                    <Tag good={i === 0}>{s.status}</Tag>
                  </button>
                ))}
                <div className="source-pane">
                  <div>
                    <Eyebrow>Evidence preview</Eyebrow>
                    <DemoLabel />
                  </div>
                  <h3>{sourceItems[source].source}</h3>
                  {role === "Billing admin" && source === 1 ? (
                    <div className="boundary">
                      <LockKey />
                      <p>
                        Conflict evidence is outside the billing-role preview.
                        Review remains assigned to counsel.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p>{sourceItems[source].body}</p>
                      <dl>
                        <div>
                          <dt>Actor</dt>
                          <dd>{sourceItems[source].actor}</dd>
                        </div>
                        <div>
                          <dt>Verified</dt>
                          <dd>{sourceItems[source].time}</dd>
                        </div>
                        <div>
                          <dt>Permission</dt>
                          <dd>
                            {source === 1
                              ? "Counsel review; intake status only"
                              : "Assigned administrative role"}
                          </dd>
                        </div>
                      </dl>
                    </>
                  )}
                  <small>
                    Source system: fictional worksheet. No real document is
                    displayed.
                  </small>
                </div>
              </>
            ) : (
              <div className="source-pane">
                <DemoLabel />
                <h3>{selected.issue}</h3>
                <p>
                  {selected.id === "LM-054"
                    ? "A recommendation used version 1 while the reviewer located version 2. Rejected and returned for source reconciliation."
                    : selected.id === "LM-058"
                      ? "Two fictional source references disagree. The handoff remains blocked. No date is computed or treated as correct."
                      : selected.status === "Completed"
                        ? "The administrative example has been completed. This does not represent legal clearance or an operating matter."
                        : "The assigned owner must review the administrative evidence before the proposed handoff."}
                </p>
                {selected.id === "LM-058" && (
                  <div className="date-comparison">
                    <div>
                      <strong>SRC-058-A · v1</strong>
                      <span>Fictional source date: 20 Oct 2026 · UTC</span>
                    </div>
                    <div>
                      <strong>SRC-058-B · v2</strong>
                      <span>Fictional source date: 21 Oct 2026 · UTC</span>
                    </div>
                    <Tag>Hold — docketing validation pending</Tag>
                  </div>
                )}
                <dl>
                  <div>
                    <dt>Source</dt>
                    <dd>SRC-{selected.id.slice(3)}-ADMIN · v1</dd>
                  </div>
                  <div>
                    <dt>Owner</dt>
                    <dd>{selected.owner}</dd>
                  </div>
                  <div>
                    <dt>Verified</dt>
                    <dd>20 Oct 2026 · 09:00</dd>
                  </div>
                </dl>
                <Tag>{selected.status}</Tag>
              </div>
            )}
          </section>
          <aside className="review-sidebar">
            <DemoLabel />
            <div className="counsel-gate">
              <LockKey size={26} />
              <Eyebrow>Attorney review gate</Eyebrow>
              <h3>Conflicts unresolved.</h3>
              <p>
                Jonah Reed
                <br />
                <span>Fictional conflicts partner</span>
              </p>
              <div className="gate-rule">Lawyer sign-off required</div>
              <button
                className="button secondary"
                onClick={() =>
                  setNotice(
                    role === "Conflicts partner"
                      ? "Reviewer action previewed. The gate remains unresolved; this demo cannot record legal clearance."
                      : "This role cannot sign off. The responsible lawyer owns the decision.",
                  )
                }
              >
                Preview reviewer action <Eye size={17} />
              </button>
              <small>
                No role can clear a real conflict in this prototype.
              </small>
            </div>
            {notice && (
              <p className="review-feedback" role="status">
                {notice}
              </p>
            )}
            <div className="access-log">
              <Eyebrow>Illustrative access log</Eyebrow>
              {[
                ["09:00", "Mira Chen", "Intake status checked"],
                ["09:10", "Jonah Reed", "Review assigned"],
                ["09:30", "Leena Shah", "Missing billing code flagged"],
              ].map(([t, n, s]) => (
                <div key={t}>
                  <span>{t}</span>
                  <strong>{n}</strong>
                  <small>{s}</small>
                </div>
              ))}
            </div>
            <button className="text-link" onClick={downloadDemo}>
              <Export />
              Export synthetic audit
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
function NotFound() {
  return (
    <PageHero
      label="Page not found"
      title="Let’s get you back to the right place."
      text="This page is not part of the current concept preview."
      image="module-desk.webp"
    >
      <Button to="/">Return home</Button>
    </PageHero>
  );
}
function MotionManager({ motion }) {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (!motion) return;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      anchors: true,
    });
    smooth = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const ctx = gsap.context(() => {
      const fromIfPresent = (selector, options) => {
        const targets = gsap.utils.toArray(selector);
        if (targets.length) gsap.from(targets, options);
      };
      const isHome = Boolean(document.querySelector(".hero"));
      if (isHome) {
        const heroEntrance = gsap.timeline({
          scrollTrigger: { trigger: '.hero', start: 'top 60%', once: true },
          defaults: { ease: 'power3.out' },
        });
        heroEntrance
          .from('.hero-copy .eyebrow', { y: -35, opacity: 0, duration: .8 }, 0)
          .from('.hero [data-hero="title"]', { y: -110, opacity: 0, duration: 1.3, stagger: .18 }, .12)
          .from('.hero [data-hero="copy"]', { y: -65, opacity: 0, duration: 1.1, stagger: .18 }, .55);
        gsap.utils.toArray('.rain-fragment').forEach((el, i) => {
          const rank = [2, 7, 0, 5, 9, 3, 8, 1, 6, 10, 4, 11][i];
          heroEntrance.from(el, {
            y: -620 - (i % 4) * 95, x: ((i % 3) - 1) * 25,
            opacity: 0, duration: 1.75 + (i % 3) * .13, force3D: true,
          }, .65 + rank * .075);
        });
        heroEntrance
          .from('.hero [data-hero="card"]', { y: -620, opacity: 0, duration: 1.85, ease: 'back.out(1.08)' }, 1.1)
          .from('.hero .handnote', { y: -110, opacity: 0, duration: 1.3, stagger: .13 }, 1.5)
          .from('.hero-bottom', { y: -30, opacity: 0, duration: .9 }, 1.85);
      } else {
        fromIfPresent('[data-hero="title"]', { y: 55, opacity: 0, duration: 1.3, stagger: .17, ease: 'power3.out' });
        fromIfPresent('[data-hero="copy"]', { y: 20, opacity: 0, duration: 1, delay: .25, stagger: .15, ease: 'power3.out' });
        fromIfPresent('[data-hero="art"]', { y: 35, opacity: 0, duration: 1.3, delay: .2 });
      }
      gsap.utils.toArray(".reveal").forEach((el) => {
        const dir = el.dataset.from;
        gsap.from(el, {
          x: dir === "left" ? -45 : dir === "right" ? 45 : 0,
          y: dir === "down" ? -28 : dir ? 0 : 35,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 93%", once: true },
        });
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    const timer = setTimeout(refresh, 700);
    return () => {
      clearTimeout(timer);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      smooth = null;
    };
  }, [location.pathname, motion]);
  return null;
}
function Shell() {
  const [motion, setMotion] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const location = useLocation();
  useEffect(() => {
    document.title =
      (location.pathname === "/"
        ? "Supervised matter readiness"
        : location.pathname.includes("/demo")
          ? "Synthetic workbench"
          : "A considered approach") + " | LegalMatterOps";
  }, [location.pathname]);
  return (
    <div
      className={
        location.pathname.startsWith("/demo") ? "site demo-site" : "site"
      }
    >
      <MotionManager motion={motion} />
      {location.pathname !== "/" && <Header />}
      <main id="main">
        <Routes>
          <Route path="/" element={<Home motion={motion} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/features" element={<Platform />} />
          <Route
            path="/solutions"
            element={
              <>
                <PageHero
                  label="Responsibilities"
                  title="A shared process. A clear owner."
                  text="A considered view for every person involved in matter readiness."
                  image="permission-map.webp"
                />
                <RoleSection />
                <Permission />
              </>
            }
          />
          <Route path="/solutions/:slug" element={<RolePage />} />
          <Route
            path="/why-change"
            element={
              <>
                <PageHero
                  label="The operational gap"
                  title="The pieces exist. The handoff may not."
                  text="Start with the moments between intake, conflict evidence, engagement and setup. Find the missing administrative step before proposing another workflow."
                  image="evidence-layers.webp"
                />
                <Evidence />
                <Incumbents />
                <Evaluation />
              </>
            }
          />
          <Route
            path="/integrations"
            element={
              <>
                <PageHero
                  label="Ecosystem fit"
                  title="Respect the systems already doing the work."
                  text="Clio, Litify, staff and approved automation are the starting point. These are ecosystem references, not connected integrations or partnerships."
                  image="module-signal.webp"
                />
                <Incumbents />
                <Button
                  to="/resources/incumbent-comparison"
                  className="center-button"
                >
                  Read the comparison
                </Button>
                <AuditCTA />
              </>
            }
          />
          <Route path="/security" element={<Security />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/results"
            element={
              <>
                <PageHero
                  label="Evaluation plan"
                  title="Evidence is the next milestone."
                  text="There are no measured customer outcomes yet. This is the proposed method for deciding whether to proceed."
                  image="module-signal.webp"
                />
                <Evaluation />
                <ArticleMethod />
              </>
            }
          />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Article />} />
          <Route path="/request-audit" element={<RequestForm />} />
          <Route path="/contact" element={<RequestForm contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/access-help" element={<LegalPage kind="help" />} />
          <Route path="/legal/privacy" element={<LegalPage kind="privacy" />} />
          <Route path="/legal/terms" element={<LegalPage kind="terms" />} />
          <Route
            path="/accessibility"
            element={<LegalPage kind="accessibility" />}
          />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/matters/:id" element={<Demo />} />
          <Route path="/demo/report" element={<Demo />} />
          <Route path="/demo/pilot-pipeline" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer motion={motion} setMotion={setMotion} />
    </div>
  );
}
function ArticleMethod() {
  return (
    <section className="section container">
      <SectionHead label="Decision protocol" title="Proceed. Pivot. Or stop." />
      <div className="comparison-grid">
        {[
          [
            "Proceed",
            "Partner sign-off, security approval and a measured gap beyond existing tools.",
          ],
          [
            "Pivot",
            "The existing system covers intake; investigate operational reporting instead.",
          ],
          [
            "Stop",
            "The firm cannot provide safe retrospective data or raises a confidentiality objection.",
          ],
        ].map(([h, p]) => (
          <article className="comparison-card" key={h}>
            <h3>{h}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
      <Link className="text-link" to="/resources/pilot-methodology">
        Read the measurement method <ArrowRight />
      </Link>
    </section>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
