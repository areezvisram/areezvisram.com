import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
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
            width: theme.spacing(70),
        },
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(70 ),
        },        
        zIndex: 90
    },

    card: {
        backgroundColor: theme.palette.primary.main,
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
