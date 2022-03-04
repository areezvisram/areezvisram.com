import React from 'react';
import { Box, Grid } from '@material-ui/core';
import FeaturedProjectHeading from './FeaturedProjectHeading';
import FeaturedProjectTitle from './FeaturedProjectTitle';
import FeaturedProjectDescriptionCard from './FeaturedProjectDescriptionCard';
import FeaturedProjectLanguages from './FeaturedProjectLanguages';

const FeaturedProjectObject = ({ isSmallScreen }) => {   
    console.log(isSmallScreen)  ;
    return (                 
        <Box marginTop='40px' display='flex' flexDirection='column'  >
            <FeaturedProjectHeading isSmallScreen={isSmallScreen}/>
            <FeaturedProjectTitle isSmallScreen={isSmallScreen} />
            <FeaturedProjectDescriptionCard isSmallScreen={isSmallScreen} />
            <FeaturedProjectLanguages isSmallScreen={isSmallScreen} />
        </Box>        
    );
};

export default FeaturedProjectObject;