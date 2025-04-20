import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/header"; 
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sara - Web Development Portfolio",
  description: "Sara Latorre Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
