import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handlebadClick = () => setBad(bad + 1);

  const allFeedbacks = bad + neutral + good;
  const newArr = [bad, good, neutral];
  const average = newArr.reduce((acc, curr) => acc + curr, 0) / newArr.length;
  let positive =
    good === 0
      ? 0
      : (good * 100) / newArr.reduce((acc, curr) => acc + curr, 0) + "%";

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <Header header="statistics" />
      {!(good || bad || neutral) ? (
        <span>No feedback Given yet</span>
      ) : (
        <div>
          <Display name="Good" count={good} />
          <Display name="Neutral" count={neutral} />
          <Display name="Bad" count={bad} />
          <Display name="all" count={allFeedbacks} />
          <Display name="Average" count={average} />
          <Display name="Positive" count={positive} />
        </div>
      )}
    </div>
  );
};

export default App;
