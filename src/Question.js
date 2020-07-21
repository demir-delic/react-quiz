import React from "react"
// import Button from "./Button"

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

function handleSubmit(event) {
  event.preventDefault()
}

function validateAnswer(selectedAnswer, correctAnswer) {
  console.log(selectedAnswer, correctAnswer)
  console.log(selectedAnswer == correctAnswer)
  return selectedAnswer == correctAnswer
}

const Question = ({ questions }) => {
  // create and randomize answers array
  const answers = questions["incorrect_answers"].map((answer) => {
    return answer
  })
  answers.push(questions["correct_answer"])
  shuffle(answers)

  let answerIsCorrect = false
  let selectedAnswer = ""

  return (
    <div className={answerIsCorrect ? "right" : "wrong"}>
      <form onSubmit={(event) => handleSubmit(event)}>
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
                  onChange={(e) => (selectedAnswer = e.target.value)}
                />
                <label htmlFor={timestamp}>{answer}</label>
                <br></br>
              </>
            )
          })}
          <button
            type="submit"
            className={answerIsCorrect ? "right" : "wrong"}
            onClick={() => {
              answerIsCorrect = validateAnswer(selectedAnswer, questions["correct_answer"])
            }}
          >
            Submit
          </button>
          {/* <Button
            onClick={
              //(answerIsCorrect = validateAnswer(selectedAnswer, questions["correct_answer"]))
              sayHello
            }
          /> */}
        </fieldset>
      </form>
    </div>
  )
}

export default Question
