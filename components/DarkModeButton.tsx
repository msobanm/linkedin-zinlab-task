import Image from "next/image"
import React from "react"

const DarkModeButton = () => {
  return (
    <button className="mt-4 p-4 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition duration-100">
      <Image src="/img/moon.png" alt="Logo" width={20} height={20} />
    </button>
  )
}

export default DarkModeButton
