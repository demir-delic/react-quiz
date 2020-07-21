import React, { useState, useEffect } from "react"
import Question from "./Question"

const QuestionList = () => {
  const initialQuestions = {
    id: 1,
    question: "What is the capital city of France?",
    answer: "Paris",
    options: ["London", "Paris", "New-York", "Berlin"],
  }
  const [questions, setQuestions] = useState(initialQuestions)

  const url = "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple"

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, { method: "GET", cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setQuestions(data.results[0])
        })
    }
    fetchData()
  }, [])

  console.log("questions", questions)

  return (
    <div>
      <div>
        <Question questions={questions} key={questions.id} />
      </div>
    </div>
  )
}

export default QuestionList
