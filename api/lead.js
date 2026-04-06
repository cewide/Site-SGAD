/**
 * Vercel Serverless Function — POST /api/lead
 *
 * Variáveis na Vercel:
 *   RESEND_API_KEY — obrigatório para envio por e-mail
 *   LEAD_NOTIFY_EMAIL — destino (padrão: contato@afsoftwares.com.br)
 *   RESEND_FROM_EMAIL — remetente verificado, ex. "SGAD <onboarding@resend.dev>"
 */

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      return res.status(400).json({ error: "JSON inválido." });
    }
  }
  body = body || {};
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Nome, e-mail e telefone são obrigatórios." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.LEAD_NOTIFY_EMAIL || "contato@afsoftwares.com.br").trim();
  const from = (process.env.RESEND_FROM_EMAIL || "SGAD Site <onboarding@resend.dev>").trim();

  if (!apiKey) {
    return res.status(503).json({ error: "Envio por e-mail não configurado (RESEND_API_KEY)." });
  }

  const html = `<p>Novo lead pelo site SGAD (demonstração).</p>
<p><strong>Nome:</strong> ${escapeHtml(name)}</p>
<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
<p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: "Novo lead SGAD — demonstração (site)",
      html,
    }),
  });

  if (!r.ok) {
    const text = await r.text();
    console.error("Resend error:", r.status, text);
    return res.status(502).json({ error: "Não foi possível enviar o e-mail." });
  }

  return res.status(200).json({ ok: true });
}
