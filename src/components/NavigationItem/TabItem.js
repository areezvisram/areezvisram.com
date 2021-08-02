import React from 'react';
import { Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navBar: {
        color: theme.palette.primary.contrastText,
    }
}));


const TabItem = ({ label, route, component }) => {
    const classes = useStyles();
    return (        
        <Tab key={label} label={label} className={classes.navBar} component={component} to={route}/>
    )
};

export default TabItem;