import React from "react";
import Box from "@mui/material/Box";
import "./Result.scss";
import { BiRightArrowCircle } from "react-icons/bi"

// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuestionsPlusAns } from "../../store/resultSlice";

const Result = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);
  // console.log(result)

  //reloding the data if user clicked back button
  window.onpopstate=function()
  {
    
    const status = confirm("Back/Forward clicked!");
    if(status) {
      navigate(`/`);
      location.reload();
    }
    else {
      navigate(`/result`);
    }

  }
  return (
    <Box className="d-flex result__main">
      <div className="result__score d-flex">Your Scored {result.length} out of 15</div>
      <div className="result__details d-flex">
        {result.map((item, id) => (
          <Box className="result__card" key={id}>
            <p className="result__question">{item[0].question}</p>

            <div className="options">
              {item[0].answers.map((option, opId) => (
                <li key={opId}>
                    <BiRightArrowCircle className="optionIcon" />
                  {option.text}

                    {
                    option.isTrue === true && 
                    option.text === item[0].selectedAnswer ?  <p className="result__status status-success">Your Answer is correct</p>
                    :
                        option.isTrue === true && <p className="result__status status-failure">Your Answer is wrong</p> 
                    }

                </li>
              ))}
            </div>

            <p className="correctAns">Correct Answer : {item[0].selectedAnswer}</p>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default Result;
