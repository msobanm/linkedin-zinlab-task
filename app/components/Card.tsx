import SaveButton from "@/components/SaveButton"
import Image from "next/image"
import React from "react"

type Props = {
  icon: string
  name: string
  description: string
}

const Card = ({ icon, name, description }: Props) => {
  const handleSave = () => {
    const existingBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    )

    const isAlreadyBookmarked = existingBookmarks.some(
      (bookmark: { name: string; icon: string; description: string }) =>
        bookmark.name === name
    )

    if (!isAlreadyBookmarked) {
      const updatedBookmarks = [
        ...existingBookmarks,
        { name, icon, description },
      ]

      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks))

      console.log("Item saved to bookmarks!")
    } else {
      console.log("Item is already bookmarked!")
    }
  }

  return (
    <div className="min-w-52 bg-white border border-gray-100 cursor-pointer p-6 rounded-2xl transition-transform transform hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <Image src={icon} alt="icon" width={70} height={70} />
        <SaveButton onClick={handleSave} />
      </div>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default Card
