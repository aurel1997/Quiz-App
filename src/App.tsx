import { Box, Grommet, Image } from "grommet";
import "./style.css";

import React, { useState } from "react";
import { QuestionCard } from "./components/QuistionCard";

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

  const nextQuestion = () => {};

  return (
    <Grommet>
      <div className="bg">
        <QuestionCard
          question={questions[number]}
          answers={questions[number]}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          questionNr={number + 1}
          totalQuestions={TotalQuestion}
        />
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </Grommet>
  );
};

export { App };
