import React from "react";
import './notes-list.scss';
import Note from "../note/note"
import AddNote from "../add-note/add-note";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return <div className='notes-list'>
        <AddNote handleAddNote={handleAddNote}/>
        {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    tags={note.tags}
                    handleDeleteNote={handleDeleteNote}/>
            )
        )}
    </div>
}

export default NotesList;