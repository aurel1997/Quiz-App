import { Box, Button, Grommet, Image } from "grommet";
import "./style.css";

import React, { useEffect, useState } from "react";
import { QuestionCard } from "./components/QuistionCard";
import { Answers, getAnswers, getQuestions, Question } from "./API";

const TotalQuestion = 10;

const App = () => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    getQuestions().then((content) => setQuestions(content));
  }, [setQuestions]);

  return (
    <Grommet>
      <div className="bg">
        {questions.length && (
          <QuestionCard
            question={questions?.[0]}
            callback={""}
            userAnswer={undefined}
            questionNr={number + 1}
            totalQuestions={TotalQuestion}
          />
        )}
        <Button active={true} onClick={getQuestions}>
          Next Question
        </Button>
      </div>
    </Grommet>
  );
};

export { App };
