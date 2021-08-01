import React from 'react';
import { Tab, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navBar: {
        color: theme.palette.primary.contrastText,
    }
}));


const TabItem = ({ label, route}) => {
    const classes = useStyles();
    return (        
        <Tab key={label} label={label} className={classes.navBar} component={Link} to={route}/>
    )
};

export default TabItem;