import React from 'react';
import { Box } from '@material-ui/core';
import FeaturedProjectImage from '../../FeaturedProjectImage';
import FeaturedProjectObject from '../../FeaturedProjectObject';

const FeaturedProjectSmallScreen = () => {
    return (
        <Box width='100%'>
            <FeaturedProjectImage />
            <FeaturedProjectObject isSmallScreen={false} />
        </Box>
    )
}

export default FeaturedProjectSmallScreen;