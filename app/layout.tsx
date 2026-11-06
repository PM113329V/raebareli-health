import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raebareli Health Discovery",
  description: "Find doctors and clinics across Raebareli instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}