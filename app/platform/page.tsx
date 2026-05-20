import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Tetraonix QA Platform | AI Root Cause Analysis for CI Failures',
  description:
    'Tetraonix QA Platform helps engineering teams detect CI failures, analyze logs, classify root cause, reduce flaky tests, and improve release confidence.',
  path: '/platform',
  image: '/qa-platform/qa-command-center.png',
  keywords: ['QA platform', 'AI root cause analysis', 'CI failure analysis', 'test automation platform', 'release confidence dashboard'],
});

const features = [
  ['CI failure intelligence', 'Connect CI signals, test output, logs, and PR metadata to understand failures faster.'],
  ['AI root cause analysis', 'Classify selector issues, environment problems, dependency failures, application defects, and flaky behavior.'],
  ['Fix recommendation workflow', 'Generate developer-ready recommendations with approval controls and review history.'],
  ['Release confidence dashboard', 'Track failure trends, flaky tests, blocked PRs, recurring issues, and engineering quality signals.'],
  ['Secure GitHub integration', 'Designed around controlled repo access, webhook verification, auditability, and private repo support.'],
  ['Team review history', 'Maintain a history of reviews, failure analysis, recommendations, and engineering decisions.'],
];

const signals = ['PR created', 'CI failed', 'Root cause found', 'Fix guidance ready'];
const executiveWorkflow = [
  {
    label: 'Signal intake',
    image: '/qa-platform/ci-intelligence-workflow.png',
    items: features.slice(0, 2),
  },
  {
    label: 'Decision intelligence',
    image: '/qa-platform/executive-fix-workflow.png',
    items: features.slice(2, 4),
  },
  {
    label: 'Governance loop',
    image: '/qa-platform/secure-ci-integration.png',
    items: features.slice(4, 6),
  },
];

export default function PlatformPage() {
  return (
    <main>
      <JsonLd
        data={serviceJsonLd(
          'Tetraonix QA Platform',
          'AI-assisted QA intelligence platform for CI failure analysis, root cause classification, flaky test reduction, and release confidence.',
          '/platform',
          'QA software platform',
        )}
      />
      <section className="page-hero platform-hero qa-image-hero">
        <img
          src="/qa-platform/qa-command-center.png"
          alt=""
          className="qa-image-hero-bg"
        />
        <div className="qa-action-layer" aria-hidden="true">
          <span className="qa-action-scan" />
          <span className="qa-action-pulse qa-action-pulse-one" />
          <span className="qa-action-pulse qa-action-pulse-two" />
          <span className="qa-action-pulse qa-action-pulse-three" />
          <span className="qa-action-beam" />
        </div>
        <div className="container qa-image-hero-content">
          <div className="qa-image-hero-copy">
            <span className="eyebrow">Tetraonix QA Platform</span>
            <h1>QA intelligence that turns failing pipelines into focused engineering action.</h1>
            <p className="lead">
              The platform helps teams detect CI failures, analyze root cause, reduce manual triage,
              and move from broken pipeline to confident release faster.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact">Request Demo</a>
              <a className="btn btn-secondary" href="/services">QA Services</a>
            </div>
            <div className="qa-media-overlay qa-image-hero-overlay">
              <h3>Failure-to-fix command flow</h3>
              <p>Live review signals are organized into clear technical decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section qa-showcase">
        <div className="container qa-showcase-grid">
          <div className="dashboard-visual">
            <h3>Failure-to-fix command flow</h3>
            <p>Live review signals are organized into clear technical decisions.</p>
            {signals.map((signal, index) => (
              <div className="signal-card" key={signal}>
                <b>{index + 1}</b>
                <span>{signal}</span>
                <em>{index === signals.length - 1 ? 'Ready' : 'Synced'}</em>
              </div>
            ))}
          </div>
          <figure className="qa-image-card">
            <img
              src="/qa-platform/root-cause-workflow.png"
              alt="AI root cause workflow transforming failed test signals into fix recommendation stages"
            />
            <figcaption>AI-assisted root cause analysis workflow</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Platform capabilities</span>
          <h2>Designed for QA modernization and release confidence.</h2>
        </div>
        <div className="container executive-pipeline">
          {executiveWorkflow.map((stage, stageIndex) => (
            <article className="executive-stage" key={stage.label}>
              <figure className="executive-stage-image">
                <img src={stage.image} alt="" />
                <figcaption>{stage.label}</figcaption>
              </figure>
              <div className="executive-stage-content">
                <span className="pipeline-stage-number">{stageIndex + 1}</span>
                <span className="feature-label">Executive workflow {stageIndex + 1}</span>
                <h3>{stage.label}</h3>
                <div className="executive-stage-items">
                  {stage.items.map(([title, body], index) => (
                    <div className="executive-capability" key={title}>
                      <strong>{stageIndex * 2 + index + 1}. {title}</strong>
                      <p>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container qa-split qa-third-row">
          <div className="workflow qa-workflow-row">
            {['PR created', 'CI runs', 'Failure detected', 'AI analysis', 'Fix guidance'].map((step, index) => (
              <div className="step" key={step}>
                <b>{index + 1}</b>
                <h3>{step}</h3>
                <p>
                  {[
                    'Pull request metadata and source context are captured.',
                    'Automated tests and quality gates execute in the pipeline.',
                    'Failed checks, logs, and error patterns are identified.',
                    'The platform classifies root cause and likely ownership.',
                    'Developers receive structured recommendations and next actions.',
                  ][index]}
                </p>
              </div>
            ))}
          </div>
          <figure className="qa-image-card qa-image-card-tall">
            <img
              src="/qa-platform/secure-ci-integration-v2.png"
              alt="Secure private repository integration and CI quality gates represented as connected enterprise panels"
            />
            <figcaption>Secure repository integration and quality gates</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
