import React from 'react';
import { Box } from '@material-ui/core';
import ExperienceObject from '../../ExperienceObject';
import PropTypes from 'prop-types';

const ExperienceVerticalTabPanel = ({ value, index, experienceObject }) => {
    return (
        <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`}>
            {
                value === index && (
                    <Box sx={{ p: 3 }}>
                        <ExperienceObject experienceObject={experienceObject} />
                    </Box>
                )
            }
        </div>
    );
};

ExperienceVerticalTabPanel.propTypes = {
    value: PropTypes.number,
    index: PropTypes.number,
    experienceObject: PropTypes.object
};

export default ExperienceVerticalTabPanel;