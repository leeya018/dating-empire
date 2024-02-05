import filterStore from "@/mobx/filterStore"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"

const NavFilter = observer(() => {
  const [showMagnify, setShowMagnify] = useState(true)

  return (
    <div className="relative h-20 flex ">
      {showMagnify && (
        <HiMagnifyingGlass
          size={30}
          className="absolute top-1/2 left-2  -translate-y-1/2"
        />
      )}
      <input
        onFocus={() => setShowMagnify(false)}
        onBlur={() => setShowMagnify(true)}
        onChange={(e: any) => filterStore.setFilter(e.target.value)}
        value={filterStore.search}
        type="text"
        className="rounded-full w-72  pl-14 bg-color-gray-nav outline-none
          focus:ring-2 focus:ring-color-blue "
        placeholder="learn language"
      />
    </div>
  )
})
export default NavFilter
