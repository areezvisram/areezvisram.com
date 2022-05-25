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
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },

    minimalHorizontalPaddingRight: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(0),
        paddingBottom: 0
    },

    minimalHorizontalPaddingLeft: {
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(1.5),
        paddingBottom: 0
    }
}));

const Icon = ({ iconType, isSmallScreen, link, orientation }) => {
    const classes = useStyles();

    return (
        <IconButton style={{ color: 'white' }} className={isSmallScreen ? classes.noPadding : orientation == "right" ? classes.minimalHorizontalPaddingRight : classes.minimalHorizontalPaddingLeft } onClick={() => window.open(link)} >
            {renderSwitch(iconType)}
        </IconButton>
    )
}

export default Icon;