import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knobase — Work with AI, together",
  description: "The workspace where humans and AI agents collaborate in real-time. Built for OpenClaw.",
  keywords: ["AI collaboration", "human AI workspace", "OpenClaw", "real-time editing", "agent workspace"],
  openGraph: {
    title: "Knobase — Work with AI, together",
    description: "The workspace where humans and AI agents collaborate in real-time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}