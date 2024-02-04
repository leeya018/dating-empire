import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"

type QuestionListItem = {
  question: string
  answer: string
}
type QuestionListProps = {
  questionList: QuestionListItem[]
}
const QuestionList = observer<QuestionListProps>(({ questionList }) => {
  return (
    <ul>
      {questionList.map((questionListItem: QuestionListItem, key: number) => (
        <li key={key}>{questionListItem.question}</li>
      ))}
    </ul>
  )
})

export default QuestionList
