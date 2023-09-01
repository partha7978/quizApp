import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./Question.scss";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useDispatch, useSelector } from "react-redux";
import { setQuestionsPlusAns } from "../../store/resultSlice";
import { startTimer, stopTimer } from "../../store/timerSlice";

const Question = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);
  const [questions, setQuestions] = useState([]);
  const [mainQuestion, setMainQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(mainQuestion[0]);
  const [questionNum, setQuestionNum] = useState(null);
  const [submit, setSubmit] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestion, setAnsweredQuestion] = useState(true);

  //function to fetch data
  const fetchQuestions = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=15");
    const data = await res.json();
    setQuestions(data.results);
  };

  //for showing queston according to the clicked question number
  const handleShowQuestion = (id) => {
    dispatch(startTimer());
    setQuestionNum(id);
    // console.log(questionNum, 'num')
    // console.log(mainQuestion[id], 'main')
    // console.log(currentQuestion, 'bef')
    setCurrentQuestion(mainQuestion[id]);
    // console.log(currentQuestion, 'curr')
  };

  //to fetch questions.
  useEffect(() => {
    fetchQuestions();
  }, []);

  //to add the correct and incorrect options as well as quesitons into an array and shuffle the options
  useEffect(() => {
    const combined = questions.map((question) => ({
      question: question.question,
      answers: [
        { text: question.correct_answer, isTrue: true },
        ...question.incorrect_answers.map((answer) => ({
          text: answer,
          isTrue: false,
        })),
      ],
    }));
    setMainQuestion(combined);
    // console.log(mainQuestion, "options");
  }, [questions]);

  // handling the timer after user clicks on submit  Dispatch the action to stop the timer and go to result page
  const handleStopTimer = () => {
    console.log(result, "res");
    if (result.length > 0) {
      alert("Are you sure, you want to submit");

      navigate(`/result`);
      dispatch(stopTimer());
    } else {
      alert("atleast attempt one quesiton to view result.");
    }
  };

  // submit question
  const setSubmitQuestion = (quesWithAnswer) => {
    const updatedValue = [...submit, { ...quesWithAnswer, selectedAnswer }];
    handleShowQuestion(questionNum + 1 === 15 ? 0 : questionNum + 1);
    console.log(updatedValue, "updated value");
    dispatch(setQuestionsPlusAns(updatedValue));
    console.log(result, "finalState");
    setSelectedAnswer(null);
    return true;
  };

  return (
    <Box className="question__main">
      {questionNum !== null && (
        <>
          <div className="question__number-container">
            {mainQuestion.map((item, id) => (
              <button
                className="question__number-button"
                key={id}
                onClick={() => handleShowQuestion(id)}
              >
                {id + 1}
              </button>
            ))}
          </div>

          <div className="question__container">
            {currentQuestion && (
              <Box className="question__card">
                <h4 className="question">
                  {`Q.${questionNum + 1}-` + currentQuestion.question}{" "}
                </h4>

                <div className="options">
                  <FormControl>
                    <ul>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={(e) => setSelectedAnswer(e.target.value)} // Update selected answer state
                      >
                        {currentQuestion.answers.map((item, idList) => (
                          <li key={idList}>
                            <FormControlLabel
                              value={item.text}
                              label={item.text}
                              control={<Radio />}
                            />
                          </li>
                        ))}
                      </RadioGroup>
                    </ul>
                  </FormControl>
                </div>
                <button
                  className="popup__button"
                  onClick={() => setSubmitQuestion(currentQuestion)}
                >
                  {selectedAnswer ? "Next" : "Skip"}
                </button>
              </Box>
            )}
          </div>
        </>
      )}
      <div className="submit">
        {questionNum === null ? (
          <button
            className="submit__button"
            onClick={() => handleShowQuestion(0)}
          >
            Start Test
          </button>
        ) : (
          // <Link to="/result">
          <button
            className="submit__button"
            id="submitAll__button"
            onClick={() => handleStopTimer()}
          >
            Submit All
          </button>
          // </Link>
        )}
      </div>
    </Box>
  );
};

export default Question;
