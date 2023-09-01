import { Link } from "react-router-dom";
import Timer from "./Timer";
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, stopTimer } from '../../store/timerSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  //setting up username
  const name = useSelector((state) => state.user);

  //setting the timer
  const timerIsActive = useSelector((state) => state.timer.timerIsActive);

  // const handleStartTimer = () => {
  //   // Dispatch the action to start the timer
  //   dispatch(startTimer());
  // };

  const handleStopTimer = () => {
    // Dispatch the action to stop the timer
    dispatch(stopTimer());
  };

  const handleTimerEnd = () => {
    // Select and click a button with a specific class
    const buttonToClick = document.getElementById("submitAll__button");
    if (buttonToClick) {
      console.log("clicked");
      buttonToClick.click();
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__link-wrapper">
          <span className="navbar__logo">Quiz Mania</span>
          {/*         
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/cart">Result</Link> */}
        </div>

        <div className="navbar__timer">
          <Timer onTimerEnd={handleTimerEnd}  timerIsActive={timerIsActive}/>
        </div>
      </div>
      <div className="navbar__user">
        <p>User <b> {name.length>0 && name[0].split("@")[0] } </b></p>
      </div>
    </>
  );
};

export default Navbar;
