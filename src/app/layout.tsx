import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../styles/globals.css";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Keab - Arquitetura e Construção',
  description: 'Torne seu sonho em realidade com nossas experiências exclusivas',
}

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

