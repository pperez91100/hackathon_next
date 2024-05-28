import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
// export const metadata: Metadata = {
//   title: "Predict JO",
//   description: "Predictions for the Olympic Games 2024",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        >
          <Navbar />
          <div className="mt-14">
            {children}
          </div>
      </body>
    </html>
  );
}
