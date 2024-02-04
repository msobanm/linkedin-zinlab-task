import Image from "next/image"
import React from "react"

type Props = { icon: string }

const SocialMediaIcon = ({ icon }: Props) => {
  return (
    <div className="cursor-pointer hover:bg-gray-300 p-2 rounded-full transition duration-150">
      <Image priority src={icon} alt="follow us on yt" />
    </div>
  )
}

export default SocialMediaIcon
