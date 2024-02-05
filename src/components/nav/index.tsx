import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import Image from "next/image"
import { NavNames } from "@/util"
import useNav from "./hooks/useNav"
import NavItem from "./item"
import NavFilter from "./filter"
// nav
const Nav = observer(() => {
  const { user, logOut } = useNav()
  return (
    <div className="sticky w-full py-5 flex items-center justify-between ">
      <div className=" flex items-center  justify-around gap-5 text-xl font-bold">
        <div className="relative">
          <div className="font-bold text-2xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Golden List
          </div>
          <Image
            alt="golden image"
            width={122}
            height={122}
            className="rounded-lg "
            src={"/images/golden.png"}
          />
        </div>
        <NavItem name={`${NavNames.home}`} />
        <NavItem name={`${NavNames.commonQuestions}`} />
      </div>
      <div className="flex items-center justify-around gap-5 text-xl ">
        <NavFilter />
        <div className="flex justify-center gap-3 items-center ">
          <div className="font-semibold">{user?.displayName}</div>

          <Image
            alt="me image"
            width={70}
            height={70}
            className="rounded-full"
            src={user?.photoURL || ""}
          />
          <button onClick={logOut}>logout</button>
        </div>
      </div>
    </div>
  )
})

export default Nav
