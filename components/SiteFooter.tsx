import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <img src="/brand/tetraonix-text-logo.png" alt="Tetraonix Consulting" className="footer-logo" />
          </Link>
          <p>Tetraonix Consulting delivers AI automation, QA engineering, cloud modernization, HRMS products, support services, and workforce solutions for modern enterprises.</p>
        </div>
        <div>
          <h4>Services</h4>
          <Link href="/services">AI & Automation</Link>
          <Link href="/services">QA Engineering</Link>
          <Link href="/services">Cloud Solutions</Link>
          <Link href="/support">Managed Support</Link>
        </div>
        <div>
          <h4>Products</h4>
          <Link href="/platform">Tetraonix QA Platform</Link>
          <Link href="/hrms">Tetraonix HRMS</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/company">Company</Link>
        </div>
        <div>
          <h4>Start a conversation</h4>
          <p>Plan a pilot, modernize QA, improve HR operations, or build a scalable delivery team.</p>
          <Link className="footer-cta" href="/contact">Contact Tetraonix →</Link>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Tetraonix Consulting. All rights reserved.</div>
    </footer>
  );
}
