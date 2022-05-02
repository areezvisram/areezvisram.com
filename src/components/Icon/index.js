import { IconButton, makeStyles } from "@material-ui/core";
import { GitHub, Launch } from "@material-ui/icons";
import React from "react";

const renderSwitch = (icon) => {
    switch(icon) {
        case 'github':
            return <GitHub fontSize="large" />
        case 'launch':
            return <Launch fontSize="large" />
    }
}

const useStyles = makeStyles((theme) => ({
    noPadding: {
        paddingLeft: 0
    },

    minimalHorizontalPadding: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(0)
    }
}));

const Icon = ({ iconType, isSmallScreen }) => {
    const classes = useStyles();

    return (
        <IconButton style={{ color: 'white' }} className={isSmallScreen ? classes.noPadding : classes.minimalHorizontalPadding}>
            {renderSwitch(iconType)}
        </IconButton>
    )
}

export default Icon;