import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Alves | Desenvolvedor Full-Stack",
  description:
    "Portfólio de Gabriel Alves - Desenvolvedor Full-Stack especializado em React, Next.js, Node.js e mais. Confira meus projetos e habilidades.",
  keywords: [
    "desenvolvedor full-stack",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "portfolio",
    "gabriel alves",
  ],
  authors: [{ name: "Gabriel Alves" }],
  openGraph: {
    title: "Gabriel Alves | Desenvolvedor Full-Stack",
    description:
      "Portfólio de Gabriel Alves - Desenvolvedor Full-Stack especializado em React, Next.js, Node.js e mais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
