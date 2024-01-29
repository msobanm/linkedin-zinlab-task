import React from "react"

type Props = {
  primary: boolean
  children: string
}

const Buttons = ({ primary, children }: Props) => {
  return (
    <button
      className={`${
        primary
          ? "bg-blue-500 text-white  hover:bg-blue-600"
          : "bg-white text-black hover:bg-gray-100"
      } py-2 w-24 rounded-full text-base transition duration-300 ease-in-out `}
    >
      {children}
    </button>
  )
}

export default Buttons
