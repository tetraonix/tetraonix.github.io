import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/platform', label: 'QA Platform' },
  { href: '/hrms', label: 'HRMS' },
  { href: '/industries', label: 'Industries' },
  { href: '/support', label: 'Support' },
  { href: '/company', label: 'Company' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Enterprise AI, QA, HRMS, cloud, and managed delivery support</span>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Tetraonix Consulting home">
          <img src="/brand/tetraonix-text-logo.png" alt="Tetraonix Consulting" className="brand-logo" />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="btn btn-primary" href="/contact">Schedule Consultation</Link>
        </div>
      </div>
    </header>
  );
}
