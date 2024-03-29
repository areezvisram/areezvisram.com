import React from 'react';
import { CssBaseline, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../themes/themes';
import Header from '../Header';
import IntroductionContainer from '../IntroductionContainer';
import AboutContainer from '../AboutContainer';
import ExperienceContainer from '../ExperienceContainer';
import ProjectsContainer from '../ProjectsContainer';
import ContactFormContainer from '../ContactFormContainer';
import SocialsContainer from '../SocialsContainer';

const BaseContainer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" height="300vh">
                <Header />
                <SocialsContainer isDrawerOpen={false} />
                <IntroductionContainer />
                <AboutContainer />
                <ExperienceContainer />
                <ProjectsContainer />
                <ContactFormContainer />
                <CssBaseline />
            </Box>
        </ThemeProvider>
    );
};

export default BaseContainer;
