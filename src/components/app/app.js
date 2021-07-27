import React, {useEffect, useState} from "react";
import './app.scss';
import NotesList from "../notes-list/notes-list";
import SearchTag from "../search-tag/search-tag";
import dataNotes from "../../data-notes.json";


const App = () => {
    const [notes, setNotes] = useState(dataNotes);
    const [searchTag, setSearchTag] = useState('');

    const [isActiveNoteEdit, setIsActiveNoteEdit] = useState(false);
    const [idNoteEdit, setIdNoteEdit] = useState('');
    const [textNoteEdit, setTextNoteEdit] = useState('');
    const [tagsNoteEdit, setTagsNoteEdit] = useState([]);

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
        console.log('deleteTag eventId: ', eventId, 'id', id, 'tags', tags)

        let newTags = tags.filter((tag) => tag !== tags[eventId.target.id-1]);
        const changeNote = {
             id: id,
             text: text,
             tags: newTags
        }
        const changeNotes = [
            ...notes.slice(0, id),
            changeNote,
            ...notes.slice(id + 1)
        ];
        setNotes(changeNotes);
        // transferEditValuesNote(id, text, tags);
        setIdNoteEdit(id);
        setTextNoteEdit(text);
        setTagsNoteEdit(newTags);
        console.log('newTags', newTags)
        // setIsActiveNoteEdit(true);
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

        setIdNoteEdit(idNote);
        setTextNoteEdit(text);
        setTagsNoteEdit(tags);
        // setIsActiveNoteEdit(true);
    }

    const transferEditValuesNote = (id, text, tags ) => {
        console.log('notes-list')
        setIdNoteEdit(id);
        setTextNoteEdit(text);
        setTagsNoteEdit(tags);
        setIsActiveNoteEdit(true);
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

                idNoteEdit={idNoteEdit}
                textNoteEdit={textNoteEdit}
                tagsNoteEdit={tagsNoteEdit}
                isActiveNoteEdit={isActiveNoteEdit}
                setIsActiveNoteEdit={setIsActiveNoteEdit}
                setIdNoteEdit={setIdNoteEdit}
                setTextNoteEdit={setTextNoteEdit}
                setTagsNoteEdit={setTagsNoteEdit}
                transferEditValuesNote={transferEditValuesNote}

            />
        </div>
    );
}

export default App;