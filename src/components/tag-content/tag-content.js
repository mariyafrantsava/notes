import React from 'react';
import './tag-content.scss';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from '@material-ui/core/styles';

const TagContent = ({tagName, handleDeleteTag}) => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1)
        },
    }));
    const classes = useStyles();

    let allTags;
    if(tagName.length > 0) {
        let startIdTag = 0;
        allTags = tagName.map((itemTag) => {
            startIdTag = startIdTag + 1;
        return(
            <div className="elementTag">
                <span className="singleTag" id={startIdTag}>{itemTag}</span>
                <button
                    type="button"
                    id={startIdTag}
                    onClick={() => handleDeleteTag(startIdTag - 1)}>
                    X
                </button>
            </div>
        );

        });

    }

    return(
        <React.Fragment>
            <span className="tagContent">
                {allTags}
            </span>
        </React.Fragment>
    )
}
export default TagContent;
