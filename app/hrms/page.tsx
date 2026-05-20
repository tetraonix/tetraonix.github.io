import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Tetraonix HRMS | Workforce Management, ATS, Compliance & Attendance Platform',
  description:
    'Tetraonix HRMS gives growing teams a workforce command center for recruiting, onboarding, US compliance, shift tracking, attendance, plugins, and HR analytics.',
  path: '/hrms',
  image: '/hrms/global-workforce-command.png',
  keywords: ['HRMS platform', 'workforce management software', 'ATS and onboarding software', 'US HR compliance software', 'attendance tracking software'],
});

const modules = [
  ['Candidate pipeline', 'Capture applicants, manage submissions, schedule interviews, and move offer decisions through one governed ATS workflow.'],
  ['Onboarding command', 'Convert hires into employees with role setup, document collection, benefits steps, and task ownership.'],
  ['Compliance vault', 'Manage I-9 verifications, W-4 tax forms, EEO-1 reporting, secure documents, and audit-ready evidence.'],
  ['Time and attendance', 'Track shifts, clock events, work logs, overtime signals, and team capacity across locations.'],
  ['Plugin operations', 'Activate payroll, recruiting, communication, background check, and analytics connectors from an admin hub.'],
  ['Workforce intelligence', 'Give executives visibility into hiring velocity, compliance status, attendance trends, and operational risk.'],
];

const commandSignals = [
  ['Hiring velocity', 'Open roles, candidate stages, interviews, and offer readiness are visible in one pipeline.'],
  ['Compliance posture', 'Document completion, verification status, and reporting gaps are surfaced before they become risk.'],
  ['Workforce coverage', 'Shift demand, attendance, overtime, and availability signals help managers act earlier.'],
  ['Operational ROI', 'Plugin usage, support needs, and workflow adoption can be reviewed from the same operating view.'],
];

const workflowSteps = ['Recruit', 'Verify', 'Onboard', 'Schedule', 'Measure'];

const audiences = [
  ['For HR leaders', 'Standardize employee data, document workflows, onboarding tasks, policies, and people operations governance.'],
  ['For recruiters', 'Manage candidate intake, pipeline stages, interviews, offers, and handoff to onboarding without spreadsheet drift.'],
  ['For managers', 'Review shift coverage, attendance, approvals, readiness, and team capacity before work gets blocked.'],
  ['For executives', 'See hiring performance, compliance readiness, attendance trends, and workforce operating health at a glance.'],
];

