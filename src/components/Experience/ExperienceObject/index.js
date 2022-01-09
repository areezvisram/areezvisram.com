import React from 'react';
import { Box } from '@material-ui/core';
import ExperienceObjectCompany from './ExperienceObjectCompany';
import ExperienceObjectPosition from './ExperienceObjectPosition';
import ExperienceObjectDates from './ExperienceObjectDates';
import ExperienceObjectDescription from './ExperienceObjectDescription';
import ExperienceObjectTechEnv from './ExperienceObjectTechEnv';

const ExperienceObject = ({ experienceObject = {} }) => { 
    const { company, position, startDate, endDate, description, technical_environment } = experienceObject;    
    return (                 
        <Box alignItems='left' marginTop='-15px'>
            <ExperienceObjectCompany company={company} />
            <ExperienceObjectPosition position={position} />
            <ExperienceObjectDates startDate={startDate} endDate={endDate} />
            <ExperienceObjectDescription listItems={description} />
            <ExperienceObjectTechEnv techEnv={technical_environment} />
        </Box>        
    );
};

export default ExperienceObject;