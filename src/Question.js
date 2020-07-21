import React from "react"
import Button from "./Button"

const Question = ({ questions }) => {
  console.log("questions in question.js", questions)
  return (
    <div>
      <form>
        <fieldset>
          <p>Questions.js</p>
          <p>{questions.question}</p>
          <p>
            <span>
              <input type="radio" name="answerToQuestion" />
            </span>
            {/* {questions.options[0]} */}
          </p>
          <p>
            <span>
              <input type="radio" name="answerToQuestion" />
            </span>
            {/* {questions.options[1]} */}
          </p>
          <p>
            <span>
              <input type="radio" name="answerToQuestion" />
            </span>
            {/* {questions.options[2]} */}
          </p>
          <p>
            <span>
              <input type="radio" name="answerToQuestion" />
            </span>
            {/* {questions.options[3]} */}
          </p>
          <Button className="btn" />
        </fieldset>
      </form>
    </div>
  )
}

export default Question
