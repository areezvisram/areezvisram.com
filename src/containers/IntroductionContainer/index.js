import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import IntroductionTitle from '../../components/IntroductionTitle';

const useStyles = makeStyles((theme) => ({
    introduction: {
        marginTop: theme.spacing(25),
        flex: 1,
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(130),
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(100),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(80),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(55),
        },
        //backgroundColor: 'red',
    },
}));

const IntroductionContainer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.introduction} mx="auto">
            <IntroductionTitle />
        </Box>
    );
};

export default IntroductionContainer;
