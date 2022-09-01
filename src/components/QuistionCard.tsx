import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from "grommet";
import React from "react";

type Props = {
  question: string;
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
            Question: {questionNr} / {totalQuestions}
          </p>
          <Text margin="medium" alignSelf="center" weight="bold">
            Care este cea mai veche carte din Biblie?
          </Text>
          <p />
          <div>
            {answers?.map((answer) => (
              <div>
                <Button
                  key={answer}
                  className="button.default.border.color"
                  fill="horizontal"
                  label="Alege"
                  hoverIndicator
                  type="submit"
                  margin="small"
                  disabled={userAnswer}
                  onClick={callback}
                />
                <Button
                  key={answer}
                  className="button.default.border.color"
                  fill="horizontal"
                  label="Alege"
                  hoverIndicator
                  type="submit"
                  margin="small"
                  disabled={userAnswer}
                  onClick={callback}
                />
                <Button
                  key={answer}
                  className="button.default.border.color"
                  fill="horizontal"
                  label="Alege"
                  hoverIndicator
                  type="submit"
                  margin="small"
                  disabled={userAnswer}
                  onClick={callback}
                />
                <Button
                  key={answer}
                  className="button.default.border.color"
                  fill="horizontal"
                  label="Alege"
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
