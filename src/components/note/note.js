import React from "react";
import './note.scss';

const Note = ({id, text, handleDeleteNote}) => {
    return(
        <div className="note">
            <span id={id}>{text}</span>
            <div className="note-footer">
                <button onClick={() => handleDeleteNote(id)}>
                    <p>del</p>
                </button>
            </div>
        </div>
    )
    }

    export default Note;