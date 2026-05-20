import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Tetraonix Consulting | AI Automation, QA Engineering, HRMS & Cloud Services',
  description:
    'Tetraonix helps enterprises modernize QA, automate operations with AI, launch HRMS workflows, strengthen cloud delivery, and scale managed support teams.',
  path: '/',
  image: '/home/enterprise-command-hero.png',
  keywords: ['AI automation company', 'QA consulting company', 'HRMS platform', 'managed technology services'],
});

const capabilities = [
  {
    title: 'AI & Automation',
    body: 'Workflow automation, LLM integrations, operating copilots, and intelligent document processing.',
    details: 'We help teams identify the right automation opportunities, design secure AI workflows, and move from experimentation to practical operational value.',
    outcomes: ['AI use-case discovery', 'Workflow and document automation', 'Governed copilots and integrations'],
    image: '/capabilities/ai-automation.png',
    alt: 'Enterprise AI automation workflow with intelligent document processing and business process panels',
  },
  {
    title: 'QA Engineering',
    body: 'Automation strategy, Playwright frameworks, CI quality gates, release validation, and test modernization.',
    details: 'Tetraonix modernizes quality programs so engineering teams can reduce flaky tests, shorten release cycles, and make CI failures easier to understand.',
    outcomes: ['Automation framework design', 'CI/CD quality gates', 'Release validation strategy'],
    image: '/capabilities/qa-engineering.png',
    alt: 'QA engineering modernization dashboard with automated test pipeline and quality gates',
  },
  {
    title: 'Cloud & DevOps',
    body: 'Azure and AWS modernization, deployment pipelines, platform engineering, and reliability practices.',
    details: 'We support cloud delivery from architecture through operations, with emphasis on secure environments, repeatable pipelines, and reliable deployments.',
    outcomes: ['Cloud modernization roadmap', 'DevOps pipeline implementation', 'Reliability and platform engineering'],
    image: '/capabilities/cloud-devops.png',
    alt: 'Cloud and DevOps architecture pipeline with deployment and reliability indicators',
  },
  {
    title: 'Cybersecurity & Risk',
    body: 'Secure SDLC, access control reviews, delivery governance, and compliance readiness.',
    details: 'Security is built into delivery planning, implementation, and support so teams can move quickly without losing control of risk, access, and auditability.',
    outcomes: ['Secure SDLC practices', 'Access and control reviews', 'Governance and audit readiness'],
    image: '/capabilities/cybersecurity-risk.png',
    alt: 'Cybersecurity and risk governance command center with access controls and audit panels',
  },
  {
    title: 'Tetraonix HRMS',
    body: 'Employee lifecycle, onboarding, leave, attendance, recruitment, and workforce visibility.',
    details: 'Our HRMS work helps organizations replace fragmented spreadsheets and manual processes with a structured people-operations platform.',
    outcomes: ['Hiring and onboarding workflows', 'Leave and attendance operations', 'Workforce reporting visibility'],
    image: '/capabilities/hrms-operations.png',
    alt: 'HRMS operations dashboard showing employee lifecycle and workforce analytics',
  },
  {
    title: 'Managed Services',
    body: 'Production support, QA support, platform administration, cloud operations, and delivery teams.',
    details: 'Tetraonix can stay with customers after launch through managed support, issue triage, platform administration, and dedicated delivery capacity.',
    outcomes: ['Production and QA support', 'Cloud and platform operations', 'Dedicated delivery teams'],
    image: '/capabilities/managed-services.png',
    alt: 'Managed services operations center with monitoring, triage, and service health panels',
  },
];

const trust = ['Consulting led', 'Product enabled', 'Secure by design', 'Support ready', 'Built for scale'];

