"use client"
import appStore from "@/mobx/appStore"
import Title from "@/ui/title"
import PrimaryButton from "@/ui/button/primary"
import { observer } from "mobx-react-lite"
import { FC, useState, useEffect } from "react"

import questionListJson from "../data/questions.json"
import QuestionList from "@/components/questionList"
import filterStore from "@/mobx/filterStore"
import FilterInput from "@/ui/input/filter"
import Nav from "@/components/nav"
import { useRouter } from "next/navigation"
import { NavNames } from "@/util"

const RootPage = observer(() => {
  const router = useRouter()
  router.push(NavNames.home)
  return <div className="h-[100vh]"></div>
})

export default RootPage
