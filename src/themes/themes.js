import { createTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createTheme({
    palette: {
        background: {
            default: '#101357',
        },
        primary: {
            light: '#433985',
            main: '#101357',
            dark: '#00002e',
            contrastText: '#fff',
        },
        secondary: {
            light: '#98ffff',
            main: '#5efbda',
            dark: '#00c7a9',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: ['Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'].join(','),        
    },
});

theme = responsiveFontSizes(theme);

export { theme };
