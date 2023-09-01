import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./Question.scss";
import { Link } from "react-router-dom";
import QuestionBar from "../QuestionBar/QuestionBar";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [mainQuestion, setMainQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(mainQuestion[0]);
  const [questionNum, setQuestionNum] = useState(0);

  const fetchQuestions = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=15");
    const data = await res.json();
    setQuestions(data.results);
  };

  //for showing queston according to the clicked question number 
  const handleShowQuestion = (id) => {
    setQuestionNum(id);
    console.log(questionNum, 'num')
    // console.log(mainQuestion[id], 'main')
    // console.log(currentQuestion, 'bef')
    setCurrentQuestion(mainQuestion[id]);
    // console.log(currentQuestion, 'curr')
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

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
    console.log(mainQuestion, "options");
  }, [questions]);

  return (
    <Box className="question__main">
      <div className="question__number-container">
        {mainQuestion.map((item, id) => (
          <button className="question__number-button" key={id} onClick={() => handleShowQuestion(id)}>
            {id + 1}
          </button>
        ))}
      </div>
      <div className="question__container">
      {currentQuestion && (
          <Box className="question__card" >
            <h4 className="question">{`Q.${questionNum}-` + currentQuestion.question} </h4>

            <div className="options">
              <FormControl>
                <ul>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
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
            <button className="popup__button" onClick={() => handleShowQuestion(questionNum > 155 ? 1 : questionNum+1)}>Submit</button>
          </Box>
        )}
      </div>
    </Box>
  );
};

export default Question;
