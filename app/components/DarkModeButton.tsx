import React from "react"

type Props = {}

const DarkModeButton = (props: Props) => {
  return (
    <button className="mt-4 p-4 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition duration-100">
      <img
        src="https://www.svgrepo.com/show/304625/moon-dark-theme.svg"
        alt="Logo"
        className="w-4 h-4"
      />
    </button>
  )
}

export default DarkModeButton
