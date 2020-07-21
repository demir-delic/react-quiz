import React from "react"
import Button from "./Button"

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function validateAnswer(formElements, correctAnswer) {
  console.log(formElements, correctAnswer)
}

function updateSelectedAnswer() {
  console.log("this", this)
}

const Question = ({ questions }) => {
  // create and randomize answers array
  const answers = questions["incorrect_answers"].map((answer) => {
    return answer
  })
  answers.push(questions["correct_answer"])
  shuffle(answers)

  let answerIsCorrect = false

  return (
    <div className={answerIsCorrect ? "right" : "wrong"}>
      <form>
        <fieldset>
          <p>{questions.question}</p>

          {answers.map((answer) => {
            let timestamp = Math.random()
            return (
              <>
                <input
                  type="radio"
                  id={timestamp}
                  name="answerToQuestion"
                  value={answer}
                  onChange={updateSelectedAnswer()}
                />
                <label htmlFor={timestamp}>{answer}</label>
                <br></br>
              </>
            )
          })}
          <Button
            className="btn"
            onClick={validateAnswer("placeholder", questions["correct_answer"])}
          />
        </fieldset>
      </form>
    </div>
  )
}

export default Question
