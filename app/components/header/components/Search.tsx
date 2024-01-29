import React from "react"

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="flex items-center justify-center p-2 w-full flex-1">
      <div className="flex items-center p-2 w-1/2 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 border-none outline-none p-2 bg-transparent"
        />
        <img
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
          alt="Search Icon"
          className="w-5 h-5 mx-4 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Search
