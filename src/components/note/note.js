import React from "react";
// import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import './note.scss';

const Note = ({id, text, handleDeleteNote}) => {
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