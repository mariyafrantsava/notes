import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './search-tag.scss';

import { fade, makeStyles } from '@material-ui/core/styles';
import {InputBase} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));


const SearchTag = ({handleSearchNote}) => {
    const classes = useStyles();

    const classesInfoBase = {
        root: classes.inputRoot,
        input: classes.inputInput,
    };
    const classesInputBase = `aria-label: search`;

    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search tag…"
                classes={classesInfoBase}
                inputProps={classesInputBase}
                onChange={(event) => handleSearchNote(event.target.value)}
            />
        </div>
    )
}

export default SearchTag;