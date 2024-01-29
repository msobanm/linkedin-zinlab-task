import Image from "next/image"
import React from "react"

type Props = {
  icon: string
  name: string
  description: string
}

const Card = ({ icon, name, description }: Props) => {
  return (
    <div className="min-w-52 bg-white border border-gray-100 cursor-pointer p-6 rounded-2xl transition-transform transform hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <Image src={icon} alt="icon" width={70} height={70} />
        <Image
          src="data:image/png;base64,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"
          alt="save icon"
          width={25}
          height={25}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default Card
