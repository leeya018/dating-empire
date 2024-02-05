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
          <Image
            alt="golden image"
            width={122}
            height={122}
            className="rounded-lg bg-center "
            src={"/images/dating empire logo.jpg"}
          />
        </div>
      </div>
      <div>
        <NavItem name={`${NavNames.home}`} />
        <NavItem name={`${NavNames.commonQuestions}`} />
        <NavItem name={`${NavNames.products}`} />
      </div>
      <div className="flex items-center justify-around gap-5 text-xl ">
        <div className="flex justify-center gap-3 items-center ">
          <div className="font-semibold text-[16px]">{user?.displayName}</div>

          <Image
            alt="me image"
            width={50}
            height={50}
            className="rounded-full"
            src={user?.photoURL || ""}
          />
          {/* <button onClick={logOut}>logout</button> */}
        </div>
      </div>
    </div>
  )
})

export default Nav
