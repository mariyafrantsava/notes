import React, {useState} from 'react';
import './add-note.scss';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TagContent from "../tag-content/tag-content";

const AddNote = ({handleAddNote, idNoteEdit, textNoteEdit, tagsNoteEdit, isActiveNoteEdit, handleEditNote, setIsActiveNoteEdit, setIdNoteEdit, setTextNoteEdit, setTagsNoteEdit}) => {

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

    const getNewText = ( tagsNoteEdit, textNoteEdit) => {
        let mapMy = new Map();
        for(let i = 0; i < tagsNoteEdit.length; i++){
            for(let j = 0; j < textNoteEdit.length; j++){
                let sizeWord = tagsNoteEdit[i].length;
                let findIndex = textNoteEdit.indexOf(tagsNoteEdit[i], j);
                if(findIndex < 0){
                    break;
                }
                mapMy.set(findIndex, sizeWord);
                j = j + sizeWord + findIndex;
            }
        }
        let mapSorted = new Map([...mapMy.entries()].sort((a, b) => a[0] - b[0]));
        let tagsIndexes= mapSorted.keys();
        let result = [];
        let i = 0;
        let j = 0;
        let text;
        let tagNameOfEditedText;
        let startIndexTag;
        let tagLength;

        while(j< mapSorted.size){
            startIndexTag = tagsIndexes.next().value;
            tagLength = mapSorted.get(startIndexTag);
            text = textNoteEdit.substring(i, startIndexTag);
            i = startIndexTag;
            tagNameOfEditedText = textNoteEdit.substr(i, tagLength);
            i += tagLength;
            result[j] = <React.Fragment>{text}<mark>{tagNameOfEditedText}</mark></React.Fragment>;
            j++;
        }
        if(i<textNoteEdit.length ){
            text = textNoteEdit.substring(i,textNoteEdit.length);
            result[j] = <React.Fragment>{text}</React.Fragment>;
        }
            return result.length === 0 ? null : result;
    }


    return(


    <div className="note new">

            <div className="container-note-new">
                <div className="backdrop">
                    <div className="highlights">
                        { getNewText(tagName, noteText) || getNewText(tagsNoteEdit, textNoteEdit)}
                    </div>
                </div>

                <textarea
                    rows="8"
                    cols="122"
                    placeholder="Type to add a note..."
                    value={noteText || textNoteEdit}
                    onChange={handleChange}>
                </textarea>

            </div>
            <div className="note-footer">
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