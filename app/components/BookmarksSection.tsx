"use client"

import React, { useEffect, useState } from "react"
import Bookmark from "./Bookmark"

type bookmark = {
  name: string
  icon: string
}

const BookmarksSection = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    )
    setBookmarks(storedBookmarks)
  }, [bookmarks])

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Bookmarks</h2>
        <div className="flex gap-10">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark: bookmark) => (
              <Bookmark
                key={bookmark.name}
                name={bookmark.name}
                icon={bookmark.icon}
              />
            ))
          ) : (
            <p>No bookmarks yet.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookmarksSection
