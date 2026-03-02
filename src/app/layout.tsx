import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BudgetTracker",
  description: "Track expenses and manage your personal budget with categories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
