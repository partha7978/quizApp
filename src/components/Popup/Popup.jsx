import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Popup.scss'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userDataSlice';

const Popup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false); // State to track email validation
  const [open, setOpen] = useState(false); // State to control the modal
  const handlePopup = () => {
    setOpen(false);
  }

  useEffect(() => {
    setOpen(true)
  }, [])


  // Function to validate email format
  const validateEmail = (inputEmail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputEmail);
  };

  // Function to handle email input change
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));

    isValidEmail && dispatch(setUser(inputEmail))
  };
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="popop__main">
          <h5 className='head-text' id="modal-modal-title">
            Register With Your Email 
          </h5>
          <input type="email" name="email" required placeholder='xyz@gmail.com' onChange={handleEmailChange}/>
            {!isValidEmail && <p style={{color: 'red'}}>Please enter valid email</p> }
          {isValidEmail && email && <Link to="/question"><button className="popup__button" onClick={handlePopup}>Submit</button></Link>}
          
        </Box>
      </Modal>
    </div>
  )
}

export default Popup