import React, { FC, useState } from "react"
import Input from "."
import { InputPropType } from "./interfaces"
import { FaMagnifyingGlass } from "react-icons/fa6"
type FilterInputProps = {
  onChange: (e: any) => void
  value: string
}
const FilterInput: FC<FilterInputProps> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      className={`w-full flex items-center border-b-2  border-color-text-gray  
  px-4 `}
      // px-4 ${isFocused ? "ring-2 ring-color-blue" : ""}`}
    >
      <FaMagnifyingGlass size={25} className="text-color-text-gray" />
      <Input
        {...rest}
        type="string"
        className="pl-5 w-full py-6  outline-none  border-color-text-gray
       placeholder:text-color-text-gray placeholder:pl-10 "
        placeholder="Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}
export default FilterInput
