import React from 'react';
import { Box } from '@material-ui/core';
import ExperienceVerticalTabs from '../../components/Experience/ExperienceVerticalTabs';

const ExperienceTabsContainer = () => {     
    return (                 
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto'>       
            <ExperienceVerticalTabs />     
        </Box>        
    );
};

export default ExperienceTabsContainer;