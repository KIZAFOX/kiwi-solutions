import type { Metadata } from "next";
import { Inter } from "next/font/google";

import '../../public/assets/styles/global-style.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KiWi Solutions",
  description: "Site officiel de KiWi Solutions",
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      sizes: '32x32',
      url: '/assets/images/favicon/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
