import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EsseCheck — AI-Powered Essay Evaluation",
  description: "Milliy sertifikat topshiriqlari bo'yicha to'liq tahlil va aniq natijalar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-slate-900 text-slate-50 font-body selection:bg-primary-container selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
