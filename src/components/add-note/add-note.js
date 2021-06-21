import React, {useState} from 'react';
import './add-note.scss';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const AddNote = ({handleAddNote}) => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value)
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return(
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <p>200 Remaining</p>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={handleSaveClick}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}

export default AddNote;