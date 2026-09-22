import { NextResponse } from "next/server";
import { Resend } from "resend";

const SHORT_MAX = 100;
const MESSAGE_MAX = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
    name: string;
    email: string;
    phone: string;
    eventType: string;
    date: string;
    guests: string;
    message: string;
};

function clean(value: unknown, max: number): string {
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function row(label: string, value: string): string {
    if (!value) return '';
    return `<tr>
    <td style="padding:8px 16px 8px 0;vertical-align:top;color:#666;font-size:14px;white-space:nowrap;">${label}</td>
    <td style="padding:8px 0;vertical-align:top;color:#111;font-size:15px;">${escapeHtml(value).replace(/\n/g, '<br />')}</td>
  </tr>`;
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
        const missing = [
            !apiKey && 'RESEND_API_KEY',
            !toEmail && 'CONTACT_TO_EMAIL',
            !fromEmail && 'CONTACT_FROM_EMAIL',
        ]
            .filter(Boolean)
            .join(' ');
        console.error(`[contact] Missing env vars: ${missing}`);
        return NextResponse.json(
            { error: 'The contact form is not configured. Please email us directly.' },
            { status: 500 }
        );
    }

    let body: Record<string, unknown> | null = null;

    try {
        body = (await request.json()) as Record<string, unknown>;
    } catch {
        body = null;
    }

    if (!body || typeof body !== 'object') {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const data: Payload = {
        name: clean(body.name, SHORT_MAX),
        email: clean(body.email, SHORT_MAX),
        phone: clean(body.phone, SHORT_MAX),
        eventType: clean(body.eventType, SHORT_MAX),
        date: clean(body.date, SHORT_MAX),
        guests: clean(body.guests, SHORT_MAX),
        message: clean(body.message, MESSAGE_MAX),
    };

    if (!data.name) {
        return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
    }
    if (!data.email) {
        return NextResponse.json({ error: 'Please enter your email address.' }, { status: 400 });
    }
    if (!EMAIL_RE.test(data.email)) {
        return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!data.message) {
        return NextResponse.json({ error: 'Please tell us about your event.' }, { status: 400 });
    }

    const html = `<div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;">
  <h2 style="font-size:18px;color:#111;margin:0 0 4px;">New inquiry from the website</h2>
  <p style="font-size:13px;color:#888;margin:0 0 20px;">Reply to this email to respond to ${escapeHtml(data.name)} directly.</p>
  <table style="border-collapse:collapse;width:100%;">
    ${row('Name', data.name)}
    ${row('Email', data.email)}
    ${row('Phone', data.phone)}
    ${row('Event type', data.eventType)}
    ${row('Preferred date', data.date)}
    ${row('Guest count', data.guests)}
    ${row('Message', data.message)}
  </table>
</div>`;

    try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from: `The Reserve <${fromEmail}>`,
            to: toEmail,
            replyTo: data.email,
            subject: `New inquiry — ${data.eventType || 'General'} — ${data.name}`,
            html,
        });

        if (error) {
            console.error('[contact] Resend error:', error);
            return NextResponse.json(
                { error: 'We could not send your inquiry right now. Please try again shortly.' },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('[contact] Unexpected error:', err);
        return NextResponse.json(
            { error: 'We could not send your inquiry right now. Please try again shortly.' },
            { status: 502 }
        );
    }
}
