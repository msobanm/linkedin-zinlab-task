import React from "react"

type Props = {
  children: string
}

const NavItem = ({ children }: Props) => {
  return (
    <li className="text-gray-600 font-semibold cursor-pointer text-sm px-4 pb-4 border-b-2 border-transparent  hover:border-blue-700 transition duration-100">
      {children}
    </li>
  )
}

export default NavItem
