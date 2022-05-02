import React from 'react';
import { Card, CardMedia, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        position: 'absolute',        
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(5), 
        // width: '50%',       
        [theme.breakpoints.down('md')]: {        
        },  
        [theme.breakpoints.down('xs')]: {
        },          
        zIndex: 2,        
    },

    media: {
        width: '100%',
    },

    card: {
        width: '60%',
        marginLeft: 0,
    }
}));

const FeaturedProjectImage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image} mx='auto'>
            <Card className={classes.card}>
                <CardMedia 
                    component='img'                    
                    image={require('../../../../images/website.png').default}
                    alt='me'    
                    className={classes.media}                        
                />
            </Card>
        </Box>
    );
};

export default FeaturedProjectImage;
