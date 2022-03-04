import React from 'react';
import { Box, useMediaQuery, useTheme, Card, CardActionArea, CardContent, Typography, CardMedia, makeStyles  } from '@material-ui/core';
import FeaturedProjectImage from '../../components/Projects/FeaturedProjects/FeaturedProjectImage';
import FeaturedProjectObject from '../../components/Projects/FeaturedProjects/FeaturedProjectObject';
import { alpha } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    card: {
      position: 'relative',
      backgroundColor: 'transparent'
    },

    CardContent: {
      position: 'absolute',
      color: "#000000",
    },
    CardContentTextSecondary: {
      color: "#000000", 
    },

    image: {
      backgroundColor: '#000000'
    },

    media: {
      width: '100%',
      opacity: 0.35
    },

    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      color: 'white',
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

const FeaturedProjectsContainer = () => {   
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(956));  
    const classes = useStyles();
    return (                 
        <Box display='flex' height={fullScreen ? 'max-content' : '500px'} >  
        {
          fullScreen ? 
          <Card className={classes.card}>
            <div className={classes.image}>
              <img src={require('../../images/website.png').default} className={classes.media} />
            </div>
            <div className={classes.overlay}>
              <FeaturedProjectObject isSmallScreen={fullScreen} />
            </div>
          </Card>
          :
          <Box width='100%'>
            <FeaturedProjectImage />
            <FeaturedProjectObject isSmallScreen={fullScreen} />
          </Box>
        }     
        </Box>        
    );
};

export default FeaturedProjectsContainer;