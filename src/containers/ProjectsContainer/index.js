import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
import ProjectTitle from '../../components/Projects/ProjectTitle';
import FeaturedProjectsContainer from '../FeaturedProjectsContainer';

const useStyles = makeStyles((theme) => ({    
    introduction: {        
        flex: 1,
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(150),
        },
        [theme.breakpoints.down('md')]: {
            width: '80%',
        },
        // [theme.breakpoints.down('sm')]: {
        //     width: theme.spacing(70),
        // },  
        // [theme.breakpoints.down('xs')]: {
        //     width: theme.spacing(55),
        //     marginBottom: theme.spacing(10)
        // },           
        zIndex: 88
    },

    card: {
        backgroundColor: theme.palette.primary.main,
    }
}));

const ProjectsContainer = () => {
    const classes = useStyles();
    return (          
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto' className={classes.introduction} paddingBottom='300px'>
            <Box className={classes.introduction} mx="auto">            
                <Card className={classes.card} raised={false}>
                    <ProjectTitle />  
                    <FeaturedProjectsContainer />                  
                </Card>            
            </Box>                                        
        </Box>
    );
};

export default ProjectsContainer;
