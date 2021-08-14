import { createTheme } from '@material-ui/core';

const theme = createTheme({
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
});

export default theme;
