"use client"

import React, { useEffect, useState } from "react"
import Bookmark from "./Bookmark"
import SectionContainer from "./SectionContainer"

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
    <SectionContainer title="Bookmarks">
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
    </SectionContainer>
  )
}

export default BookmarksSection
