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
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
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
        { status: 400 }
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
        { status: 500 }
      );
    }

    // Send confirmation email (non-blocking — don't fail the request if email fails)
    try {
      const resend = getResend();
      await Promise.all([
        // Confirmation to user
        resend.emails.send({
          from: "claw@mail.knobase.ai",
          to: email,
          subject: "You're on the Knobase waitlist",
          html: `
            <h1>Welcome to Knobase, ${name}!</h1>
            <p>Thanks for joining our waitlist.</p>
            <p>We'll review your application and email you when Knobase is ready for you.</p>
            <p>— The Knobase Team</p>
          `,
        }),
        // Notify admin
        resend.emails.send({
          from: "claw@mail.knobase.ai",
          to: "chris@metalympics.org",
          subject: "New Knobase waitlist signup",
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Organization:</strong> ${organization || "N/A"}</p>
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
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
