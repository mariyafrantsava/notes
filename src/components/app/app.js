import React, {useEffect, useState} from "react";
import './app.scss';
import NotesList from "../notes-list/notes-list";
import SearchTag from "../search-tag/search-tag";

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: "0",
            text: "My first note created 1!",
            tags: ["cat", "cap"]
        },
        {
            id: "1",
            text: "My first note created 2!",
            tags: [" ", ""]
        },
        {
            id: "2",
            text: "My first note created 3!",
            tags: [" ", ""]
        },
        {
            id: "3",
            text: "My first note created 4!",
            tags: [" ", ""]
        },
        {
            id: "4",
            text: "My first new note!",
            tags: [" ", ""]
        },
    ]);

    const [searchTag, setSearchTag] = useState('');
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

    const addNote = (text, tags) => {
        const newNote = {
            id: notes.some((note) => Number(note.id) === notes.length - 1) ?  notes.length.toString() : 0,
            text: text,
            tags: tags
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
            <SearchTag handleSearchNote={setSearchTag}/>
            <NotesList
                notes={
                    notes.filter((note) =>
                    note.tags.join('').toLocaleLowerCase().includes(searchTag))
                }
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}/>
        </div>
    );
}

export default App;