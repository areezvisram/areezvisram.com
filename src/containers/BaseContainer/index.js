import React from 'react';
import { CssBaseline, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../themes/themes';
import Header from '../Header';
import IntroductionContainer from '../IntroductionContainer';
import ParticleEffect from '../../components/ParticleEffect';

const BaseContainer = () => {

    return (
        <ThemeProvider theme={theme}>
            {/* <div style={{ display: 'flex', flexDirection: 'column', height: '300vh' }}> */}
            <Box display="flex" flexDirection="column" height="300vh">
                <Header />
                <IntroductionContainer />
                <ParticleEffect /> 
                <CssBaseline />
            </Box>
        </ThemeProvider>
    );
};

export default BaseContainer;
