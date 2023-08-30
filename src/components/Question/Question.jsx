import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Question.css'
import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className="question__main">
      
    </Box>
  </Modal>
  )
}

export default Question