import React from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import FeaturedProject from '../../components/Projects/FeaturedProjects/FeaturedProject';

const FeaturedProjectsContainer = () => {   
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(956));  
    return (                 
        <Box display='flex' height={fullScreen ? 'max-content' : '500px'} >  
          <FeaturedProject fullScreen={fullScreen} />
        </Box>        
    );
};

export default FeaturedProjectsContainer;