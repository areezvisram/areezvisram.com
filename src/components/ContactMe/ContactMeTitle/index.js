import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import DividerWithText from '../../Divider';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },
}));

const ContactMeTitle = () => {
    const classes = useStyles();
    return (
        <Box mx={2}>
            <DividerWithText>
                <Typography className={classes.white} variant="h3" align="left">
                    Contact Me
                </Typography>
            </DividerWithText>            
        </Box>
    );
};

export default ContactMeTitle;
