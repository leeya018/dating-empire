import React, { useState, useEffect } from "react"
import { UserAuth } from "@/context/AuthContext"
import { useRouter, usePathname } from "next/navigation"
import navStore from "@/mobx/navStore"

const useNav = () => {
  const router = useRouter()
  const { user, logOut } = UserAuth()
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!user) {
      // router.push(`/${NavNames.login}`)
    }
  }, [user])

  useEffect(() => {
    console.log("pathname", pathname)
    const path = pathname?.slice(1)
    if (path) {
      navStore.setNav(path)
    }
  }, [pathname])

  return { router, user, logOut, isLoading, setIsLoading }
}

export default useNav
