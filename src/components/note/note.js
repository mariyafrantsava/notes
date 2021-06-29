import React from "react";
// import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './note.scss';
import TagContent from "../tag-content/tag-content";

const Note = ({id, text, tags, handleDeleteNote, handleDeleteTag, transferEditNote}) => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    return(
        <div className="note">
            <span id={id}>{text}</span>
            <div className="note-footer">
                <TagContent
                    id={id}
                    text={text}
                    tagName={tags}
                    handleDeleteTag={handleDeleteTag}/>
                <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteNote(id)}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<EditIcon />}
                        onClick={() => transferEditNote(id, text, tags)}
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    )
    }

    export default Note;