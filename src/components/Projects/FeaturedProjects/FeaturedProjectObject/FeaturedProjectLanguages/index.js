import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    left: {
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down('md')]: {
            marginLeft: '40%'
        },        
        zIndex: 4
    },

    right: {
        color: theme.palette.primary.contrastText,   
        zIndex: 4
    },

    marginLeft: {
        color: theme.palette.primary.contrastText
    },

    blue: {
        color: theme.palette.secondary.main,
    },
}));

const FeaturedProjectLanguages = ({ isSmallScreen, orientation, languages }) => {
    const classes = useStyles(); 

    return (
        <Box gridColumnGap='10px' flexWrap='wrap' display='flex' gridAutoFlow='column' flexDirection='row' justifyContent={isSmallScreen ? 'center': orientation == "left" ? "left" : "right"} marginTop='25px' marginRight='24px' marginLeft='24px' >  
            {
                languages.map((language) => {
                    return (
                        <Typography className={isSmallScreen ? classes.marginLeft : orientation == "right" ? classes.right : classes.right } variant="h5" align={orientation == "left" ? "right" : "left"}>
                            {language}
                        </Typography>  
                    )
                })
            }                           
        </Box>
    );
};

export default FeaturedProjectLanguages;
