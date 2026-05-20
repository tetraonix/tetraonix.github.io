import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Enterprise Technology Services | AI, QA, Cloud, Cybersecurity & Support | Tetraonix',
  description:
    'Explore Tetraonix enterprise services for AI automation, QA engineering, cloud modernization, cybersecurity, data engineering, workforce solutions, and managed support.',
  path: '/services',
  image: '/capabilities/ai-automation.png',
  keywords: ['enterprise technology services', 'AI automation consulting', 'QA engineering modernization', 'cloud consulting services'],
});

const services = [
  ['AI & Automation Consulting', 'Identify high-value workflows, design AI copilots, automate manual operations, and implement LLM-enabled business processes.'],
  ['QA Engineering Modernization', 'Build scalable test automation, stabilize CI/CD pipelines, reduce flaky tests, define quality gates, and improve release confidence.'],
  ['Cloud & Microsoft Solutions', 'Modernize applications, design Azure/AWS environments, implement DevOps pipelines, and improve cloud reliability.'],
  ['Cybersecurity & Risk', 'Assess application and delivery risk, improve secure SDLC, review access controls, and prepare enterprise delivery governance.'],
  ['Data & AI Engineering', 'Create ETL pipelines, data integrations, analytics foundations, model integrations, and operational dashboards.'],
  ['Talent & Workforce Solutions', 'Provide contract staffing, dedicated delivery teams, recruiter support, and workforce scaling for technology initiatives.'],
  ['Managed Support Services', 'Support production systems, QA operations, product administration, cloud environments, and ongoing platform enhancements.'],
  ['Implementation Services', 'Deliver product pilots, workflow setup, integrations, documentation, training, and operational transition support.'],
];

const stages = [
  ['Assess', 'Current state, risks, stakeholders, target outcomes, and pilot scope.'],
  ['Design', 'Operating model, architecture, controls, roadmap, and success metrics.'],
  ['Build', 'Implementation, integration, test automation, cloud, data, and product delivery.'],
  ['Support', 'Managed services, triage, documentation, optimization, and team extension.'],
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={serviceJsonLd(
          'Enterprise Technology Consulting Services',
          'AI automation, QA engineering, cloud modernization, cybersecurity, data engineering, workforce solutions, implementation, and managed support services.',
          '/services',
          'Enterprise technology consulting',
        )}
      />
      <section className="page-hero services-hero">
        <div className="container page-grid">
          <div>
            <span className="eyebrow">Services</span>
            <h1>Enterprise services shaped around outcomes, speed, and accountable execution.</h1>
            <p className="lead">
              Tetraonix helps customers move from advisory to implementation with a clear delivery model
              across AI, QA, cloud, cybersecurity, data, workforce, and managed support.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact">Plan an engagement</a>
              <a className="btn btn-secondary" href="/support">Explore support</a>
            </div>
          </div>
          <div className="pattern-panel">
            <div className="pattern-panel-inner hero-stat-stack">
              <div className="hero-stat"><strong>2-4 wk</strong><span>Focused assessment and roadmap option</span></div>
              <div className="hero-stat"><strong>6-12 wk</strong><span>Practical pilot and implementation path</span></div>
              <div className="hero-stat"><strong>Ongoing</strong><span>Managed support and delivery team extension</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-lanes">
          <div>
            <span className="eyebrow">How we engage</span>
            <h2>Flexible entry points for modernization work.</h2>
            <p>
              Start with a targeted advisory sprint, move into implementation, or bring Tetraonix in as a support partner
              for ongoing operations.
            </p>
            <div className="lane-menu">
              <span>Assessment and roadmap</span>
              <span>Product pilot and integration</span>
              <span>Implementation and delivery</span>
              <span>Managed support and optimization</span>
            </div>
          </div>
          <div className="lane-board">
            {stages.map(([title, body]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-head">
          <span className="eyebrow">Service catalog</span>
          <h2>Specialized capability areas with one delivery standard.</h2>
        </div>
        <div className="container card-grid four">
          {services.map(([title, body]) => (
            <article className="card" key={title}>
              <div className="card-icon">SV</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
