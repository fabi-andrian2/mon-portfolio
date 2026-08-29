import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { GlobalBackground } from "@/app/components/GlobalBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-switzer",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabrice Andrianirina",
  description:
    "Portfolio de Fabrice, développeur Full-Stack junior. Applications web modernes, propres et maintenables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}