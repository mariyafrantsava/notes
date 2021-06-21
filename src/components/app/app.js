import React, { useState }  from "react";
import './app.scss';
import NotesList from "../notes-list/notes-list";

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: "0",
            text: "My first note created 1!"
        },
        {
            id: "1",
            text: "My first note created 2!"
        },
        {
            id: "2",
            text: "My first note created 3!"
        },
        {
            id: "3",
            text: "My first note created 4!"
        },
        {
            id: "3",
            text: "My first new note created!"
        },
    ]);

    const addNote = (text) => {
        const newNote = {
            id: 999,
            text: text
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }
        const deleteNote = (id) => {
            const newNotes = notes.filter((note) => note.id !== id);
            setNotes(newNotes);
        }

        return (
            <div className="container">
                <NotesList
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}/>
            </div>
        );
}

export default App;