import React from 'react';
import { Tabs, makeStyles } from '@material-ui/core';
import TabItem from './TabItem';
import { BrowserRouter, Link } from 'react-router-dom';
import MainRouter from '../../routing/MainRouter';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: theme.palette.primary.main,
        marginRight: theme.spacing(-2)
    }
}));

const NavigationItem = ({ tabInfo }) => {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <Tabs className={classes.navBar} value={false}>            
                {tabInfo.map(tab => <TabItem label={tab.label} route={tab.route} component={Link} key={tab.value} />)}
            </Tabs>
            <MainRouter />   
        </BrowserRouter>           
    )
};

export default NavigationItem;