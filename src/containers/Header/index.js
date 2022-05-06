import React from 'react';
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import NavigationItem from '../../components/NavigationItem';
import { tabInfo } from '../../constants/routes';
import Logo from '../../components/Logo';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: theme.palette.primary,
        boxShadow: 'none', 
        width: '100%'
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box>
            <AppBar className={classes.appBar} position='fixed'>
                <Toolbar>
                    <Logo />
                    <NavigationItem tabInfo={tabInfo} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
