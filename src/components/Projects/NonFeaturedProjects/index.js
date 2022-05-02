import React from 'react';
import { Box, Card, makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({    
    text: {
        color: 'white'
    },

    card: {
        backgroundColor: '#121212',
        // width: '80%',
        // marginBottom: '20px',
        padding: theme.spacing(2),
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    }
}));
const NonFeaturedProjectObject = () => {       
    const classes = useStyles();
    return (                         
        <Paper display='flex' justifyContent='center' alignItems='center' elevation='3'>
            <Card className={classes.card} raised={true}>
                <Typography variant='h4' className={classes.text}>Title of Project</Typography>
                <Typography variant='h6' className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium augue sit amet iaculis porta. Suspendisse tristique ipsum ex, et pulvinar arcu ultricies at.</Typography>
                <Typography variant='h6' className={classes.text}>C++ OpenGL JavaScript</Typography>
            </Card>        
        </Paper>
    );
};

export default NonFeaturedProjectObject;