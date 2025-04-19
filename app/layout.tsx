import type { Metadata } from "next";
import "./globals.css";
import { Inter, Fragment_Mono } from "next/font/google";


export const metadata: Metadata = {
  title: "Design Cube",
  description: "Designed for agencies, portfolios, and personal brands, DesignCube seamlessly blends minimalist aesthetics with dynamic animations.",
}
export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const fragment = Fragment_Mono({ weight: '400', subsets: ['latin'], variable: '--font-fragment' })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fragment.variable}`}>
      <body className="font-inter bg-black text-white">
        {children}
      </body>
    </html>
  );
}
