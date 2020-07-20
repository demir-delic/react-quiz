import React from 'react';
import Button from './Button';
import Question from './Question';
import Answer from './Answer';
import './App.css';

function App() {
  const getData = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
      .then(response => response.json())
      .then(data => console.log(data));
  }
  return (

    <div className="App" onClick={getData}>
      <Question></Question>
      <Answer></Answer>
      <Answer></Answer>
      <Answer></Answer>
      <Button className="btn"></Button>
    </div>
  );
}

export default App;
