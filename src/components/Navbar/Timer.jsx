import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';


const Timer = ({ onTimerEnd, timerIsActive }) => {
  const initialTimeInSeconds = 30 * 60; // 30 minutes in seconds
  const [seconds, setSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    let timer;

    if (timerIsActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(timer);
      if (onTimerEnd && typeof onTimerEnd === 'function') {
        onTimerEnd();
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds, onTimerEnd, timerIsActive]);

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
    onTimerEnd: PropTypes.func.isRequired,
    timerIsActive: PropTypes.bool.isRequired
  };
export default Timer;
