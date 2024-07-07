import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevFarouk 👨‍💻",
  description: "Portfolio || DevFarouk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        <Sidebar />
        <main className="px-12">{children}</main>
        <Copyright />
      </body>
    </html>
  );
}
