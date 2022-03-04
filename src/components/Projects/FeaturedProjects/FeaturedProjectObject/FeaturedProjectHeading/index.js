import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },

    blue: {
        color: theme.palette.secondary.main,
    },
}));

const FeaturedProjectHeading = ({ isSmallScreen }) => {
    const classes = useStyles();    
    return (
        <Box>            
            {/* <Typography className={classes.blue} variant="h5" align="right"> */}
            <Typography className={classes.blue} variant="h5" align={isSmallScreen ? "left": "right"}>
                Featured Project
            </Typography>                   
        </Box>
    );
};

export default FeaturedProjectHeading;
