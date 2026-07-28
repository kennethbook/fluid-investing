import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fluidinvesting.com"),
  title: "A note from Fluid",
  description: "A note from the Fluid team.",
  icons: {
    icon: "/fluid-logo.png",
    shortcut: "/fluid-logo.png",
    apple: "/fluid-logo.png",
  },
  openGraph: {
    title: "A note from Fluid",
    description: "A note from the Fluid team.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-note.png",
        width: 1536,
        height: 1024,
        alt: "A note from Fluid.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A note from Fluid",
    description: "A note from the Fluid team.",
    images: ["/og-note.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
