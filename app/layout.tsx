import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZinTools",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
