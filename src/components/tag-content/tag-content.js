import React from 'react';
import './tag-content.scss';

const TagContent = ({id, text, tagName, handleDeleteTag, isActiveNoteEdit}) => {

    let allTags;
    if(tagName.length > 0) {
        let startIdTag = 0;
        allTags = tagName.map((itemTag) => {
            startIdTag = startIdTag + 1;
        return(
            <div className="elementTag">
                <span className="singleTag" id={startIdTag}>{itemTag}</span>
                {isActiveNoteEdit && (<button
                    type="button"
                    id={startIdTag}
                    onClick={(event)=> {
                        handleDeleteTag(event, id, text, tagName);
                    }}>
                    X
                </button>)}
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
