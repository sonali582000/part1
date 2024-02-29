import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {/* <p>
        {text}
        {value}
      </p> */}
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  postiveFeedback,
}) => {
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />

      <StatisticLine text="all" value={total} />

      <StatisticLine text="good" value={good} />

      <StatisticLine text="average" value={average} />

      <StatisticLine text="positive" value={postiveFeedback} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodReview = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const neutralReview = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const badReview = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <>
        <h1>give feedback</h1>
        <button onClick={goodReview}>good</button>
        <button onClick={neutralReview}>neutral</button>
        <button onClick={badReview}>bad</button>

        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={goodReview}>good</button>
      <button onClick={neutralReview}>neutral</button>
      <button onClick={badReview}>bad</button>
      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={total / 3}
        postiveFeedback={(good / total) * 100}
      />
    </>
  );
};

export default App;
