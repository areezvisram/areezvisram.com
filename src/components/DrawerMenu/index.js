import React from 'react';
import { IconButton, Drawer, makeStyles, Box, useTheme } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TabItem from '../NavigationItem/TabItem';
import SocialsContainer from '../../containers/SocialsContainer';
import Resume from '../../resources/resume.pdf'
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    drawer: {
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(30),
        overflowX: 'hidden'
    },

    closeIcon: {
        color: theme.palette.primary.contrastText,
    },
}));

const DrawerMenu = ({ isDrawerOpen, handleDrawerOpen, tabInfo, tabComponent }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Drawer
            variant="temporary"
            anchor={'right'}
            open={isDrawerOpen}
            onClose={handleDrawerOpen}
            ModalProps={{
                keepMounted: true,
            }}
            classes={{ paper: classes.drawer }}
            transitionDuration={450}
        >
            <Box textAlign={'right'}>
                <IconButton onClick={handleDrawerOpen}>
                    <CloseIcon className={classes.closeIcon} />
                </IconButton>
            </Box>
            <Box textAlign={'center'} marginTop={theme.spacing(0.5)}>
                {tabInfo.map(tab => <TabItem label={tab.label} route={tab.route} component={tabComponent} key={tab.value} handleDrawerOpen={handleDrawerOpen} />)}
                <TabItem label="Resume" route={Resume} />
            </Box>
            <SocialsContainer isDrawerOpen={true} />
        </Drawer>
    )
}

DrawerMenu.propTypes = {
    isDrawerOpen: PropTypes.bool,
    handleDrawerOpen: PropTypes.func,
    tabInfo: PropTypes.array,
    tabComponent: PropTypes.object
}

export default DrawerMenu;