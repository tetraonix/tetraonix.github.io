import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, createMetadata, siteConfig } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contact Tetraonix | Schedule AI, QA Platform, HRMS, Cloud or Support Consultation',
  description:
    'Contact Tetraonix to plan an AI automation engagement, QA Platform demo, HRMS implementation, cloud modernization, staffing model, or managed support service.',
  path: '/contact',
  image: '/cta/ready-to-move-forward.png',
  keywords: ['contact Tetraonix', 'schedule QA platform demo', 'HRMS implementation consultation', 'AI automation consultation'],
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Tetraonix Consulting',
          description: 'Contact Tetraonix for enterprise AI, QA, HRMS, cloud, staffing, and managed support conversations.',
          url: absoluteUrl('/contact'),
          mainEntity: {
            '@type': 'Organization',
            name: siteConfig.name,
            email: siteConfig.email,
          },
        }}
      />
      <section className="page-hero contact-hero">
        <div className="container page-grid">
          <div>
            <span className="eyebrow">Contact</span>
            <h1>Start a focused conversation about your roadmap.</h1>
            <p className="lead">
              Share your goals and Tetraonix can help shape the right consulting engagement,
              product demo, pilot, or managed support model.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:contact@tetraonix.com">Email Tetraonix</a>
            </div>
          </div>
          <div className="page-panel">
            <h3>Best reasons to contact us</h3>
            <div className="list">
              <div>Schedule QA Platform demo</div>
              <div>Discuss HRMS implementation</div>
              <div>Plan AI automation pilot</div>
              <div>Build support or staffing model</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card-grid">
            <article className="contact-method">
              <strong>Consulting inquiry</strong>
              <p>AI automation, QA modernization, cloud, cybersecurity, data, or workforce execution.</p>
            </article>
            <article className="contact-method">
              <strong>Product demo</strong>
              <p>Review Tetraonix QA Platform or Tetraonix HRMS for your team or customer workflow.</p>
            </article>
            <article className="contact-method">
              <strong>Support model</strong>
              <p>Discuss managed support, dedicated teams, product administration, QA support, or cloud operations.</p>
            </article>
          </div>

          <div className="contact-form-shell">
            <span className="eyebrow">Tell us where to start</span>
            <h2>What should Tetraonix help you move forward?</h2>
            <form className="field-grid" action="mailto:contact@tetraonix.com" method="post" encType="text/plain">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
              </div>
              <div className="field">
                <label htmlFor="interest">Interest</label>
                <select id="interest" name="interest" defaultValue="">
                  <option value="" disabled>Select an area</option>
                  <option>QA Platform</option>
                  <option>HRMS</option>
                  <option>AI automation</option>
                  <option>Cloud or support</option>
                  <option>Staffing or delivery team</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="timeline">Timeline</label>
                <select id="timeline" name="timeline" defaultValue="">
                  <option value="" disabled>Select timing</option>
                  <option>Now</option>
                  <option>This quarter</option>
                  <option>Planning ahead</option>
                </select>
              </div>
              <div className="field field-full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>
              <div className="field field-full">
                <button className="btn btn-primary" type="submit">Send inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
