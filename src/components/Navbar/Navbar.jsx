
import { Link } from 'react-router-dom'
import Timer from './Timer'
import './Navbar.scss'

const Navbar = () => {
  const handleTimerEnd = () => {
    // Select and click a button with a specific class
    const buttonToClick = document.getElementById("submitAll__button");
    if (buttonToClick) {
      console.log("clicked");
      buttonToClick.click();
    }
  };
  return (
    <div className='navbar'>
        <div className='navbar__link-wrapper'>
        <span className='navbar__logo'>Quiz Mania</span>
{/*         
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/cart">Result</Link> */}
        </div>

        <div className="navbar__timer">
            <Timer onTimerEnd={handleTimerEnd}/>
        </div>
        
    </div>
  )
}

export default Navbar