import { Box, Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import React from "react";

const QuestionCard = () => {
  return (
    <div>
      <Box align="center" pad="medium">
        <Card height="medium" width="medium" background="light-1">
          <CardHeader pad="medium">Header</CardHeader>
          <CardBody pad="medium">Body</CardBody>
          <CardFooter
            alignContent="end"
            pad={{ horizontal: "small" }}
            background="light-2"
          >
            <Button label="Alege" hoverIndicator />
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
};
export { QuestionCard };
