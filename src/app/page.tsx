"use client"
import appStore from "@/mobx/appStore"
import Title from "@/ui/title"
import PrimaryButton from "@/ui/button/primary"
import { observer } from "mobx-react-lite"
import { FC, useState, useEffect } from "react"

import questionListJson from "../data/questions.json"
import QuestionList from "@/components/questionList"

const HomePage = observer(() => {
  useEffect(() => {
    console.log(questionListJson)
  }, [])

  return (
    <div>
      <Title>Common questions</Title>
      <QuestionList questionList={questionListJson.data} />
    </div>
  )
})

export default HomePage
