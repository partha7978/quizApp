import React from 'react'
import PropTypes from 'prop-types';
const QuestionBar = (props) => {
  return (
    <div className='questionbar__container'>
      {props.mainQuestion?.map((item, id) => (
        <button key={id}>{item.isTrue}</button>
      ))}
    </div>
  )
}

export default QuestionBar