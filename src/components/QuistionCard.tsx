import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from "grommet";
import React, { useState } from "react";
import { useEffect } from "react";
import { Answers, getAnswers, getQuestions, Question } from "../API";

type Props = {
  question: any;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<Answers>>([]);

  useEffect(() => {
    getQuestions().then((content) => setQuestions(content));
  }, [setQuestions]);

  useEffect(() => {
    getAnswers().then((answer) => setUserAnswers(answer));
  }, [setUserAnswers]);

  return (
    <div>
      <Box align="center" pad="medium" border="between">
        <Text
          color={{ light: "Lavender" }}
          margin="large"
          size="4xl"
          weight="bold"
        >
          Verifică-ți cunoștințele Biblice
        </Text>
        <p className="score">Score:</p>
        <Card
          flex
          pad={{ horizontal: "small" }}
          align="center"
          height="large"
          width="medium"
          background="light-1"
        >
          <p className="number">
            Întrebarea: {questionNr} / {totalQuestions}
          </p>
          {questions?.map((question) => (
            <Text margin="medium" alignSelf="center" weight="bold">
              {question.content}
            </Text>
          ))}

          <p />
          <div>
            {userAnswers.map((answer) => (
              <div>
                <Button
                  className="button.default.border.color"
                  fill="horizontal"
                  label={answer.answer}
                  hoverIndicator
                  type="submit"
                  margin="small"
                  disabled={userAnswer}
                  onClick={callback}
                />

                <span />
              </div>
            ))}
          </div>

          <CardFooter
            alignSelf="end"
            pad={{ horizontal: "small" }}
            background="light-1"
          ></CardFooter>
        </Card>
      </Box>
    </div>
  );
};
export { QuestionCard };
