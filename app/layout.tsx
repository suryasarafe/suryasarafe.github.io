import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://suryaramadhan.my.id"),
  title: {
    default: "Surya A. Ramadhan Portpolio",
    template: "%s | Surya A. Ramadhan Portpolio"
  },
  description: "Surya A. Ramadhan, a Software Engineer from Bandung, Indonesia",
  openGraph: {
    title: "Surya A. Ramadhan Portpolio",
    description: "Surya A. Ramadhan, a Software Engineer from Bandung, Indonesia",
    url: "https://suryaramadhan.my.id",
    siteName: "Surya A. Ramadhan Portpolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Surya's Portfolio preview",
      },
    ],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
