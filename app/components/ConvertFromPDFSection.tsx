"use client"

import React, { useRef } from "react"
import Card from "./Card"
import ArrowButton from "../../components/ArrowButton"

const cardsData = [
  {
    icon: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
    name: "PDF to Word",
    description: "Easily convert PDF to",
  },
  {
    icon: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
    name: "PDF to PPT",
    description: "Easily convert PDF to PPT",
  },
  {
    icon: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
    name: "PDF to Excel",
    description: "Easily convert PDF to Excel",
  },
  {
    icon: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
    name: "PDF to JPG",
    description: "Easily convert PDF to JPG,PNG",
  },
  {
    icon: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
    name: "PDF to TXT",
    description: "Easily convert PDF to text",
  },
  {
    icon: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
    name: "PDF to RTF",
    description: "Easily convert PDF to RTF",
  },
  {
    icon: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
    name: "PDF to Pages",
    description: "Easily convert PDF to Pages",
  },
  {
    icon: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
    name: "PDF to HTML",
    description: "Easily convert PDF to HTML",
  },
]

const ConvertFromPDFSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollDistance = 250 // Adjust scroll distance as needed
      const targetScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollDistance
          : container.scrollLeft + scrollDistance

      const startTime = performance.now()
      const duration = 300 // Adjust duration as needed

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        container.scrollLeft =
          container.scrollLeft +
          progress * (targetScrollLeft - container.scrollLeft)

        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        }
      }

      requestAnimationFrame(animateScroll)
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-6  relative">
        <h2 className="text-3xl font-bold mb-6">Convert From PDF</h2>

        <div
          ref={scrollContainerRef}
          className="flex py-6 px-4 gap-10 overflow-x-scroll no-scrollbar transition-transform duration-500"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <ArrowButton isLeft={true} handleScroll={() => handleScroll("left")} />
        <ArrowButton
          isLeft={false}
          handleScroll={() => handleScroll("right")}
        />
      </div>
    </section>
  )
}

export default ConvertFromPDFSection
