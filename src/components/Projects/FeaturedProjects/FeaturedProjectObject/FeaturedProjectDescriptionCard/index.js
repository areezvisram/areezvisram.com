import React from 'react';
import { makeStyles, Typography, Card, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },

    blue: {
        color: theme.palette.secondary.main,
    },

    backgroundCard: {
        background: '#3137bf',
        width: '72%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        alignSelf: 'right',
        zIndex: 3,
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3)
    },

    cardNoBackground: {
        background: 'transparent',
        zIndex: 3,
        border: 'none',
        boxShadow: 'none'
    }
}));

const FeaturedProjectDescriptionCard = ({ isSmallScreen, orientation, description }) => {
    const classes = useStyles();
    return (
        <Grid container direction='column' style={{ marginTop: '25px' }} alignContent={isSmallScreen ? "center" : orientation == "left" ? "flex-start" : "flex-end"}>
            <Card className={isSmallScreen ? classes.cardNoBackground : classes.backgroundCard} >
                <Typography className={classes.white} variant="h5" align={isSmallScreen ? "center" : orientation}>
                    {description}
                </Typography>
            </Card>
        </Grid>
    );
};

FeaturedProjectDescriptionCard.propTypes = {
    isSmallScreen: PropTypes.bool,
    orientation: PropTypes.string,
    description: PropTypes.string
};

export default FeaturedProjectDescriptionCard;
