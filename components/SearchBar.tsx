import Image from "next/image"
import React from "react"

const Search = () => {
  return (
    <div className="flex items-center p-2 w-1/2 bg-gray-200 rounded-full">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 border-none outline-none p-2 bg-transparent"
      />
      <Image
        src="/img/search.jpg"
        alt="Search Icon"
        className="mx-2 cursor-pointer"
        width={25}
        height={25}
      />
    </div>
  )
}

export default Search
