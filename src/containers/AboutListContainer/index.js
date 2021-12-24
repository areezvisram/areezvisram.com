import React from 'react';
import { Box } from '@material-ui/core';
import AboutList from '../../components/About/AboutList';

const AboutListContainer = () => {    
    return (          
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto'>
            <AboutList title='Languages' listItems={['JavaScript', 'Python']} />
            <AboutList title='Skills' listItems={['JavaScript', 'Python']} />
        </Box>
    );
};

export default AboutListContainer;
