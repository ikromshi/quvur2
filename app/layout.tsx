import "src/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark notranslate" translate="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUVUR",
  description:
    "QUVUR is a browser-based workspace for hydraulic modeling, water quality analysis, and operational planning for water infrastructure teams.",
  openGraph: {
    title: "QUVUR: Water network modeling in your browser.",
    description:
      "QUVUR is a browser-based workspace for hydraulic modeling, water quality analysis, and operational planning for water infrastructure teams.",
    url: "https://quvur.uz",
    siteName: "QUVUR",
    images: {
      url: "https://app.quvur.uz/banner.png",
      width: 1200,
      height: 630,
    },
  },
  applicationName: "QUVUR",
};
