import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
import ExperienceTitle from '../../components/Experience/ExperienceTitle';
import ExperienceTabsContainer from '../ExperienceTabsContainer';

const useStyles = makeStyles((theme) => ({
    introduction: {
        flex: 1,
        paddingBottom: theme.spacing(15),
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(142),
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(115),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(80),
        },
        [theme.breakpoints.down(660)]: {
            width: theme.spacing(65),
        },
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(60),
            marginBottom: theme.spacing(10)
        },
        zIndex: 88
    },

    card: {
        backgroundColor: theme.palette.primary.main,
    }
}));

const ExperienceContainer = () => {
    const classes = useStyles();
    return (
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto' className={classes.introduction} id="experience">
            <Box className={classes.introduction} mx="auto">
                <Card className={classes.card} raised={false}>
                    <ExperienceTitle />
                    <ExperienceTabsContainer />
                </Card>
            </Box>
        </Box>
    );
};

export default ExperienceContainer;
