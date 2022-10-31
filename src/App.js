
import React,{useState, useEffect} from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] =useState([
    {
    id: nanoid(),
    text: "Make sure to schedule dentist appointment",
    date: "11/04/2022",
    },
    {
      id: nanoid(),
      text: "Ski trip planned for 11/18",
      date: "11/05/2022",
    },
    {
        id: nanoid(),
        text: "Dont forget to watch the new season of Survivor",
        date: "01/07/2023",
    },
    {
      id: nanoid(),
      text: "There is a sale at Saks Fifth Ave on Feb 22nd",
      date: "02/07/2023",
  },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("posting-app"));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);

  useEffect(()=> {
    localStorage.setItem("posting-app", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date =  new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
const deleteNote = (id) => {
  //delete note that is equal to the id we select. so only delete THAT note
  const newNotes = notes.filter((note)=> note.id !== id)
  setNotes(newNotes);
}
  return (

<div className={ `${darkMode && "dark-mode"}`}>
  <div className="container">
    <Header handleToggleDarkMode={setDarkMode} />
    <Search handleSearchNote={setSearchText} />
    <NoteList 
    notes={notes.filter((note) => 
      note.text.toLowerCase().includes(searchText)
    )} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
  </div>

</div>
  )
}

export default App;
