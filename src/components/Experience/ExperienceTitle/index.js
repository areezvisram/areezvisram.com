import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import DividerWithText from '../../Divider';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },

    blue: {
        color: theme.palette.secondary.main,
    },
}));

const ExperienceTitle = () => {
    const classes = useStyles();
    return (
        <Box>
            <DividerWithText>
                <Typography className={classes.white} variant="h3" align="left">
                    Work Experience
                </Typography>
            </DividerWithText>            
        </Box>
    );
};

export default ExperienceTitle;
