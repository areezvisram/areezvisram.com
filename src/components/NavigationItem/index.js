import React from 'react';
import { Tabs, makeStyles } from '@material-ui/core';
import TabItem from './TabItem';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: theme.palette.primary.main,
    }
}));


const NavigationItem = () => {
    const classes = useStyles();
    return (        
        <Tabs className={classes.navBar}>
            <TabItem label={'ABOUT'} route={'https://www.w3schools.com/cssref/css3_pr_flex-grow.asp'} />
        </Tabs>              
    )
};

export default NavigationItem;