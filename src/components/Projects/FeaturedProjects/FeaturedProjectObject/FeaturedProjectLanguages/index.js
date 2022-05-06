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

const FeaturedProjectLanguages = ({ isSmallScreen, orientation }) => {
    const classes = useStyles();
    const languages = ['C++', 'Make', 'GLUT', 'OpenGL', 'JavaScript'];
    
    return (
        <Box gridColumnGap={isSmallScreen ? '15px' : 0} flexWrap='wrap' display='flex' gridAutoFlow='column' flexDirection={isSmallScreen ? 'row' : 'column'} justifyContent={isSmallScreen ? 'center': 'left'} marginTop='25px'  >  
            {
                languages.map((language) => {
                    return (
                        <Typography className={isSmallScreen ? classes.marginLeft : orientation == "right" ? classes.left : classes.right } variant="h5" align={orientation == "left" ? "right" : "left"}>
                            {language}
                        </Typography>  
                    )
                })
            }                           
        </Box>
    );
};

export default FeaturedProjectLanguages;
