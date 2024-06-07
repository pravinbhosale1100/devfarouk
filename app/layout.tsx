import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import ThemeSwitcher from "./components/ThemeSwitcher";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Providers>
          <ThemeSwitcher />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
