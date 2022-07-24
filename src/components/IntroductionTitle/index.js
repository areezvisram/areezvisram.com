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
            <Typography className={classes.white} variant="h5" align="left">
                Hello, my name is
            </Typography>
            <Typography className={classes.blue} variant="h2" align="left">
                Areez Visram.
            </Typography>
            <Typography className={classes.white} variant="h3" align="left">
                I&apos;m a {' '}
                <Typography variant="h3" display="inline" className={classes.blue}>
                    Software Engineer. {''}
                </Typography>
            </Typography>
            <Typography className={classes.white} variant="h5" align="left" display="inline">
                I&apos;m currently a{' '}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Software Engineering {''}
                </Typography>
                student at {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    McMaster University. {''}
                </Typography>
                I&apos;m passionate about {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    software engineering{''}
                </Typography>
                , {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    software development{''}
                </Typography>
                , {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    machine learning{''}
                </Typography>
                , {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    innovation{''}
                </Typography>
                , {''}
                and {''}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    entrepreneurship{''}
                </Typography>
                .
            </Typography>
        </Box>
    );
};

export default IntroductionTitle;
