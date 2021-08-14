import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../themes/themes';
import Header from '../Header';

const BaseContainer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <CssBaseline />
        </ThemeProvider>
    );
};

export default BaseContainer;
