import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Ad, e-posta ve mesaj zorunludur." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Marssoft Web <noreply@marssoft.com.tr>",
      to: ["pazarlama@marssoft.com.tr"],
      replyTo: email,
      subject: `[Marssoft Web] ${subject || "Yeni Mesaj"} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 8px;">
          <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="color: #D4A017; margin: 0; font-size: 22px;">Marssoft — Yeni Mesaj</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background: #fff; border: 1px solid #eee; font-weight: bold; width: 140px; color: #555;">Ad Soyad</td>
              <td style="padding: 10px; background: #fff; border: 1px solid #eee; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee; font-weight: bold; color: #555;">E-posta</td>
              <td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #B8860B;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px; background: #fff; border: 1px solid #eee; font-weight: bold; color: #555;">Telefon</td>
              <td style="padding: 10px; background: #fff; border: 1px solid #eee; color: #333;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee; font-weight: bold; color: #555;">Konu</td>
              <td style="padding: 10px; background: #f9f9f9; border: 1px solid #eee; color: #333;">${subject || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #fff; border: 1px solid #eee; font-weight: bold; color: #555; vertical-align: top;">Mesaj</td>
              <td style="padding: 10px; background: #fff; border: 1px solid #eee; color: #333; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <p style="margin-top: 20px; color: #999; font-size: 12px;">
            Bu mesaj marssoft.com.tr iletişim formu üzerinden gönderilmiştir.
            Yanıtlamak için bu e-postayı yanıtlayabilirsiniz.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-posta gönderilemedi." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
