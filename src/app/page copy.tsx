"use client"
import appStore from "@/mobx/appStore"
import Title from "@/ui/title"
import PrimaryButton from "@/ui/button/primary"
import { observer } from "mobx-react-lite"
import { FC, useState, useEffect } from "react"

const HomePage = observer(() => {
  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    appStore
      .getMatches()
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div>
      <Title>tinder remote</Title>
      <PrimaryButton
        onClick={getMatches}
        disabled={appStore.isLoading}
        className={`justify-normal ${
          appStore.isLoading ? "bg-color-disabled-gray" : "bg-color-blue"
        }`}
      >
        Get Matches
      </PrimaryButton>
    </div>
  )
})

export default HomePage
