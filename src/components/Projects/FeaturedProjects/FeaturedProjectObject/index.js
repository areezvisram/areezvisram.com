import React from 'react';
import { Box } from '@material-ui/core';
import FeaturedProjectHeading from './FeaturedProjectHeading';
import FeaturedProjectTitle from './FeaturedProjectTitle';
import FeaturedProjectDescriptionCard from './FeaturedProjectDescriptionCard';
import FeaturedProjectLaunch from './FeaturedProjectLaunch';
import PropTypes from 'prop-types';

const FeaturedProjectObject = ({ isSmallScreen, orientation, projectObject }) => {
    return (
        <Box marginTop='40px' display='flex' flexDirection='column' width="100%">
            <FeaturedProjectHeading isSmallScreen={isSmallScreen} orientation={orientation} />
            <FeaturedProjectTitle isSmallScreen={isSmallScreen} orientation={orientation} title={projectObject.name} />
            <FeaturedProjectDescriptionCard isSmallScreen={isSmallScreen} orientation={orientation} description={projectObject.description} />
            <FeaturedProjectLaunch isSmallScreen={isSmallScreen} orientation={orientation} languages={projectObject.languages} github={projectObject.github} launch={projectObject.external} />
        </Box>
    );
};

FeaturedProjectObject.propTypes = {
    orientation: PropTypes.string,
    isSmallScreen: PropTypes.bool,
    projectObject: PropTypes.object
};

export default FeaturedProjectObject;