import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },
}));

const ExperienceObjectDates = ({ startDate, endDate }) => {
    const classes = useStyles();    
    return (
        <Box>            
            <Typography className={classes.white} variant="h5" align="left">
                {startDate} - {endDate}
            </Typography>                   
        </Box>
    );
};

export default ExperienceObjectDates;
