import React, { useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from '../DrawerMenu';

const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: theme.palette.primary.contrastText,        
    },
    menuIcon: {
        fontSize: theme.spacing(5)
    }
}));

const HamburgerMenu = () => {
    const classes = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {             
        setIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <div>
            <IconButton className={classes.iconButton} size={'small'} onClick={handleDrawerOpen}>
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
                        
           <DrawerMenu isDrawerOpen={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} />
        </div>
    )
}

export default HamburgerMenu;

