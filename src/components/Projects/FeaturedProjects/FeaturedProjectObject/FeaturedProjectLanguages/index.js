import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
        marginLeft: '75%',
        zIndex: 4
    },

    marginLeft: {
        color: theme.palette.primary.contrastText
    },

    blue: {
        color: theme.palette.secondary.main,
    },
}));

const FeaturedProjectLanguages = ({ isSmallScreen }) => {
    const classes = useStyles();
    const languages = ['C++', 'Make', 'GLUT', 'OpenGL', 'JavaScript'];
    
    return (
        <Box gridColumnGap={isSmallScreen ? '15px' : 0} flexWrap='wrap' display='flex' gridAutoFlow='column' flexDirection={isSmallScreen ? 'row' : 'column'} marginLeft={isSmallScreen ? '0' : '0'} justifyContent={isSmallScreen ? 'center': 'right'} marginTop='25px'  >  
            {
                languages.map((language) => {
                    return (
                        <Typography className={isSmallScreen ? classes.marginLeft : classes.white} variant="h5" align="left">
                            {language}
                        </Typography>  
                    )
                })
            }                           
        </Box>
    );
};

export default FeaturedProjectLanguages;
