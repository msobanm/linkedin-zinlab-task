import Image from "next/image"
import React from "react"
import leftArrowIcon from "../../public/arrow-left.svg"
import rightArrowIcon from "../../public/arrow-right.svg"

type Props = {
  isLeft: boolean
  handleScroll: () => void
}

const ArrowButton = ({ isLeft, handleScroll }: Props) => {
  return (
    <button
      className={`absolute top-1/2 bg-transparent border-2 border-black p-1 rounded-full transition-transform duration-300 hover:scale-110 ${
        isLeft ? "left-4" : "right-4"
      }`}
      onClick={handleScroll}
    >
      <Image
        src={isLeft ? leftArrowIcon : rightArrowIcon}
        alt="arrow"
        width={20}
        height={20}
      />
    </button>
  )
}

export default ArrowButton
