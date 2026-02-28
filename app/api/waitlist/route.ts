import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import { headers } from "next/headers";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, role, organization, useCase } = body;

    // Get device info from headers
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "";

    // Validate required fields
    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    // Validate role
    const validRoles = [
      "developer",
      "expert",
      "educator",
      "researcher",
      "enterprise",
      "investor",
      "other",
    ];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role selected" },
        { status: 400 },
      );
    }

    const supabase = createClient();

    // Check if already exists
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id, status")
      .eq("email", email.toLowerCase().trim())
      .single();

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "Already on waitlist",
        status: existing.status,
      });
    }

    // Parse basic device info from user agent
    const deviceType = /Mobile|Android|iPhone/i.test(userAgent)
      ? "mobile"
      : /Tablet|iPad/i.test(userAgent)
        ? "tablet"
        : "desktop";

    const browser = /Chrome/i.test(userAgent)
      ? "Chrome"
      : /Firefox/i.test(userAgent)
        ? "Firefox"
        : /Safari/i.test(userAgent)
          ? "Safari"
          : /Edge/i.test(userAgent)
            ? "Edge"
            : "Other";

    const os = /Windows/i.test(userAgent)
      ? "Windows"
      : /Mac/i.test(userAgent)
        ? "macOS"
        : /Linux/i.test(userAgent)
          ? "Linux"
          : /Android/i.test(userAgent)
            ? "Android"
            : /iOS|iPhone/i.test(userAgent)
              ? "iOS"
              : "Other";

    // Insert into waitlist
    const { error: insertError } = await supabase.from("waitlist").insert({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      organization: organization?.trim() || null,
      role,
      use_case: useCase?.trim() || "N/A",
      status: "pending",
      source: "website",
      user_agent: userAgent,
      ip_address: ip || null,
      device_type: deviceType,
      browser,
      os,
      metadata: {
        signup_page: body.page || "landing",
      },
    });

    if (insertError) {
      console.error("Waitlist insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 },
      );
    }

    // Send confirmation email (non-blocking — don't fail the request if email fails)
    try {
      const resend = getResend();
      await Promise.all([
        // Confirmation to user
        resend.emails.send({
          from: "Chris at Knobase <chris@mail.knobase.ai>",
          to: email,
          subject: `You're in — welcome to Knobase, ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
              <body style="margin:0;padding:0;background-color:#f9f9f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9f9f9;padding:40px 0;">
                  <tr>
                    <td align="center">
                      <table width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
                        <!-- Header -->
                        <tr>
                          <td style="background-color:#0f0f0f;padding:32px 40px;">
                            <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">Knobase</p>
                          </td>
                        </tr>
                        <!-- Body -->
                        <tr>
                          <td style="padding:40px;">
                            <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">Hi ${name},</p>
                            <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">
                              Welcome. You're officially on the Knobase waitlist.
                            </p>
                            <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">
                              I want to be straight with you: we're not racing to onboard everyone at once. We're rolling out access gradually because we care deeply about making your first experience genuinely great — not just functional, but <em>delightful</em>.
                            </p>

                            <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#0f0f0f;">Why we built Knobase</p>
                            <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">
                              We believe knowledge work is broken. Information lives in silos, context gets lost, and the tools we use weren't designed for how humans (and now AI agents) actually collaborate.
                            </p>
                            <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">
                              So we're building something different: a workspace where you and your agents can think, create, and ship — together. Where knowledge stays organized, shareable, and <em>actually useful</em>.
                            </p>
                            <p style="margin:0 0 28px;font-size:15px;color:#444;line-height:1.7;">
                              People like you — builders, thinkers, early believers — are why this is worth building. Thank you for trusting us with your time.
                            </p>

                            <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#0f0f0f;">What's next</p>
                            <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7;">
                              We'll reach out personally when your spot is ready. No vague timelines — we'll be upfront about where you are in line and what to expect.
                            </p>
                            <p style="margin:0 0 8px;font-size:15px;color:#444;line-height:1.7;">In the meantime, I'd love to connect:</p>
                            <p style="margin:0 0 8px;font-size:15px;color:#444;line-height:1.7;">
                              → <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chrislee77/" style="color:#0f0f0f;">linkedin.com/in/chrislee77</a> — I post regular updates on what we're building
                            </p>
                            <p style="margin:0 0 32px;font-size:15px;color:#444;line-height:1.7;">
                              → <strong>Just reply to this email</strong> — I read every one. Questions, ideas, feedback, or just saying hi — all welcome.
                            </p>

                            <p style="margin:0;font-size:15px;color:#0f0f0f;line-height:1.8;">
                              With gratitude,<br/>
                              <strong>Christopher Lee</strong><br/>
                              <span style="color:#888;font-size:13px;">Founder, Knobase</span>
                            </p>
                          </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                          <td style="background-color:#f4f4f4;padding:20px 40px;border-top:1px solid #e8e8e8;">
                            <p style="margin:0;font-size:12px;color:#999;line-height:1.6;">
                              You're receiving this because you signed up for the Knobase waitlist at knobase.ai.<br/>
                              © ${new Date().getFullYear()} Knobase. All rights reserved.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
          `,
        }),
        // Notify admin
        resend.emails.send({
          from: "Chris at Knobase <chris@mail.knobase.ai>",
          to: "chris@metalympics.org",
          subject: "New Knobase waitlist signup",
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Organization:</strong> ${organization || "N/A"}</p>
            <p><strong>Use Case:</strong> ${useCase || "N/A"}</p>
          `,
        }),
      ]);
    } catch (emailError) {
      // Log but don't fail the signup
      console.error("Email send error:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Joined waitlist",
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
