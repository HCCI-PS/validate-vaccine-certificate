import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#4ec53a',
            main: '#52B18E',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f7941e',
            contrastText: '#ffffff',
        },
    },
    typography: {
        button: {
            textTransform: 'none',
            main: '#4ec53a',
        },
    },
  });