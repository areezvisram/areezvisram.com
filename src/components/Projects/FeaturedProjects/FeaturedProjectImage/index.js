import React from 'react';
import { Card, CardMedia, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    imageRight: {
        position: 'absolute',                
        marginTop: theme.spacing(5), 
        marginRight: theme.spacing(5),
        zIndex: 2,  
        right: theme.spacing(14),
        width: '50%'      
    },

    imageLeft: {
        position: 'absolute',
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(5),
        zIndex: 2,
        width: '50%'
    },

    media: {        
        width: '75%',
        [theme.breakpoints.down('1800')]: {
            width: '80%'
        },
        [theme.breakpoints.down('1700')]: {
            width: '85%'
        },
        [theme.breakpoints.down('1500')]: {
            width: '89%'
        },
        [theme.breakpoints.down('1400')]: {
            width: '100%'
        },
        height: 'auto'
    },

    card: {
        marginLeft: 0,
        width: '100%',
        backgroundColor: theme.palette.background.default,
        border: 'none',
        boxShadow: 'none'
    }
}));

const FeaturedProjectImage = ({ orientation }) => {
    const classes = useStyles();
    return (
        <Box className={orientation == "left" ? classes.imageRight : classes.imageLeft} mx='auto'>
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
