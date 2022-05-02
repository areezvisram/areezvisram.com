import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
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
            width: '80%',
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
        // [theme.breakpoints.down('1300')]: {
        //     width: '90%',
        // },

        // [theme.breakpoints.down('1050')]: {
        //     width: '100%',
        // },
    }
}));

const ProjectsContainer = () => {
    const classes = useStyles();
    return (  
        <Box display='flex' flexDirection='column'>
            <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto' className={classes.introduction} paddingBottom='50px'>
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
