import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

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
        <li key={key}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="border-b-2">
                {questionListItem.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{questionListItem.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </li>
      ))}
    </ul>
  )
})

export default QuestionList
