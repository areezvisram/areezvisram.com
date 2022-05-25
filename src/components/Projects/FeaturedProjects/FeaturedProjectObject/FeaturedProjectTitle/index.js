import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,                
    },
}));

const FeaturedProjectTitle = ({ isSmallScreen, orientation, title }) => {
    const classes = useStyles();    
    return (
        <Box zIndex={3} marginRight={orientation == "right" ? 3 : 0} marginLeft={orientation == "right" ? 0 : 3}>
            <Typography className={classes.white} variant="h4" align={isSmallScreen ? "center": orientation}>
                {title}
            </Typography>                   
        </Box>
    );
};

export default FeaturedProjectTitle;
