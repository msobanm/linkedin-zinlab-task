import SaveButton from "@/components/SaveButton"
import Image from "next/image"
import React from "react"

type Bookmark = {
  name: string
  icon: string
}

const Bookmark = ({ name, icon }: Bookmark) => {
  const removeBookmark = (nameToRemove: string) => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    )
    const updatedBookmarks = storedBookmarks.filter(
      (bookmark: any) => bookmark.name !== nameToRemove
    )
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks))
  }
  return (
    <div className="w-52 bg-white border border-gray-100 cursor-pointer p-6 rounded-2xl">
      <div className="flex justify-between items-start mb-4">
        <Image src={icon} alt="icon" width={70} height={70} />
        <SaveButton unSave onClick={() => removeBookmark(name)} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-500">{name}</h3>
      </div>
    </div>
  )
}

export default Bookmark
