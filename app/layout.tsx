import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Knobase — The workspace where humans and AI collaborate",
  description: "Real-time collaboration for teams and AI agents. Invite colleagues, invite your agent, work side by side. Built for OpenClaw.",
  keywords: ["AI collaboration", "human AI workspace", "OpenClaw", "real-time editing", "agent workspace", "Knobase"],
  metadataBase: new URL("https://knobase.com"),
  openGraph: {
    title: "Knobase — The workspace where humans and AI collaborate",
    description: "Real-time collaboration for teams and AI agents. Invite colleagues, invite your agent, work side by side. Built for OpenClaw.",
    type: "website",
    url: "https://knobase.com",
    siteName: "Knobase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knobase — The workspace where humans and AI collaborate",
    description: "Real-time collaboration for teams and AI agents. Built for OpenClaw.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakartaSans.variable}>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: 'var(--font-jakarta), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}