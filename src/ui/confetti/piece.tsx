import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const colors = [
  "#d82626",
  "#d89126",
  "#b5d826",
  "#49d826",
  "#26d86d",
  "#26d8d8",
  "#266dd8",
  "#4926d8",
  "#b526d8",
  "#d82691",
]

const ConfettiPiece = () => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      y: "random(-100, 100)",
      x: "random(-100, 100)",
      rotation: "random(-90, 90)",
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    })
  }, [])

  const randInd: number = Math.floor(Math.random() * colors.length)
  const bgColor: string = `bg-[${colors[randInd]}]`

  return <div ref={ref} className={` w-4 h-4 ${bgColor}`}></div>
}

export default ConfettiPiece
