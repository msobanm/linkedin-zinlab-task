"use client"

import React, { useRef } from "react"
import Card from "./Card"
import ArrowButton from "../../components/ArrowButton"
import { fromPdfData } from "@/utils/cardsData"
import SectionContainer from "./SectionContainer"

const ConvertFromPDFSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollDistance = 250
      const targetScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollDistance
          : container.scrollLeft + scrollDistance

      const startTime = performance.now()
      const duration = 300

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
    <SectionContainer title="Convert from PDF">
      <div
        ref={scrollContainerRef}
        className="flex py-6 px-4 gap-10 overflow-x-scroll no-scrollbar transition-transform duration-500"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {fromPdfData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <ArrowButton isLeft={true} handleScroll={() => handleScroll("left")} />
      <ArrowButton isLeft={false} handleScroll={() => handleScroll("right")} />
    </SectionContainer>
  )
}

export default ConvertFromPDFSection
