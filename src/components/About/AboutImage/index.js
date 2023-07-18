import React from 'react';
import { Card, CardMedia, makeStyles, Box } from '@material-ui/core';
import MyPicture from '../../../resources/picture.jpeg'

const useStyles = makeStyles((theme) => ({
    image: {
        marginLeft: theme.spacing(10),
        marginTop: theme.spacing(-5),
        width: '350px',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(14),
            marginTop: theme.spacing(5),
            paddingBottom: theme.spacing(25)
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(5),
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
                    image={MyPicture}
                    alt='me'
                />
            </Card>
        </Box>
    );
};

export default AboutImage;