const proof = [
  ['AI-first', 'Practical automation roadmaps and governed implementation.'],
  ['QA depth', 'Modern testing systems that improve release confidence.'],
  ['Workforce focus', 'HRMS and support models for growing delivery teams.'],
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={serviceJsonLd(
          'Enterprise AI, QA, HRMS, Cloud, and Managed Support Services',
          'Consulting, product platforms, and managed delivery services for enterprise AI automation, QA engineering, HRMS, cloud modernization, cybersecurity, and workforce support.',
          '/',
          'Technology consulting and managed services',
        )}
      />
      <section className="hero home-premium-hero">
        <img className="home-premium-hero-bg" src="/home/enterprise-command-hero.png" alt="" />
        <div className="home-premium-motion" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="container home-premium-hero-inner">
          <div className="home-premium-copy">
            <span className="eyebrow">Enterprise consulting and intelligent platforms</span>
            <h1>Build the operating system for modern enterprise execution.</h1>
            <p className="lead">
              Tetraonix helps organizations modernize QA, automate operations, launch HRMS workflows,
              strengthen cloud delivery, and scale dependable support teams.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Schedule Consultation</Link>
              <Link className="btn btn-secondary" href="/services">Explore Services</Link>
            </div>
          </div>

          <div className="home-executive-panel">
            <div className="visual-top">
              <strong>Tetraonix delivery desk</strong>
              <b>READY</b>
            </div>
            <div className="home-executive-metrics">
              <div><strong>AI</strong><small>Automation strategy</small></div>
              <div><strong>QA</strong><small>Release confidence</small></div>
              <div><strong>HR</strong><small>Workforce operations</small></div>
              <div><strong>24/7</strong><small>Managed support model</small></div>
            </div>
          </div>

          <div className="home-proof-bar">
            {proof.map(([title, body]) => (
              <div className="point glass" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-grid">
          {trust.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Enterprise capabilities</span>
          <h2>Services designed for business outcomes, not just technical delivery.</h2>
          <p>
            Tetraonix brings consulting, implementation, managed support, and product platforms together
            so customers can move from strategy to measurable execution.
          </p>
        </div>
        <div className="container enterprise-capabilities-list">
          {capabilities.map((capability) => (
            <article className="card capability-card" key={capability.title}>
              <img className="capability-card-image" src={capability.image} alt={capability.alt} />
              <div className="capability-card-body">
                <div className="card-icon">TX</div>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
                <p>{capability.details}</p>
                <div className="capability-outcomes">
                  {capability.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-head">
          <span className="eyebrow">Product platforms</span>
          <h2>Operational software for quality, people, and execution visibility.</h2>
        </div>
        <div className="container">
          <article className="product-card">
            <div className="product-visual product-visual-image">
              <img
                src="/products/qa-platform-product-showcase.png"
                alt="Professional software quality team collaborating around QA Platform dashboards and CI/CD workflow signals"
              />
            </div>
            <div>
              <span className="eyebrow">Tetraonix QA Platform</span>
              <h2>Agentic QA intelligence for modern engineering teams.</h2>
              <p>
                Detect failed CI runs, analyze logs and source context, classify root cause,
                reduce flaky tests, and move from failure to fix with greater confidence.
              </p>
              <div className="pill-row">
                <span className="pill">CI/CD quality gates</span>
                <span className="pill">Root cause analysis</span>
                <span className="pill">Fix guidance</span>
                <span className="pill">Release dashboards</span>
              </div>
              <div className="pipeline product-pipeline">
                <span>PR created</span>
                <span>CI failure detected</span>
                <span>Root cause classified</span>
                <span>Fix guidance generated</span>
              </div>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/platform">View QA Platform</Link>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-visual product-visual-image">
              <img
                src="/products/hrms-product-showcase.png"
                alt="HR leaders reviewing HRMS dashboards for workforce operations, recruiting, onboarding, attendance, and analytics"
              />
            </div>
            <div>
              <span className="eyebrow">Tetraonix HRMS</span>
              <h2>Modern HR operations for growing teams and staffing businesses.</h2>
              <p>
                Manage employee records, onboarding, leave, attendance, recruitment workflow,
                workforce visibility, and operational reporting in a clean enterprise HRMS experience.
              </p>
              <div className="pill-row">
                <span className="pill">Onboarding</span>
                <span className="pill">Recruitment</span>
                <span className="pill">Attendance</span>
                <span className="pill">Workforce insights</span>
              </div>
              <div className="pipeline product-pipeline">
                <span>Candidate pipeline</span>
                <span>Employee onboarding</span>
                <span>Leave and attendance</span>
                <span>Workforce reporting</span>
              </div>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/hrms">View HRMS</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container why-showcase">
          <figure className="why-image">
            <img
              src="/why/why-tetraonix-operating-model.png"
              alt="Enterprise operating model for strategy, AI implementation, security governance, and long-term support"
            />
            <figcaption className="why-overlay">
              <div className="section-head">
                <span className="eyebrow">Why Tetraonix</span>
                <h2>Built to help customers feel secure, supported, and ready to scale.</h2>
              </div>
              <div className="why-reasons">
                {[
                  ['Consulting-first discovery', 'We align technology work to business priorities, risks, users, timelines, and measurable value.'],
                  ['Practical AI implementation', 'We focus on AI use cases that can be deployed, governed, supported, and improved after launch.'],
                  ['Secure enterprise mindset', 'We design with authentication, auditability, data handling, and maintainability in mind.'],
                  ['Long-term support model', 'We support customers after go-live with enhancements, triage, managed services, and delivery teams.'],
                ].map(([title, body], index) => (
                  <article className="why-reason" key={title}>
                    <div className="card-icon">0{index + 1}</div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div>
            <span className="eyebrow">Ready to move forward?</span>
            <h2>Build your modernization roadmap with Tetraonix.</h2>
            <p>Start with a focused consultation for QA, HRMS, cloud delivery, enterprise AI, or managed support.</p>
            <Link className="btn btn-primary" href="/contact">Talk to Tetraonix</Link>
          </div>
          <figure className="cta-image">
            <img
              src="/cta/ready-to-move-forward.png"
              alt="Executive modernization roadmap connecting QA, HRMS, cloud delivery, enterprise AI, and managed support"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
