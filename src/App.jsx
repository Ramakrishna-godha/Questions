import { useState } from "react";

import Questions from "./Questions";
import questions from "./data";

const App = () => {
  const [question, setQuestion] = useState(questions);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
