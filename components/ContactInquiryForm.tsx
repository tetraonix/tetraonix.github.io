'use client';

import { useState, type FormEvent } from 'react';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactInquiryForm() {
  const [state, setState] = useState<FormState>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    setStatusMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      interest: String(formData.get('interest') || '').trim(),
      timeline: String(formData.get('timeline') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send inquiry.');
      }

      setState('sent');
      setStatusMessage('Inquiry sent. Tetraonix will follow up soon.');
      form.reset();
    } catch (error) {
      setState('error');
      setStatusMessage(error instanceof Error ? error.message : 'Unable to send inquiry.');
    }
  }

  return (
    <form className="field-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="interest">Interest</label>
        <select id="interest" name="interest" defaultValue="" required>
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
        <select id="timeline" name="timeline" defaultValue="" required>
          <option value="" disabled>Select timing</option>
          <option>Now</option>
          <option>This quarter</option>
          <option>Planning ahead</option>
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      {statusMessage ? (
        <p className={state === 'sent' ? 'formStatus formStatusSuccess' : 'formStatus formStatusError'}>
          {statusMessage}
        </p>
      ) : null}
      <div className="field field-full">
        <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending...' : 'Send inquiry'}
        </button>
      </div>
    </form>
  );
}
