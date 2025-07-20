import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../styles/globals.css";


const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Keab - Arquitetura e Construção",
  description: "Torne seu sonho em realidade com nossas experiências exclusivas.",
  keywords: [
    "arquitetura",
    "construção",
    "projetos de casas",
    "engenharia",
    "Keab",
    "design de interiores",
    "obras residenciais",
    "empresa de construção em Angola"
  ],
  metadataBase: new URL("https://keab-arquitetura.netlify.app"), 
  authors: [{ name: "Keab", url: "https://keab-arquitetura.netlify.app" }],
  creator: "Keab",
  robots: "index, follow",
  openGraph: {
    title: "Keab - Arquitetura e Construção",
    description: "Torne seu sonho em realidade com nossas experiências exclusivas.",
    url: "https://keab-arquitetura.netlify.app",
    siteName: "Keab",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "https://keab-arquitetura.netlify.app/og-image.jpg", // crie uma imagem 1200x630
        width: 1200,
        height: 630,
        alt: "Keab - Arquitetura e Construção",
      },
    ],
  },
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://keab-arquitetura.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Pt-pt">
      <body
        className={inter.className}
      >
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}

