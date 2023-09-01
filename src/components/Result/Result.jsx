import React from "react";
import Box from "@mui/material/Box";
import "./Result.scss";
import { BiRightArrowCircle } from "react-icons/bi"

import { useSelector } from "react-redux/es/hooks/useSelector";

const Result = () => {
  const result = useSelector((state) => state.result);
  console.log(result)
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

            <p>Correct Answer : {item[0].selectedAnswer}</p>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default Result;
