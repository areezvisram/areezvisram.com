import React from 'react';
import { Card, CardMedia, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        marginLeft: theme.spacing(10),
        marginTop: theme.spacing(-5),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(8),
            marginTop: theme.spacing(5)
        },  
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(0)
        },          
        zIndex: 89
    }
}));

const AboutImage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image} mx='auto'>
            <Card>
                <CardMedia 
                    component='img'
                    height='300'                    
                    src='http://res.cloudinary.com/dfv5rjydx/image/upload/v1654041270/zj33wgsdi3fczzoal5xt.jpg'
                    alt='me'                            
                />
            </Card>
        </Box>
    );
};

export default AboutImage;