import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PravinB 👨‍💻",
  description: "Works || Pravin",
  other:{
    "google-site-verification":"CgueX8F_qxcA4EskItpNQLxdJn2CmQKLr5lDvTjsOrM"
  }
}

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
