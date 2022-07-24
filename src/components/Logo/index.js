import React from 'react';
import logo from './areez.png';
import { makeStyles, Typography } from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles(() => ({
    container: {
        flexGrow: 1,
    }
}));

const Logo = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.container}>
            <AnchorLink href="#top" offset='100'>
                <img src={logo} alt="" className={classes.logo}></img>
            </AnchorLink>
        </Typography>
    )
}

export default Logo;