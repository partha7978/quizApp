import React from 'react'

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
const QuestionCard = ({question}) => {
    const questions = props.questions;
  return (
    <div>
          {
          questions.length && (
            <Box className="question__card">
            <h4 className="question">{"Q: " + questions.question} </h4>

            <div className="options">
              <FormControl>
                <ul>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    {questions.answers.map((item, idList) => (
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
            <button className="popup__button">Submit</button>
          </Box>
          )
        }
    </div>
  )
}

export default QuestionCard