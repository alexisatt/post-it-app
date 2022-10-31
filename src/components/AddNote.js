import React,{useState} from 'react'
import Button from '@mui/material/Button';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState("");
    const charLimit = 500;
    //Create handle chain to capture user entries

    const handleChange = (e) => {
        if(charLimit - e.target.value.length > 0)
        setNoteText(e.target.value)
    };
    const handleSaveClick =() => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("")
        }
    }
  return (
    <div className='note new'>
        <textarea 
        cols="10" 
        rows="8" 
        placeholder='Type Note Here..' 
        value={noteText} 
        onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>{charLimit - noteText.length} left</small>
            <Button className='save' onClick={handleSaveClick}>
                Publish
                <ArrowCircleUpIcon />
            </Button>

        </div>
    </div>
  )
}

export default AddNote