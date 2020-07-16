import React from 'react';
import Button from './Button';
import Question from './Question';
import Answer from './Answer';
import './App.css';

function App() {
  return (

    <div className="App">
      <Question></Question>
      <Answer></Answer>
      <Answer></Answer>
      <Answer></Answer>
      <Button className="btn"></Button>
    </div>
  );
}

export default App;
