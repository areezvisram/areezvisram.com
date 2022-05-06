import React from 'react';
import { Box } from '@material-ui/core';
import FeaturedProjectHeading from './FeaturedProjectHeading';
import FeaturedProjectTitle from './FeaturedProjectTitle';
import FeaturedProjectDescriptionCard from './FeaturedProjectDescriptionCard';
import FeaturedProjectLaunch from './FeaturedProjectLaunch';


const FeaturedProjectObject = ({ isSmallScreen, orientation }) => {       
    return (                 
        <Box marginTop='40px' display='flex' flexDirection='column' width="100%">
            <FeaturedProjectHeading isSmallScreen={isSmallScreen} orientation={orientation}/>
            <FeaturedProjectTitle isSmallScreen={isSmallScreen} orientation={orientation} />
            <FeaturedProjectDescriptionCard isSmallScreen={isSmallScreen} orientation={orientation} />
            <FeaturedProjectLaunch isSmallScreen={isSmallScreen} orientation={orientation}/>
        </Box>        
    );
};

export default FeaturedProjectObject;