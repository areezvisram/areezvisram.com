import React from 'react';
import { Box, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Icon from '../../components/Icon';
import PropTypes from 'prop-types';

const githubLink = "https://github.com/areezvisram";
const linkedinLink = "https://www.linkedin.com/in/areezvisram/"

const useStyles = makeStyles((theme) => ({
    introduction: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 88,
        marginLeft: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },

}));

const SocialsContainer = ({ isDrawerOpen }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallDisplay = useMediaQuery(theme.breakpoints.between('xs', '1070'));
    return (
        isSmallDisplay ?
            isDrawerOpen ?
                <Box display='flex' flexDirection='row' style={{ marginLeft: '30%' }}>
                    <Icon iconType='github' scale={true} style={{ paddingRight: '25px', color: 'white', transform: 'scale(1.5)' }} link={githubLink} />
                    <Icon iconType='linkedin' scale={true} style={{ color: 'white', transform: 'scale(1.8)' }} link={linkedinLink} />
                </Box> : null
            :
            <Box display='flex' flexDirection='column' className={classes.introduction}>
                <Icon iconType='github' scale={true} style={{ paddingBottom: "20px", color: 'white', transform: 'scale(1.5)' }} link={githubLink} />
                <Icon iconType='linkedin' scale={true} style={{ color: 'white', transform: 'scale(1.8)' }} link={linkedinLink} />
            </Box>

    );
};

SocialsContainer.propTypes = {
    isDrawerOpen: PropTypes.bool
}

export default SocialsContainer;
