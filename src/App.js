import React, { useState } from "react"
import Button from "./Button"
import Question from "./Question"
import Answer from "./Answer"
import "./App.css"

const App = () => {
  const tenQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple")
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  tenQuestions()

  return (
    <div className="App">
      <form>
        <fieldset>
          <Question></Question>
          <Answer></Answer>
          <Answer></Answer>
          <Answer></Answer>
          <Button className="btn"></Button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
