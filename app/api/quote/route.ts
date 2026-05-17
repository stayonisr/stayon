import { Resend } from "resend";

// Interim: Resend requires a verified domain to send to hello@stayon.co.il.
// Until stayon.co.il is verified in Resend, leads go to the Resend account
// owner's inbox. Reply-To is set to the customer so replies go to them.
// To upgrade: verify stayon.co.il in Resend, then set TO/FROM to branded.
const TO = "stayonisr@gmail.com";
const FROM = "StayOn <onboarding@resend.dev>";

function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const business = String(body.business ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const quantity = String(body.quantity ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !business || !phone || !email) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;direction:rtl;text-align:right;color:#0C0A09;line-height:1.7">
      <h2 style="margin:0 0 16px;color:#a09072">בקשה חדשה להצעת מחיר — StayOn</h2>
      <table style="border-collapse:collapse;font-size:15px">
        <tr><td style="padding:6px 14px 6px 0;font-weight:bold">שם מלא</td><td>${esc(name)}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;font-weight:bold">עסק</td><td>${esc(business)}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;font-weight:bold">טלפון</td><td>${esc(phone)}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;font-weight:bold">אימייל</td><td>${esc(email)}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;font-weight:bold">כמות</td><td>${esc(quantity) || "—"}</td></tr>
        <tr><td style="padding:6px 14px 6px 0;font-weight:bold;vertical-align:top">הודעה</td><td>${esc(message).replace(/\n/g, "<br />") || "—"}</td></tr>
      </table>
      <p style="margin-top:20px;color:#78716c;font-size:13px">ניתן להשיב למייל זה כדי לחזור ישירות ללקוח.</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `בקשת הצעת מחיר — ${business} (${name})`,
      html,
    });
    if (error) {
      return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
