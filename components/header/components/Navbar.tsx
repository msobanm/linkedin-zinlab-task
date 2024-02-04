import React from "react"
import NavItem from "./NavItem"

const navitems = [
  { name: "Stock Video" },
  { name: "Video Templates" },
  { name: "Music" },
  { name: "Sound Effects" },
  { name: "Graphic Templates" },
  { name: "Graphics" },
  { name: "Presentation Templates" },
  { name: "Photos" },
  { name: "Fonts" },
  { name: "Add-ons" },
  { name: "More" },
]
const Navbar = () => {
  return (
    <nav className="pt-4 mt-2 flex items-center justify-center">
      <ul className="w-full flex items-center">
        {navitems.map((item) => (
          <NavItem key={item.name}>{item.name}</NavItem>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
