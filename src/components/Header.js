import React from 'react';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Button from '@mui/material/Button'
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header({handleToggleDarkMode}) {
   return (
   
   <div className='header'>
      <h1>Posting Station <SpeakerNotesIcon />
      </h1>
      <Button onClick={()=> {
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
      }} 
      className='save'
      >
      <DarkModeIcon/>
      </Button>
   </div>
   );
}

export default Header;