import React from 'react';
import { Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tab: {
        color: theme.palette.primary.contrastText,
        fontSize: theme.spacing(2.5),
        transition: 'transform .2s',
        transitionTimingFunction: 'ease-out',
        "&:hover": {
            transform: 'scale(1.2)'
        },
        padding: theme.spacing(4)
    }
}));

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}


const TabItem = ({ label, route, component, handleDrawerOpen, isResume }) => {
    const classes = useStyles();
    return (
        <Tab key={label} label={label} className={classes.tab} component={component} href={route} offset='100' onClick={handleDrawerOpen ? () => { handleDrawerOpen() } : null} target='_blank' rel='noreferrer' />
    )
};

export default TabItem;