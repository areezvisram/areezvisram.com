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

const FeaturedProjectTitle = ({ isSmallScreen }) => {
    const classes = useStyles();    
    return (
        <Box>                        
            <Typography className={classes.white} variant="h4" align={isSmallScreen ? "center": "right"}>
                3D CAD System
            </Typography>                   
        </Box>
    );
};

export default FeaturedProjectTitle;
