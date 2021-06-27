import React from "react";
// import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import './note.scss';
import TagContent from "../tag-content/tag-content";

const Note = ({id, text, tags, handleDeleteNote}) => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const deleteTag = (id) => {
        console.log(id)
        console.log(tags[id])
        console.log(tags.indexOf(tags[id]))
        console.log(tags)
        // tag[id-1] !== id
        const newTags = tags.filter((tag) => tags.indexOf(tags[id]) !== id);
        console.log('newTags', newTags)
        // setNotes(newNotes);
    }

    return(
        <div className="note">
            <span id={id}>{text}</span>
            <div className="note-footer">
                <TagContent
                    tagName={tags}
                    handleDeleteTag={deleteTag}/>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteNote(id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
    }

    export default Note;