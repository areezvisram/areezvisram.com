import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
import ProjectTitle from '../../components/Projects/ProjectTitle';
import FeaturedProjectsContainer from '../FeaturedProjectsContainer';
import NonFeaturedProjectsContainer from '../NonFeaturedProjectsContainer';

const useStyles = makeStyles((theme) => ({
    introduction: {
        flex: 1,
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(142),
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(115),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(74),
        },
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(55),
        },
        zIndex: 88
    },

    card: {
        backgroundColor: theme.palette.primary.main,
    },

    nonFeaturedBox: {
        marginTop: 0,
        width: '70%',
        marginBottom: '300px',
        [theme.breakpoints.down('1500')]: {
            width: '80%',
        },
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(55)
        },
        [theme.breakpoints.down('500')]: {
            width: theme.spacing(45)
        },
        [theme.breakpoints.down('400')]: {
            width: theme.spacing(50)
        },
        zIndex: 88
    }
}));

const ProjectsContainer = () => {
    const classes = useStyles();
    return (
        <Box display='flex' flexDirection='column' id='projects'>
            <Box flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto' className={classes.introduction} paddingBottom="50px">
                <Box className={classes.introduction} mx="auto">
                    <Card className={classes.card} raised={false}>
                        <ProjectTitle />
                        <FeaturedProjectsContainer />
                    </Card>
                </Box>
            </Box>
            <Box mx="auto" className={classes.nonFeaturedBox}>
                <NonFeaturedProjectsContainer />
            </Box>
        </Box>
    );
};

export default ProjectsContainer;
