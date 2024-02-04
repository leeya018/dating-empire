import React, { FC, useEffect, useState } from "react"

type ColorsProps = {
  chosenColor: string
  handleChosenColor: Function
}
const ColorList: FC<ColorsProps> = ({ chosenColor, handleChosenColor }) => {
  return (
    <div className="mt-5 flex items-center justify-start gap-2 flex-wrap">
      <ColorItem
        color={"bg-color-blue"}
        chosenColor={chosenColor}
        handleChosenColor={handleChosenColor}
      />
      <ColorItem
        color={"bg-color-yellow"}
        chosenColor={chosenColor}
        handleChosenColor={handleChosenColor}
      />
      <ColorItem
        color={"bg-color-red"}
        chosenColor={chosenColor}
        handleChosenColor={handleChosenColor}
      />
      <ColorItem
        color={"bg-color-black"}
        chosenColor={chosenColor}
        handleChosenColor={handleChosenColor}
      />
      <ColorItem
        color={"bg-color-brown"}
        chosenColor={chosenColor}
        handleChosenColor={handleChosenColor}
      />
      <ColorItem
        color={"bg-color-green"}
        chosenColor={chosenColor}
        handleChosenColor={handleChosenColor}
      />
    </div>
  )
}

export default ColorList

type ColorProps = {
  color: string
  chosenColor: string
  handleChosenColor: Function
}
const ColorItem: FC<ColorProps> = ({
  color,
  chosenColor,
  handleChosenColor,
}) => {
  return (
    <div
      className={`${color} w-10 h-10 rounded-md flex gap-2 flex-wrap cursor-pointer ${
        chosenColor === color
          ? "border-color-text-gray border-2 scale-125 "
          : ""
      }`}
      onClick={() => handleChosenColor(chosenColor === color ? "" : color)}
    ></div>
  )
}
