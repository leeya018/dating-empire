import React from "react"

export type InputPropType = {
  name?: string
  className?: string
  type: string
  onChange: (e: any) => void
  value: any
  placeHolder: string
  inputRef?: React.RefObject<HTMLInputElement>
  onKeyDown?: any
}
