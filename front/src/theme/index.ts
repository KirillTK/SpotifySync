import { createMuiTheme } from '@material-ui/core/styles';
import { green, common } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: green.A200,
      main: green.A700,
      dark: green['700'],
      contrastText: common.white
    },
    type: 'dark',
    background: {
      default: '#282c34',
      paper: '#282c34',
    }
  }
});
