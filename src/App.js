import { useState } from "react";
import styled from "styled-components";
import Job from "./components/Job";

const QUESTIONS = [
  {
    question: "What is React?",
    options: [
      {
        text: "A JavaScript library for building user interfaces",
        isCorrect: true
      },
      { text: "A CSS framework", isCorrect: false },
      { text: "A back-end framework", isCorrect: false },
      { text: "A version control system", isCorrect: false }
    ]
  },
  {
    question: "What is a React component?",
    options: [
      { text: "A function that returns an HTML element", isCorrect: true },
      { text: "A JavaScript variable", isCorrect: false },
      { text: "A CSS class", isCorrect: false },
      { text: "An array", isCorrect: false }
    ]
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: [
      { text: "<link>", isCorrect: true },
      { text: "<style>", isCorrect: false },
      { text: "<css>", isCorrect: false },
      { text: "<stylesheet>", isCorrect: false }
    ]
  },
  {
    question:
      "Which of the following methods is used to render a React component to the DOM?",
    options: [
      { text: "ReactDOM.render()", isCorrect: true },
      { text: "React.renderComponent()", isCorrect: false },
      { text: "React.attachComponent()", isCorrect: false },
      { text: "ReactDOM.attach()", isCorrect: false }
    ]
  },
  {
    question: "What does the 'B' in BEM stand for?",
    options: [
      { text: "Block", isCorrect: true },
      { text: "Border", isCorrect: false },
      { text: "Baseline", isCorrect: false },
      { text: "Background", isCorrect: false }
    ]
  },
  {
    question:
      "Which method is used to add an item to the end of an array in JavaScript?",
    options: [
      { text: "push()", isCorrect: true },
      { text: "unshift()", isCorrect: false },
      { text: "pop()", isCorrect: false },
      { text: "shift()", isCorrect: false }
    ]
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <Wrapper>
      {isFinished && (
        <CongratsScreen>
          Congratulations! Your final score is: {score}
        </CongratsScreen>
      )}
      <ScoreCounter>Score: {score}</ScoreCounter>
      <h1>{QUESTIONS[currentQuestionIndex].question}</h1>
      <JobList>
        {QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
          <Job
            key={idx}
            title={option.text}
            company=""
            salary=""
            onClick={() => handleAnswer(option.isCorrect)}
          />
        ))}
      </JobList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 20px;
  font-family: "Roboto", sans-serif;
  background-color: #e8f5e9;
  h1 {
    font-size: 2rem;
    color: #2e7d32;
    margin-bottom: 1rem;
  }
`;

const JobList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

const ScoreCounter = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2e7d32;
`;

const CongratsScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(94, 53, 177, 0.8);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  z-index: 10;
  text-align: center;
`;

export default App;
