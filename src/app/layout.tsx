import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import AuthHeader from "./components/AuthHeader/AuthHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get started with Franchain",
  description: "Franchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthHeader />
        {children}
      </body>

    </html>
  );
}
