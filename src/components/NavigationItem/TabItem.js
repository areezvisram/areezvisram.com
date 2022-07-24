import React from 'react';
import { Tab, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

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

const TabItem = ({ label, route, component, handleDrawerOpen }) => {
    const classes = useStyles();
    return (
        <Tab key={label} label={label} className={classes.tab} component={component} href={route} offset='100' onClick={handleDrawerOpen ? () => { handleDrawerOpen() } : null} target='_blank' rel='noreferrer' />
    )
};

TabItem.propTypes = {
    label: PropTypes.string,
    route: PropTypes.string,
    component: PropTypes.object,
    handleDrawerOpen: PropTypes.func
};

export default TabItem;