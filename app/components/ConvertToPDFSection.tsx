import React from "react"
import SectionContainer from "./SectionContainer"
import { toPdfData } from "@/utils/cardsData"
import Card from "./Card"

const ConvertToPDFSection = () => {
  return (
    <SectionContainer title="Convert to PDF">
      <div className="flex gap-5">
        {toPdfData.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ConvertToPDFSection
