import React from 'react';
import { Box, makeStyles, Card, Grid } from '@material-ui/core';
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
        zIndex: 90
    },

    card: {
        backgroundColor: '#101357',
    }
}));

const IntroductionContainer = () => {
    const classes = useStyles();
    return (                    
        <Box className={classes.introduction} mx="auto">            
            <Card className={classes.card} raised={false}>
                <IntroductionTitle />
            </Card>
        </Box>            
    );
};

export default IntroductionContainer;
