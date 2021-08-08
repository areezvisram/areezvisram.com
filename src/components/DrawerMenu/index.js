import React from 'react';
import { IconButton, Drawer } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const DrawerMenu = ({ isDrawerOpen, handleDrawerOpen }) => {
    return (
        <Drawer
        variant="temporary"
        anchor={'right'}
        open={isDrawerOpen}
        onClose={handleDrawerOpen}
        ModalProps={{
            keepMounted: true,
        }}
        >
            <IconButton onClick={handleDrawerOpen}>
                <CloseIcon/>
            </IconButton>
            <div>Drawer is Open</div>
        </Drawer> 
    )
}

export default DrawerMenu;