import React, {useEffect, useState} from "react";
import './app.scss';
import NotesList from "../notes-list/notes-list";
import SearchTag from "../search-tag/search-tag";

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
            id: "4",
            text: "My first new note created!"
        },
    ]);

    const [searchText, setSearchText] = useState('');
    useEffect(() =>{
        const savedNotes = JSON.parse(
            localStorage.getItem('notes-data')
        );
        if(savedNotes){
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem(
            'notes-data',
            JSON.stringify(notes)
        );
    }, [notes]);

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
                <SearchTag handleSearchNote={setSearchText}/>
                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLocaleLowerCase().includes(searchText))}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}/>
            </div>
        );
}

export default App;