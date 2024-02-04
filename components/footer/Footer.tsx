import React from "react"
import FollowSection from "./components/FollowSection"
import LegalInfoSection from "./components/LegalInfoSection"
import InternalLinksSection from "./components/InternalLinksSection"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-8">
      <div className="container mx-auto flex flex-col">
        <FollowSection />
        <InternalLinksSection />
        <LegalInfoSection />
      </div>
    </footer>
  )
}

export default Footer
