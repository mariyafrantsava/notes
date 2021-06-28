import React, {useState} from "react";
import './notes-list.scss';
import Note from "../note/note"
import AddNote from "../add-note/add-note";

const NotesList = ({notes, handleAddNote, handleDeleteNote, handleDeleteTag, handleEditNote}) => {

    const [noteEdit, setNoteEdit] = useState(false);

    return <div className='notes-list'>
                <AddNote
                    handleAddNote={handleAddNote}
                    noteEdit={noteEdit}
                    handleSetNoteEdit={setNoteEdit}/>

                {notes.map((note) => (
                        <Note
                            id={note.id}
                            text={note.text}
                            tags={note.tags}
                            handleDeleteNote={handleDeleteNote}
                            handleDeleteTag={handleDeleteTag}
                            handleEditNote={handleEditNote}/>
                    )
                )}
            </div>
}

export default NotesList;