import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./Question.scss";
import { Link } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useDispatch, useSelector } from "react-redux";
import { setQuestionsPlusAns } from '../../store/resultSlice'

const Question = () => {
  const dispatch = useDispatch();
  const result =  useSelector((state) => state.result);
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
    setQuestionNum(id);
    // console.log(questionNum, 'num')
    // console.log(mainQuestion[id], 'main')
    // console.log(currentQuestion, 'bef')
    setCurrentQuestion(mainQuestion[id]);
    // console.log(currentQuestion, 'curr')
  }

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

  // submit question 
  const setSubmitQuestion = (quesWithAnswer) => {
    if(selectedAnswer !== null) {
      const updatedValue = [...submit, {...quesWithAnswer, selectedAnswer}];
      handleShowQuestion( questionNum+1 === 15 ? 0 : questionNum+1);
      console.log(updatedValue, 'updated value')
      dispatch(setQuestionsPlusAns(updatedValue));
      console.log(result, 'finalState');
      return true;
    }
    else {
      alert('please select an answer');
    }  
  }

  return (
    <Box className="question__main">
      <div className="question__number-container">
        {mainQuestion.map((item, id) => (
          <button className="question__number-button" key={id} onClick={() => handleShowQuestion(id)}>
            {id + 1}
          </button>
        ))}
      </div>
      {questionNum !== null &&
      <div className="question__container">
      {currentQuestion && (
          <Box className="question__card" >
            <h4 className="question">{`Q.${questionNum + 1}-` + currentQuestion.question} </h4>

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
            <button className="popup__button" onClick={() => setSubmitQuestion(currentQuestion)}>Next</button>
          </Box>
        )}
      </div>
    }
      <div className="submit">
        {questionNum === null ?  <button className="submit__button" onClick={() => handleShowQuestion(0)}>Start Test</button>
        
      :
      <Link to='/result'><button className="submit__button" id="submitAll__button">Submit All</button></Link>
      }
     
       
      </div>
    </Box>
  );
};

export default Question;
