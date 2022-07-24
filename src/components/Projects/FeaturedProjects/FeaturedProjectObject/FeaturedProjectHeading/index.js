import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    blue: {
        color: theme.palette.secondary.main,
    },
}));

const FeaturedProjectHeading = ({ isSmallScreen, orientation }) => {
    const classes = useStyles();
    return (
        <Box zIndex={3} marginRight={orientation == "right" ? 3 : 0} marginLeft={orientation == "right" ? 0 : 3}>
            <Typography className={classes.blue} variant="h5" align={isSmallScreen ? "center" : orientation}>
                Featured Project
            </Typography>
        </Box>
    );
};

FeaturedProjectHeading.propTypes = {
    orientation: PropTypes.string,
    isSmallScreen: PropTypes.bool
};

export default FeaturedProjectHeading;
