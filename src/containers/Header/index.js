import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import NavigationItem from '../../components/NavigationItem';
import { tabInfo } from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: 'transparent',
        boxShadow: 'none',
        marginTop: theme.spacing(1)
    },
}));

const Header = () => {  
    const classes = useStyles();  
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Typography
                    variant="h5"
                    component="p"
                    color="textSecondary"
                    style={{ flexGrow: 1, color: '#fff' }}
                >
                    Areez
                </Typography>
                <NavigationItem tabInfo={tabInfo} />
            </Toolbar>
        </AppBar>
    )    
}

export default Header;