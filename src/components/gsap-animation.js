import React, { useEffect, useState } from "react"

import { gsap } from "gsap"

const GSAP = props => {
  // need a way to set the total based on how big the element is
  const [boxTotal, setBoxTotal] = useState(15)

  useEffect(() => {
    gsap.from(".box", {
      duration: 3,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    })
  }, [])

  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx)
  }
  const itemCreation = range(1, boxTotal)

  const boxGenerator = index => {
    return <div className="box" key={`box-${index}-key`}></div>
  }

  return (
    <div className="box-animation-container">
      {itemCreation.map((item, index) => {
        return boxGenerator(index)
      })}
    </div>
  )
}

export default GSAP
