import React from "react"
import Logo from "../../Logo"
import DarkModeButton from "../../DarkModeButton"

const links = [
  "Privacy Policy",
  "Terms and Conditions",
  "Cookies Policy",
  "About Us",
  "Eula",
  "Contact",
]

const LegalInfoSection = () => {
  return (
    <div className="w-full py-4 flex items-center">
      <Logo />
      <div className="ml-4 flex flex-1 gap-4 text-sm">
        {links.map((link) => (
          <a href="#">{link}</a>
        ))}
      </div>
      <div>
        <DarkModeButton />
      </div>
    </div>
  )
}

export default LegalInfoSection
