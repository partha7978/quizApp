import React from "react";
import Box from "@mui/material/Box";
import "./Result.scss";
import { BiRightArrowCircle } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuestionsPlusAns } from "../../store/resultSlice";

import { motion } from "framer-motion";

const Result = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  //reloding the data if user clicked back button
  window.onpopstate = function () {
    const status = confirm(
      "All the progress will be lost. Are you surely want to exit."
    );
    if (status) {
      navigate(`/`);
      location.reload();
    } else {
      navigate(`/result`);
    }
  };

  return (
    <Box className="d-flex result__main">
      <div className="result__score d-flex">
        Your Scored {result.length} out of 15
      </div>
      <div className="result__details d-flex">
        {result.map((item, id) => (
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="result__card"
            key={id}
          >
            <p className="result__question">{item[0].question}</p>

            <div className="options">
              {item[0].answers.map((option, opId) => (
                <li key={opId}>
                  <BiRightArrowCircle className="optionIcon" />
                  {option.text}

                  {option.isTrue === true &&
                  option.text === item[0].selectedAnswer ? (
                    <p className="result__status status-success">
                      Your Answer is correct
                    </p>
                  ) : (
                    option.isTrue === true && (
                      <p className="result__status status-failure">
                        Your Answer is wrong
                      </p>
                    )
                  )}
                </li>
              ))}
            </div>
            <p className="correctAns">
              Correct Answer : {item[0].selectedAnswer}
            </p>
          </motion.div>
        ))}
      </div>
    </Box>
  );
};

export default Result;
