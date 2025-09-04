import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/navBar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estatery | Buy, Rent & Sell Properties Easily",
  description:
    "Find your dream home with Estatery. Browse 10k+ properties to buy, rent, or sell with the best price and lowest commission.",
  keywords: [
    "real estate",
    "rent",
    "buy house",
    "sell property",
    "apartments",
    "homes",
    "estatery",
  ],
  authors: [{ name: "Estatery Team" }],
  openGraph: {
    title: "Estatery | Buy, Rent & Sell Properties Easily",
    description:
      "Find your dream home with Estatery. Browse 10k+ properties to buy, rent, or sell with the best price and lowest commission.",
    siteName: "Estatery",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Estatery real estate platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estatery | Buy, Rent & Sell Properties Easily",
    description:
      "Find your dream home with Estatery. Browse 10k+ properties to buy, rent, or sell with the best price and lowest commission.",
    images: ["/logos/logo.png"],
    creator: "@estatery",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
