import React, {useState} from 'react';
import './add-note.scss';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TagContent from "../tag-content/tag-content";

const AddNote = ({handleAddNote, idNoteEdit, textNoteEdit, tagsNoteEdit, isActiveNoteEdit, handleEditNote, setIsActiveNoteEdit, setIdNoteEdit, setTextNoteEdit, setTagsNoteEdit}) => {

    // console.log('AddNote textNoteEdit', textNoteEdit)
    // console.log('AddNote tagsNoteEdit', tagsNoteEdit)
    console.log('AddNote isActiveNoteEdit', isActiveNoteEdit)

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });
    const classes = useStyles();

    const [noteText, setNoteText] = useState('');
    const [tagName, setTagName] = useState('');

    const handleChange = (event) => {
        let inputText = event.target.value;
        setNoteText(inputText);

        const tagRegExp = /(#+[a-zA-Z0-9]+\s)/gm;
        const tag = inputText.match(tagRegExp);
        if(tag){
            setTagName(tag);
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            if(isActiveNoteEdit){
                handleEditNote(idNoteEdit, noteText, tagName);
                setIsActiveNoteEdit(false);
                setIdNoteEdit('');
                setTextNoteEdit('');
                setTagsNoteEdit([]);
                console.log("!!!! setIsActiveNoteEdit", isActiveNoteEdit)
            }
            if(isActiveNoteEdit === false) {
                handleAddNote(noteText, tagName);
            }
                setNoteText('');
                setTagName('');
        }
    }

    const handleCancelEditClick = () => {
        setIsActiveNoteEdit(false);
        setIdNoteEdit('');
        setTextNoteEdit('');
        setTagsNoteEdit([]);
    }
    return(
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                value={noteText || textNoteEdit}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                {/*<p>200 Remaining</p>*/}
                <TagContent tagName={tagName || tagsNoteEdit}/>
                <div>
                    {isActiveNoteEdit && (<Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        onClick={handleCancelEditClick}
                    >
                        Cancel Edit
                    </Button>)}
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            onClick={handleSaveClick}
                        >
                            Save
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

export default AddNote;