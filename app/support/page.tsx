import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Managed Support Services | QA, Cloud, Product Administration & Dedicated Teams | Tetraonix',
  description:
    'Tetraonix managed support services keep applications, QA operations, cloud environments, HRMS, product platforms, and dedicated delivery teams moving.',
  path: '/support',
  image: '/capabilities/managed-services.png',
  keywords: ['managed support services', 'QA support services', 'cloud operations support', 'dedicated delivery teams', 'product administration support'],
});

const support = [
  ['Production support', 'Application monitoring, issue triage, root cause support, release coordination, and user support.'],
  ['QA support', 'Regression execution, automation maintenance, flaky-test triage, pipeline checks, and release validation.'],
  ['Cloud operations', 'Environment monitoring, deployment support, DevOps assistance, cloud cost visibility, and reliability improvements.'],
  ['Product administration', 'QA Platform and HRMS setup, configuration, onboarding support, documentation, and user training.'],
  ['Dedicated delivery teams', 'Flexible team capacity for QA, development, data, cloud, support, and recruiting operations.'],
  ['Continuous improvement', 'Backlog grooming, enhancements, automation opportunities, reporting, and executive visibility.'],
];

const tiers = [
  ['Advisory support', 'Monthly guidance, architecture review, triage support, and roadmap steering.'],
  ['Managed services', 'Recurring operations, release support, platform administration, and service reporting.'],
  ['Dedicated team', 'Flexible delivery capacity across QA, cloud, product, HRMS, data, and support.'],
];

export default function SupportPage() {
  return (
    <main>
      <JsonLd
        data={serviceJsonLd(
          'Managed Technology Support Services',
          'Production support, QA support, cloud operations, product administration, dedicated delivery teams, and continuous improvement for enterprise systems.',
          '/support',
          'Managed support services',
        )}
      />
      <section className="page-hero support-hero">
        <div className="container page-grid">
          <div>
            <span className="eyebrow">Support and services</span>
            <h1>Managed support that keeps systems stable and teams moving.</h1>
            <p className="lead">
              Tetraonix provides support models for applications, QA operations, cloud environments,
              product platforms, and workforce execution.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact">Discuss Support Model</a>
            </div>
          </div>
          <div className="page-panel">
            <h3>Support model options</h3>
            <div className="list">
              <div>Advisory support</div>
              <div>Implementation support</div>
              <div>Managed services</div>
              <div>Dedicated team extension</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Support models</span>
          <h2>Choose the operating model that fits your current pressure.</h2>
        </div>
        <div className="container support-tiers">
          {tiers.map(([title, body]) => (
            <article className="tier-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-head">
          <span className="eyebrow">Support capabilities</span>
          <h2>Practical support for real operational needs.</h2>
        </div>
        <div className="container card-grid three">
          {support.map(([title, body]) => (
            <article className="card" key={title}>
              <div className="card-icon">SP</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div>
            <span className="eyebrow">Need dependable support?</span>
            <h2>Build a support model around your priorities.</h2>
            <p>We can support QA, cloud, application operations, HRMS, and product administration with flexible engagement options.</p>
          </div>
          <a className="btn btn-primary" href="/contact">Start Support Discussion</a>
        </div>
      </section>
    </main>
  );
}
