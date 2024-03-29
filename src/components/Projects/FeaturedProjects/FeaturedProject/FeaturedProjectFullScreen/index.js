import React from 'react';
import { Box } from '@material-ui/core';
import FeaturedProjectImage from '../../FeaturedProjectImage';
import FeaturedProjectObject from '../../FeaturedProjectObject';
import PropTypes from 'prop-types';

const FeaturedProjectFullScreen = ({ orientation, projectObject }) => {
    return (
        <Box width='100%'>
            <FeaturedProjectImage orientation={orientation} imageSrc={projectObject.image_url} />
            <FeaturedProjectObject isSmallScreen={false} orientation={orientation} projectObject={projectObject} />
        </Box>
    )
};

FeaturedProjectFullScreen.propTypes = {
    orientation: PropTypes.string,
    projectObject: PropTypes.object
}

export default FeaturedProjectFullScreen;