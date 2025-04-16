import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google"; 
// import "./globals.css";
import { ToastContainer } from "react-toastify";

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

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        {children}
        <ToastContainer position="bottom-right" autoClose={3000} />
      </body>
    </html>
  );
}