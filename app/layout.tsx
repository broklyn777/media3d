import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const siteUrl = "https://media3d.se"; // ✅ ändra till er riktiga domän

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Media3d – Webbyrå för maximal design & SEO",
    template: "%s – Media3d",
  },
  description:
    "Vi bygger snabba Next.js-webbar med maximal design, konvertering och SEO.",
  alternates: {
    canonical: "/", // root canonical; på undersidor kör vi generateMetadata
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Media3d",
    title: "Media3d – Webbyrå för maximal design & SEO",
    description:
      "Vi bygger snabba Next.js-webbar med maximal design, konvertering och SEO.",
    images: [
      {
        url: "/og.jpg", // lägg bilden i /public/og.jpg
        width: 1200,
        height: 630,
        alt: "Media3d",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0F", // valfritt: matcha er dark bg
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-bg text-fg antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
