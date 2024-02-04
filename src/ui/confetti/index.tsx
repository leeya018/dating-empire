import React from "react"
import ConfettiPiece from "./piece"

const Confetti = () => {
  const numberOfPieces = 50 // Adjust as needed

  return (
    <div>
      {Array.from({ length: numberOfPieces }).map((_, index) => (
        <ConfettiPiece key={index} />
      ))}
    </div>
  )
}

export default Confetti