export default function HRMSPage() {
  return (
    <main>
      <JsonLd
        data={serviceJsonLd(
          'Tetraonix HRMS',
          'Workforce management and HRMS platform for recruiting, onboarding, US compliance, attendance, shift tracking, plugins, and HR analytics.',
          '/hrms',
          'HRMS and workforce management platform',
        )}
      />
      <section className="page-hero hrms-hero hrms-image-hero">
        <img
          src="/hrms/global-workforce-command.png"
          alt=""
          className="hrms-image-hero-bg"
        />
        <div className="hrms-action-layer" aria-hidden="true">
          <span className="hrms-action-scan" />
          <span className="hrms-action-pulse hrms-action-pulse-one" />
          <span className="hrms-action-pulse hrms-action-pulse-two" />
          <span className="hrms-action-pulse hrms-action-pulse-three" />
        </div>
        <div className="container hrms-image-hero-content">
          <div className="hrms-image-hero-copy">
            <span className="eyebrow">Tetraonix HRMS</span>
            <h1>A workforce command center for hiring, compliance, attendance, and HR execution.</h1>
            <p className="lead">
              Tetraonix HRMS gives growing teams and staffing businesses a polished operating layer for recruiting, onboarding, US compliance, shift tracking, plugin integrations, and executive workforce visibility.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact">Request HRMS Demo</a>
              <a className="btn btn-secondary" href="/support">Support Services</a>
            </div>
            <div className="hrms-hero-proof">
              <span>ATS to employee lifecycle</span>
              <span>US document readiness</span>
              <span>Shift and attendance control</span>
            </div>
          </div>
          <div className="page-panel hrms-hero-panel">
            <div className="panel-top"><span>HR operating center</span><strong>READY</strong></div>
            <div className="metric-grid">
              <div className="metric"><strong>US</strong><small>Compliance native</small></div>
              <div className="metric"><strong>1 hub</strong><small>ATS to onboarding</small></div>
            </div>
            <div className="list">
              <div>I-9, W-4, and EEO-1 workflows</div>
              <div>Plugin ecosystem and HR connectors</div>
              <div>Shift, attendance, and overtime visibility</div>
              <div>Role-aware dashboards and secure records</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section hrms-command-section">
        <div className="container hrms-command-grid">
          <div className="dashboard-visual hrms-command-board">
            <span className="eyebrow">Live workforce signals</span>
            <h2>Make people operations feel controlled, current, and decision-ready.</h2>
            <p>
              The HRMS experience is structured around the moments where HR teams need clarity:
              who is moving through hiring, who is ready to start, who needs compliance attention,
              and where workforce coverage needs action.
            </p>
            <div className="hrms-command-signals">
              {commandSignals.map(([title, body], index) => (
                <div className="signal-card hrms-signal-card" key={title}>
                  <b>{index + 1}</b>
                  <span>
                    <strong>{title}</strong>
                    <small>{body}</small>
                  </span>
                  <em>{index === 3 ? 'Review' : 'Live'}</em>
                </div>
              ))}
            </div>
          </div>
          <figure className="hrms-command-image">
            <img
              src="/hrms/hrms-workforce-command.png"
              alt="Enterprise HRMS workforce command center with staffing, attendance, compliance, and employee lifecycle dashboards"
            />
            <figcaption>Workforce command center for operational HR visibility</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">HRMS capabilities</span>
          <h2>Everything needed to run professional, compliant HR operations from intake to insight.</h2>
          <p>
            Each capability is built as part of a connected operating flow, so teams can move from hiring
            demand to compliant workforce execution without losing context between systems.
          </p>
        </div>
        <div className="container hrms-modules-workflow hrms-integrated-workflow">
          <figure className="hrms-modules-image">
            <img
              src="/hrms/hrms-modules-people-workflow.png"
              alt="Professional HR administrators and leaders collaborating around HRMS full-cycle workflow dashboards"
            />
            <figcaption>Executive HRMS admin and full-cycle workflow pipeline</figcaption>
          </figure>
          <div className="hrms-module-pipeline">
            {modules.map(([title, body], index) => (
              <article className="hrms-module-stage" key={title}>
                <b>{index + 1}</b>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container hrms-lifecycle-strip">
          {workflowSteps.map((step, index) => (
            <div className="step" key={step}>
              <b>{index + 1}</b>
              <h3>{step}</h3>
              <p>
                {[
                  'Manage demand, requisitions, candidates, interview stages, and offer movement.',
                  'Collect required employment records and keep compliance status visible.',
                  'Assign onboarding tasks, benefits steps, access needs, and team ownership.',
                  'Coordinate shifts, attendance, availability, exceptions, and work coverage.',
                  'Track operational trends and give leaders a clean read on workforce health.',
                ][index]}
              </p>
            </div>
          ))}
        </div>
        <div className="container split hrms-confidence-layout">
          <div className="hrms-confidence-copy">
            <span className="eyebrow">Built for operational confidence</span>
            <h2>Designed for staffing, consulting, and growing enterprise teams that need HR to move faster.</h2>
            <p>
              Use Tetraonix HRMS to standardize hiring operations, strengthen US labor compliance,
              manage shift tracking, and extend functionality through a practical plugin catalog.
            </p>
            <figure className="hrms-confidence-image">
              <img
                src="/hrms/operational-confidence-team.png"
                alt="HR leaders and staffing operations team reviewing HRMS workforce dashboards and staffing plans"
              />
            </figure>
          </div>
          <div className="card-grid two">
            {audiences.map(([title, body], index) => (
              <article className="card hrms-audience-card" key={title}>
                <div className="card-icon">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card hrms-cta-card">
          <div>
            <span className="eyebrow">Ready for a stronger HR operating model?</span>
            <h2>Turn scattered HR workflows into one impressive enterprise experience.</h2>
            <p>
              Start with a focused HRMS demo covering recruiting, onboarding, compliance,
              attendance, analytics, and the plugin model your team needs next.
            </p>
            <a className="btn btn-primary" href="/contact">Plan HRMS Rollout</a>
          </div>
          <figure className="cta-image">
            <img
              src="/hrms/hrms-full-cycle-pipeline.png"
              alt="Full-cycle HRMS pipeline connecting recruiting, onboarding, compliance, attendance, and workforce analytics"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
