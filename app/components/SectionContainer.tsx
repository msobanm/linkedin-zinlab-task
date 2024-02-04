import React from "react"

type SectionContainer = {
  title: string
  children: React.ReactNode
}

const SectionContainer = ({ title, children }: SectionContainer) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6  relative">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
