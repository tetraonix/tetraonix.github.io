import Link from 'next/link';

type SectionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary?: string;
  primaryHref?: string;
  secondary?: string;
  secondaryHref?: string;
};

export default function SectionHero({ eyebrow, title, description, primary = 'Schedule Consultation', primaryHref = '/contact', secondary = 'Explore Solutions', secondaryHref = '/services' }: SectionHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={primaryHref}>{primary}</Link>
            <Link className="btn btn-secondary" href={secondaryHref}>{secondary}</Link>
          </div>
        </div>
        <div className="hero-panel compact-panel">
          <div className="panel-top"><span>Delivery snapshot</span><strong>LIVE</strong></div>
          <div className="metric-row"><span>AI automation readiness</span><strong>Assessment</strong></div>
          <div className="metric-row"><span>QA modernization</span><strong>Roadmap</strong></div>
          <div className="metric-row"><span>Cloud & workforce support</span><strong>Execution</strong></div>
        </div>
      </div>
    </section>
  );
}
