import React from 'react';
import { Box, makeStyles, Card, Grid } from '@material-ui/core';
import ProjectTitle from '../../components/Projects/ProjectTitle';
import FeaturedProjectsContainer from '../FeaturedProjectsContainer';
import NonFeaturedProjectsContainer from '../NonFeaturedProjectsContainer';

const useStyles = makeStyles((theme) => ({    
    introduction: {        
        flex: 1,
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(150),
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
        zIndex: 88
    }
}));

const ProjectsContainer = () => {
    const classes = useStyles();
    return (  
        <Box display='flex' flexDirection='column'>
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