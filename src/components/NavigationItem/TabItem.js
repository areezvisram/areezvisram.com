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


const TabItem = ({ label, route, component }) => {
    const classes = useStyles();
    return (        
        <Tab key={label} label={label} className={classes.tab} component={component} to={route}/>
    )
};

export default TabItem;