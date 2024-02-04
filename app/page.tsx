"use client"

import BookmarksSection from "./components/BookmarksSection"
import ConvertFromPDFSection from "./components/ConvertFromPDFSection"
import ConvertToPDFSection from "./components/ConvertToPDFSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <BookmarksSection />
      <ConvertFromPDFSection />
      <ConvertToPDFSection />
    </main>
  )
}
