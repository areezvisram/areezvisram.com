import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center"
    },
    border: {
        borderBottom: "1px solid white",
        width: "40%"
    },
    content: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingRight: theme.spacing(2),
    }
}));

const DividerWithText = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <span className={classes.content}>{children}</span>
            <div className={classes.border} />
        </div>
    );
};

DividerWithText.propTypes = {
    children: PropTypes.array
}

export default DividerWithText;