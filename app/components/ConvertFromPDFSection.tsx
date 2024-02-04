"use client"

import React, { useRef } from "react"
import Card from "./Card"
import ArrowButton from "../../components/ArrowButton"
import { cardsData } from "@/utils/cardsData"

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
