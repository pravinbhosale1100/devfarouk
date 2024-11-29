import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "DevPravin Portfolio",
  description: "Frontend Engineer",
  other:{
    "google-site-verification":"CgueX8F_qxcA4EskItpNQLxdJn2CmQKLr5lDvTjsOrM"
  }
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
          <SplashScreenManager>
            <Navbar />
            <Sidebar />
            <main className=" px-5 sm:px-12">{children}</main>
            <Copyright />
          </SplashScreenManager>
        </Providers>
        <GoogleAnalytics gaId="G-FHL88G3PMS" />
      </body>
    </html>
  );
}
