import React from "react"
import Logo from "../Logo"
import Search from "./components/Search"
import Button from "../Button"
import Navbar from "./components/Navbar"

const header = () => {
  return (
    <header className="pt-2 px-4 flex flex-col justify-between items-center shadow-md">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <Search />
        <div className="flex items-center gap-2">
          <Button primary={false}>Login</Button>
          <Button primary={true}>Signup</Button>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default header
