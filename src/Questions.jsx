import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  console.log(questions);

  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((qus) => {
        return (
          <SingleQuestion
            key={qus.id}
            {...qus}
          />
        );
      })}
    </section>
  );
};

export default Questions;
