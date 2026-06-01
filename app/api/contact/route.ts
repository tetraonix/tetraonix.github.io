import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/seo';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  interest?: unknown;
  timeline?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Contact email is not configured.' }, { status: 503 });
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid contact request.' }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const interest = clean(payload.interest);
  const timeline = clean(payload.timeline);
  const message = clean(payload.message);

  if (!name || !emailPattern.test(email) || !interest || !timeline || !message) {
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Tetraonix <onboarding@resend.dev>';
  const subject = `Tetraonix inquiry - ${interest}`;
  const html = `
    <h2>New Tetraonix inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: 'Unable to send inquiry right now.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
