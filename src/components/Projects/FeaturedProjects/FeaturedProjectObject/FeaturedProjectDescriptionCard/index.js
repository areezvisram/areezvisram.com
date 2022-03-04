import React from 'react';
import { Box, makeStyles, Typography, Card, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },

    blue: {
        color: theme.palette.secondary.main,
    },

    backgroundCard: {
        background: '#3137bf',
        width: '72%',
        alignSelf: 'right',
        zIndex: 3
    },

    cardNoBackground: {
        background: 'transparent',
        width: '700px',
        alignSelf: 'left',
        zIndex: 3
    }
}));

const FeaturedProjectDescriptionCard = ({ isSmallScreen }) => {
    const classes = useStyles();    
    return (        
        <Grid container direction='column' alignContent='flex-end' style={{ marginTop: '25px' }}>
            {/* <Card style={{ background: '#3137bf', width: '700px', alignSelf: 'right', zIndex: 3 }} > */}
            {/* <Card style={{ background:'transparent', width: '700px', alignSelf: 'left', zIndex: 3 }} > */}
            <Card className={isSmallScreen ? classes.cardNoBackground : classes.backgroundCard} >
                <Typography className={classes.white} variant="h5" align="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium augue sit amet iaculis porta. Suspendisse tristique ipsum ex, et pulvinar arcu ultricies at.
                </Typography>                   
            </Card>
        </Grid>        
    );
};

export default FeaturedProjectDescriptionCard;
