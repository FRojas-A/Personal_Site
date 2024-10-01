import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Frank Rojas",
  description: "Frank's personal website",
  openGraph: {
        type: "website",
        url: "https://frankrojas.com",
        title: "Frank Rojas",
        description: "Portfolio site made by Frank Rojas",
        siteName: "Frank Rojas",
        // images: [{
        // url: "https://example.com/og.png",
        // }],
   }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} id="home">
        <Navigation />
        <main className="main">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
