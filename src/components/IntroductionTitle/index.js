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

const IntroductionTitle = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.white} variant="h3" align="left">
                Hello, my name is
            </Typography>
            <Typography className={classes.blue} variant="h2" align="left">
                Areez Visram.
            </Typography>
            <Typography className={classes.white} variant="h5" align="left" display="inline">
                I'm a{' '}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Software Engineering {''}
                </Typography>
                student at McMaster University. I'm passionate about software engineering, development, innovation and
                entrepreneurship. I'm currently on co-op at{' '}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Signiant. {''}
                </Typography>
            </Typography>
        </Box>
    );
};

export default IntroductionTitle;
