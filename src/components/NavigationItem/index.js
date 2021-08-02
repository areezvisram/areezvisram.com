import { React, useState } from 'react';
import { Tabs, makeStyles } from '@material-ui/core';
import TabItem from './TabItem';
import { BrowserRouter, Link } from 'react-router-dom';
import MainRouter from '../../routing/MainRouter';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: theme.palette.primary.main,
    }
}));

const NavigationItem = ({ tabInfo }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BrowserRouter>
            <Tabs className={classes.navBar} value={value} onChange={handleTabChange}>            
                {tabInfo.map(tab => <TabItem label={tab.label} route={tab.route} component={Link} key={tab.value} />)}
            </Tabs>
            <MainRouter />   
        </BrowserRouter>           
    )
};

export default NavigationItem;