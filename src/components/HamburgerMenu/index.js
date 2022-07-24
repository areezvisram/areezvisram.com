import React, { useState } from 'react';
import { IconButton, makeStyles, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from '../DrawerMenu';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: theme.palette.primary.contrastText,
    },
    menuIcon: {
        fontSize: theme.spacing(5)
    }
}));

const HamburgerMenu = ({ tabInfo, tabComponent }) => {
    const classes = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen)
    };
    return (
        <Box>
            <IconButton className={classes.iconButton} size={'small'} onClick={handleDrawerOpen}>
                <MenuIcon className={classes.menuIcon} />
            </IconButton>

            <DrawerMenu isDrawerOpen={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} tabInfo={tabInfo} tabComponent={tabComponent} />
        </Box>
    )
};

HamburgerMenu.propTypes = {
    tabInfo: PropTypes.object,
    tabComponent: PropTypes.object
};

export default HamburgerMenu;

