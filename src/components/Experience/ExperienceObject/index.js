import React from 'react';
import { Box } from '@material-ui/core';
import ExperienceObjectCompany from './ExperienceObjectCompany';
import ExperienceObjectPosition from './ExperienceObjectPosition';
import ExperienceObjectDates from './ExperienceObjectDates';
import ExperienceObjectDescription from './ExperienceObjectDescription';
import PropTypes from 'prop-types';

const ExperienceObject = ({ experienceObject }) => {
    const { company, position, startDate, endDate, description } = experienceObject;
    return (
        <Box alignItems='left' marginTop='-15px' width='1000px'>
            <ExperienceObjectCompany company={company} />
            <ExperienceObjectPosition position={position} />
            <ExperienceObjectDates startDate={startDate} endDate={endDate} />
            <ExperienceObjectDescription listItems={description} />
        </Box>
    );
};

ExperienceObject.propTypes = {
    experienceObject: PropTypes.object
};

export default ExperienceObject;