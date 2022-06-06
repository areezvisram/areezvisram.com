import React from 'react';
import { Box, Card, makeStyles, Typography, Paper } from '@material-ui/core';
import Icon from '../../Icon';
import FeaturedProjectLanguages from '../FeaturedProjects/FeaturedProjectObject/FeaturedProjectLanguages';
import NonFeaturedProjectLanguages from './NonFeaturedProjectLanguages';

const useStyles = makeStyles((theme) => ({    
    text: {
        color: 'white'
    },

    card: {
        backgroundColor: '#121212',
        padding: theme.spacing(2),
        textAlign: 'center',
    },

    paper: {
        [theme.breakpoints.down('435')]: {
            marginLeft: theme.spacing(2)
        },
        [theme.breakpoints.down('400')]: {
            marginLeft: theme.spacing(5)
        }
    }
}));
const NonFeaturedProjectObject = ({ projectObject }) => {       
    const classes = useStyles();
    return (                         
        <Paper display='flex' justifyContent='center' alignItems='center' elevation='3' className={classes.paper}>
            <Card className={classes.card} raised={true}>
                <Typography variant='h4' className={classes.text}>{projectObject.name}</Typography>
                <Typography variant='h6' className={classes.text}>{projectObject.description}</Typography>                
                <NonFeaturedProjectLanguages languages={projectObject.languages} />
                <Icon iconType='github' link={projectObject.github}/>
                <Icon iconType='launch' link={projectObject.external}/>
            </Card>        
        </Paper>
    );
};

export default NonFeaturedProjectObject;