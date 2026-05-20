import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createMetadata, organizationJsonLd } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About Tetraonix Consulting | Enterprise AI, QA, HRMS, Cloud & Support Partner',
  description:
    'Learn about Tetraonix Consulting, an enterprise technology partner combining AI-first engineering, QA expertise, HRMS platforms, cloud, cybersecurity, staffing, and support.',
  path: '/company',
  image: '/why/why-tetraonix-operating-model.png',
  keywords: ['about Tetraonix', 'enterprise technology partner', 'AI first engineering company', 'QA HRMS cloud consulting company'],
});

const principles = [
  ['Customer confidence', 'We communicate clearly, define scope, and focus on real business value.'],
  ['Delivery discipline', 'We structure work with milestones, ownership, visibility, and execution rhythm.'],
  ['AI with governance', 'We design AI solutions that can be controlled, supported, and improved responsibly.'],
  ['Long-term partnership', 'We support customers beyond launch through managed services and continuous improvement.'],
];

export default function CompanyPage() {
  return (
    <main>
      <JsonLd data={organizationJsonLd()} />
      <section className="page-hero company-hero">
        <div className="container page-grid">
          <div>
            <span className="eyebrow">Company</span>
            <h1>Tetraonix Consulting is built for modern enterprise delivery.</h1>
            <p className="lead">
              We combine consulting experience, AI-first engineering, product thinking, and support services
              to help customers modernize software delivery and workforce operations with confidence.
            </p>
          </div>
          <div className="page-panel">
            <h3>Our focus</h3>
            <div className="list">
              <div>Enterprise AI automation</div>
              <div>QA engineering excellence</div>
              <div>HRMS and workforce platforms</div>
              <div>Cloud, data, security, and support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-band">
          <aside className="story-aside">
            <span className="eyebrow">Brand promise</span>
            <h2>Enterprise quality with startup speed.</h2>
            <p>
              Tetraonix helps customers move quickly while maintaining the professionalism, security mindset,
              and delivery standards expected from a serious technology partner.
            </p>
          </aside>
          <div className="card-grid two">
            {principles.map(([title, body], index) => (
              <article className="card" key={title}>
                <div className="card-icon">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <span className="eyebrow">What we bring together</span>
            <h2>Consulting, products, staffing, support, cloud, cybersecurity, AI, QA, and HR operations.</h2>
          </div>
          <div className="pattern-panel">
            <div className="pattern-panel-inner">
              <img src="/brand/tetraonix-text-logo.png" alt="Tetraonix Consulting" />
              <p>
                Our delivery model is intentionally broad enough to support strategy, implementation,
                platform adoption, and long-term operational execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
