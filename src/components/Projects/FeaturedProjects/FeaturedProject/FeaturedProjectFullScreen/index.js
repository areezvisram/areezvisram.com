import React from 'react';
import { Box } from '@material-ui/core';
import FeaturedProjectImage from '../../FeaturedProjectImage';
import FeaturedProjectObject from '../../FeaturedProjectObject';

const FeaturedProjectFullScreen = ({ orientation, projectObject }) => {
    return (
        <Box width='100%'>
            <FeaturedProjectImage orientation={orientation} />
            <FeaturedProjectObject isSmallScreen={false} orientation={orientation} projectObject={projectObject} />
        </Box>
    )
}

export default FeaturedProjectFullScreen;