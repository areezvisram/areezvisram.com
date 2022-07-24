import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { GitHub, Launch, School, Work, Code, EmojiObjects, Business, CheckCircle, LinkedIn } from "@material-ui/icons";
import PropTypes from 'prop-types';

const renderSwitch = (icon) => {
    switch (icon) {
        case 'github':
            return <GitHub fontSize="large" />
        case 'launch':
            return <Launch fontSize="large" />
        case 'school':
            return <School />
        case 'business':
            return <Business />
        case 'work':
            return <Work />
        case 'code':
            return <Code />
        case 'emoji':
            return <EmojiObjects />
        case 'check':
            return <CheckCircle />
        case 'linkedin':
            return <LinkedIn fontSize="large" />
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

const Icon = ({ iconType, isSmallScreen, link, orientation, style }) => {
    const classes = useStyles();

    return (
        <IconButton style={style ? style : { color: 'white' }} className={isSmallScreen ? classes.noPadding : orientation == "right" ? classes.minimalHorizontalPaddingRight : classes.minimalHorizontalPaddingLeft} onClick={() => window.open(link)} >
            {renderSwitch(iconType)}
        </IconButton>
    )
};

Icon.propTypes = {
    iconType: PropTypes.string,
    isSmallScreen: PropTypes.bool,
    link: PropTypes.string,
    orientation: PropTypes.string,
    style: PropTypes.object
};

export default Icon;