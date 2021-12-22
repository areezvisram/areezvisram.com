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
                I'm a {' '}
                <Typography variant="h3" display="inline" className={classes.blue}>
                    Software Engineer. {''}
                </Typography>
            </Typography>            
            <Typography className={classes.white} variant="h5" align="left" display="inline">
                I'm currently a{' '}
                <Typography variant="h5" display="inline" className={classes.blue}>
                    Software Engineering {''}
                </Typography>
                student at McMaster University. {''} 
                I'm passionate about software engineering, software development, machine learning, innovation, and entrepreneurship. 
            </Typography>
        </Box>
    );
};

export default IntroductionTitle;
