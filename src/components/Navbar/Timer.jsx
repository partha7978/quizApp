import React, { useState, useEffect } from "react";

import PropTypes from 'prop-types';

const Timer = ({ onTimerEnd }) => {
  const initialTimeInSeconds = 0.1 * 60; // 30 minutes in seconds
  const [seconds, setSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    // Function to decrement the timer every second
    const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          // When the timer reaches zero, call the onTimerEnd callback
          clearInterval(timer);
          if (onTimerEnd && typeof onTimerEnd === 'function') {
            onTimerEnd();
          }
        }
      }, 1000);
  
    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [seconds, onTimerEnd]);

  // Format seconds into minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div className="timer">
      {" "}
      Time Left - {" "}
      <p>
        {minutes}:
        {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
      </p>
    </div>
  );
};

Timer.propTypes = {
    onTimerEnd: PropTypes.func.isRequired
  };
export default Timer;
