import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
import IntroductionTitle from '../../components/IntroductionTitle';

const useStyles = makeStyles((theme) => ({
    introduction: {
        flex: 1,
        marginTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(140),
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(115),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(70),
            flexDirection: 'column'
        },
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(55),
            marginBottom: theme.spacing(10)
        },
        [theme.breakpoints.down(470)]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            width: theme.spacing(50)
        },
        [theme.breakpoints.down(421)]: {
            width: theme.spacing(48),
        },
        [theme.breakpoints.down(400)]: {
            width: theme.spacing(45),
        },
        [theme.breakpoints.down(390)]: {
            width: theme.spacing(43),
            paddingLeft: theme.spacing(1)
        },
        [theme.breakpoints.down(350)]: {
            width: theme.spacing(40),
        },
        zIndex: 88
    },

    card: {
        backgroundColor: theme.palette.primary.main,
    }
}));

const IntroductionContainer = () => {
    const classes = useStyles();
    return (
        // <Box className={classes.introduction} mx="auto">            
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto' className={classes.introduction} id="top">
            <Card className={classes.card} raised={false}>
                <IntroductionTitle />
            </Card>
        </Box>
    );
};

export default IntroductionContainer;
