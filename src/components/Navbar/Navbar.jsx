
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__link-wrapper'>
        <span className='navbar__logo'>Quiz Mania</span>
{/*         
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/cart">Result</Link> */}
        </div>

        <div className="navbar__cart cartCount ">
            <span>edewd</span>
        </div>
        
    </div>
  )
}

export default Navbar