import React, {useState} from "react";
import './notes-list.scss';
import Note from "../note/note"
import AddNote from "../add-note/add-note";

const NotesList = ({notes, handleAddNote, handleDeleteNote, handleDeleteTag, handleEditNote,
                       idNoteEdit,textNoteEdit, tagsNoteEdit, isActiveNoteEdit, setIsActiveNoteEdit, setIdNoteEdit,
                       setTextNoteEdit, setTagsNoteEdit,noteText, setNoteText, tagName, setTagName, transferEditNote }) => {

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
                    noteText={noteText}
                    setNoteText={setNoteText}
                    tagName={tagName}
                    setTagName={setTagName}
                />

                {notes.map((note) => (
                        <Note
                            id={note.id}
                            text={note.text}
                            tags={note.tags}
                            handleDeleteNote={handleDeleteNote}
                            handleDeleteTag={handleDeleteTag}
                            transferEditNote={transferEditNote}
                        />
                    )
                )}
            </div>
}

export default NotesList;