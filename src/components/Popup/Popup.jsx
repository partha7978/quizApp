import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Popup.css'
import { Link } from 'react-router-dom';

const Popup = () => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handlePopup = () => {
    setOpen(false);
  }

  useEffect(() => {
    setOpen(true)
  }, [])
  
  
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
          <input type="email" name="email" required placeholder='xyz@gmail.com' />
          <Link to="/question"><button className="popup__button" onClick={handlePopup}>Submit</button></Link>
          
        </Box>
      </Modal>
    </div>
  )
}

export default Popup