import React, {useState} from "react";
import './notes-list.scss';
import Note from "../note/note"
import AddNote from "../add-note/add-note";

const NotesList = ({notes, handleAddNote, handleDeleteNote, handleDeleteTag, handleEditNote}) => {

    const [isActiveNoteEdit, setIsActiveNoteEdit] = useState(false);
    const [idNoteEdit, setIdNoteEdit] = useState('');
    const [textNoteEdit, setTextNoteEdit] = useState('');
    const [tagsNoteEdit, setTagsNoteEdit] = useState([]);

    const transferEditValuesNote = (id, text, tags ) => {
        console.log('notes-list')
        setIdNoteEdit(id);
        setTextNoteEdit(text);
        setTagsNoteEdit(tags);
        setIsActiveNoteEdit(true);
    }

    return <div className='notes-list'>
                <AddNote
                    handleAddNote={handleAddNote}
                    idNoteEdit={idNoteEdit}
                    textNoteEdit={textNoteEdit}
                    tagsNoteEdit={tagsNoteEdit}
                    isActiveNoteEdit={isActiveNoteEdit}
                    handleEditNote={handleEditNote}
                    setIsActiveNoteEdit={setIsActiveNoteEdit}
                    setIdNoteEdit={setIdNoteEdit}
                    setTextNoteEdit={setTextNoteEdit}
                    setTagsNoteEdit={setTagsNoteEdit}
                    handleDeleteTag={handleDeleteTag}
                    transferEditNote={transferEditValuesNote}
                />

                {notes.map((note) => (
                        <Note
                            id={note.id}
                            text={note.text}
                            tags={note.tags}
                            handleDeleteNote={handleDeleteNote}
                            handleDeleteTag={handleDeleteTag}
                            transferEditNote={transferEditValuesNote}
                        />
                    )
                )}
            </div>
}

export default NotesList;