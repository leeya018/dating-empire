import navStore from "@/mobx/navStore"
import { observer } from "mobx-react-lite"
import Link from "next/link"
import { FC } from "react"
import { NavItemProps } from "./hooks/interfaces"

const NavItem: FC<NavItemProps> = observer(({ name }) => {
  console.log(name, navStore.nav)
  return (
    <Link
      className={`${
        name === navStore.nav ? "underline bg-color-purple" : ""
      } cursor-pointer p-2 m-2 capitalize
        duration-200 hover:underline hover:bg-color-purple hover:bg-opacity-50`}
      href={`/${name}`}
      onClick={() => navStore.setNav(`${name}`)}
    >
      {name}
    </Link>
  )
})
export default NavItem
