import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar"
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: "Predict JO",
		template: `%s - Predict JO`,
	},
	description: "Predictions for the Olympic Games 2024",
	icons: {
		icon: "/favicon.ico",
	},
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
          <Navbar />
          <div className="mt-14">
            {children}
          </div>
      </body>
    </html>
  );
}
