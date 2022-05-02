import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import FeaturedProjectHeading from './FeaturedProjectHeading';
import FeaturedProjectTitle from './FeaturedProjectTitle';
import FeaturedProjectDescriptionCard from './FeaturedProjectDescriptionCard';
import FeaturedProjectLanguages from './FeaturedProjectLanguages';
import { GitHub, Launch } from '@material-ui/icons';
import FeaturedProjectLaunch from './FeaturedProjectLaunch';


const FeaturedProjectObject = ({ isSmallScreen }) => {       
    return (                 
        <Box marginTop='40px' display='flex' flexDirection='column' width={isSmallScreen ? '80%' : '100%'}>
            <FeaturedProjectHeading isSmallScreen={isSmallScreen}/>
            <FeaturedProjectTitle isSmallScreen={isSmallScreen} />
            <FeaturedProjectDescriptionCard isSmallScreen={isSmallScreen} />
            <FeaturedProjectLaunch isSmallScreen={isSmallScreen}/>
        </Box>        
    );
};

export default FeaturedProjectObject;