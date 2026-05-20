import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Industries Served | Technology, Healthcare, Government, Staffing & Enterprise IT | Tetraonix',
  description:
    'Tetraonix supports technology, healthcare, government contractors, enterprise IT, staffing, and professional services with AI, QA, cloud, HRMS, and managed support.',
  path: '/industries',
  image: '/why/why-tetraonix-operating-model.png',
  keywords: ['technology consulting industries', 'government contractor IT support', 'healthcare technology consulting', 'staffing HRMS solutions'],
});

const industries = [
  ['Technology & SaaS', 'QA modernization, CI/CD quality gates, AI automation, cloud delivery, and product support for fast-moving engineering teams.'],
  ['Healthcare & Life Sciences', 'Data workflows, QA validation, system modernization, operational automation, and compliant delivery support.'],
  ['Government Contractors', 'Subcontracting support, QA services, cloud engineering, workforce scaling, and delivery teams for public-sector programs.'],
  ['Enterprise IT', 'Application modernization, integrations, DevOps, AI pilots, cybersecurity readiness, and managed support.'],
  ['Staffing & Workforce', 'HRMS operations, recruiting workflows, onboarding, workforce visibility, and delivery-team scaling.'],
  ['Professional Services', 'Automation, client delivery operations, dashboards, workflow standardization, and support services.'],
];

export default function IndustriesPage() {
  return (
    <main>
      <JsonLd
        data={serviceJsonLd(
          'Industry-Focused Enterprise Technology Delivery',
          'AI, QA, cloud, HRMS, cybersecurity, staffing, and managed support services for technology, healthcare, government contractors, enterprise IT, staffing, and professional services.',
          '/industries',
          'Industry technology consulting',
        )}
      />
      <section className="page-hero industries-hero">
        <div className="container page-grid">
          <div>
            <span className="eyebrow">Industries</span>
            <h1>Industry-focused delivery for organizations that need dependable execution.</h1>
            <p className="lead">
              Tetraonix supports customers across technology, healthcare, government contracting,
              enterprise IT, staffing, and professional services with consulting, products, and managed support.
            </p>
          </div>
          <div className="pattern-panel">
            <div className="pattern-panel-inner">
              <h3>Where Tetraonix fits</h3>
              <div className="list">
                <div>Modern software delivery</div>
                <div>AI process automation</div>
                <div>QA and release confidence</div>
                <div>HR and workforce operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Market coverage</span>
          <h2>Industry needs mapped to practical technology services.</h2>
        </div>
        <div className="container industry-map">
          {industries.map(([title, body]) => (
            <article className="industry-cell" key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
