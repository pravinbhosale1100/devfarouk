import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevFarouk Portfolio",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <SplashScreenManager>
          <Navbar />
          <Sidebar />
          <main className=" px-5 sm:px-12">{children}</main>
          <Copyright />
        </SplashScreenManager>
      </body>
    </html>
  );
}
