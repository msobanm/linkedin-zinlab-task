import { useEffect, useState } from "react"
import BookmarksSection from "./components/BookmarksSection"
import ConvertFromPDFSection from "./components/ConvertFromPDFSection"

type Bookmark = {
  name: string
  icon: string
  description: string
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <BookmarksSection />
      <ConvertFromPDFSection />
    </main>
  )
}
