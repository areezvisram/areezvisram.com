import React from 'react';
import { Card, CardMedia, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    imageRight: {
        position: 'absolute',
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(5),
        zIndex: 2,
        right: theme.spacing(14),
        width: '50%',
        float: "left"
    },

    imageLeft: {
        position: 'absolute',
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(5),
        zIndex: 2,
        width: '50%',
        float: "left"
    },

    media: {
        width: '1000px',
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
            width: '100%',

        },
        [theme.breakpoints.down('1280')]: {
            height: '350px'
        },
        height: '400px',
        filter: 'brightness(50%)'
    },

    card: {
        marginLeft: 0,
        width: '100%',
        backgroundColor: theme.palette.background.default,
        border: 'none',
        boxShadow: 'none'
    }
}));

const FeaturedProjectImage = ({ orientation, imageSrc }) => {
    const classes = useStyles();
    return (
        <Box className={orientation == "left" ? classes.imageRight : classes.imageLeft} mx='auto' >
            <Card className={classes.card} >
                <CardMedia
                    component='img'
                    // image={require('../../../../images/website.png').default}
                    src={imageSrc}
                    alt='me'
                    className={classes.media}
                />
            </Card>
            <div style={{ clear: "both" }}> </div>
        </Box>
    );
};

export default FeaturedProjectImage;
