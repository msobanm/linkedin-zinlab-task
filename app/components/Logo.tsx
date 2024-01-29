import React from "react"
import logo from "../../public/logo.svg"
import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={logo}
        alt="Company Logo"
        className="bg-sky-600 rounded-lg w-10 h-10 p-1"
      />
      <h1 className="text-lg font-extrabold text-gray-800">ZinTools</h1>
    </div>
  )
}

export default Logo
