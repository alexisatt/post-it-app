import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Note({id, text, date, handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <Button onClick={() => handleDeleteNote(id)}><DeleteIcon style={{color:"red"}} />
            </Button>
        </div>
    </div>
  )
}

export default Note