import React, {useEffect, useState} from "react";
import './app.scss';
import NotesList from "../notes-list/notes-list";
import SearchTag from "../search-tag/search-tag";
import dataNotes from "../../data-notes.json";


const App = () => {
    const [notes, setNotes] = useState(dataNotes);
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
        if(tags.length === 0) {
            tags = [];
        }
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

    const deleteTag = (eventId, id, text, tags) => {

        const changeNote = {
             id: id,
             text: text,
             tags: tags.filter((tag) => tag !== tags[eventId.target.id-1])
        }
        const changeNotes = [
            ...notes.slice(0, id),
            changeNote,
            ...notes.slice(id + 1)
        ];
        setNotes(changeNotes);
        // transferEditValuesNote(id, text, tags);
    }

    const editNote = (idNote, text, tags) => {

        const editSingleNote = {
            id: idNote,
            text: text,
            tags: tags
        }
        const editNotes = [
            ...notes.slice(0, idNote),
            editSingleNote,
            ...notes.slice(idNote + 1)
        ];
        setNotes(editNotes);
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
                handleDeleteNote={deleteNote}
                handleDeleteTag={deleteTag}
                handleEditNote={editNote}
            />
        </div>
    );
}

export default App;