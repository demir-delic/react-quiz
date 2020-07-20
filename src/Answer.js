import React from "react"

const answer = (props) => {
  const timestampId = Date.now()
  return (
    <>
      <input
        className="input"
        id={timestampId}
        type="radio"
        name="answerToQuestion"
        value={timestampId}
      />
      <label htmlFor={timestampId}>{timestampId}</label>
      <br></br>
    </>
  )
}

export default answer
