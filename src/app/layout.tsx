import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import FooterWrapper from "@/components/FooterWrapper";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Phebean Neurodiversity Support",
    template: "%s | Phebean Neurodiversity Support"
  },
  description: "Together, we are shaping a world where every individual's special abilities are recognized and valued. Join our neurodiversity support community.",
  keywords: [
    "neurodiversity",
    "autism support",
    "ADHD resources",
    "special abilities",
    "inclusive community",
    "neurodivergent support"
  ],
  authors: [{ name: "Phebean Team" }],
  creator: "Phebean Neurodiversity Support",
  publisher: "Phebean",
  metadataBase: new URL("https://www.phebeanneurodiversitysupport.org"),
  alternates: {
    canonical: "/",
  },
   other: {
    'google-site-verification': 'google251de09ef11af03c',
  },
  openGraph: {
    title: "Phebean Neurodiversity Support",
    description: "Celebrating and supporting neurodivergent individuals",
    url: "https://www.phebeanneurodiversitysupport.org",
    siteName: "Phebean Neurodiversity Support",
    images: [
      {
        url: "https://www.phebeanneurodiversitysupport.org/image/Logo-blue.png",
        width: 1200,
        height: 630,
        alt: "Phebean Neurodiversity Support Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phebean Neurodiversity Support",
    description: "Celebrating and supporting neurodivergent individuals",
    images: ["https://www.phebeanneurodiversitysupport.org/image/Logo-blue.png"],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StructuredData />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <ToastContainer position='bottom-right' autoClose={3000} />
        <FooterWrapper />
      </body>
    </html>
  );
}
