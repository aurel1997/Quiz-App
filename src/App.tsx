import { Box, Grommet, Image } from "grommet";
import "./style.css";

import React, { useState } from "react";
import { QuestionCard } from "./components/QuistionCard";
import { getQuestions } from "./API";

const TotalQuestion = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {};
  const checkAnswer = (e: any) => {};

  return (
    <Grommet>
      <div className="bg">
        <QuestionCard
          question={getQuestions}
          answers={questions[number]}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNr={number + 1}
          totalQuestions={TotalQuestion}
        />
        <button onClick={getQuestions}>Next Question</button>
      </div>
    </Grommet>
  );
};

export { App };
