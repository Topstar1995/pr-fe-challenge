import {
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import Employees from '../pages/Employees/Employees';
import { seedEmployees } from '../utils/seed.js';
import { DepartmentFilterProvider } from '../context/DepartmentFilterContext.jsx';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  seedEmployees();
  return (
    <ThemeProvider theme={theme}>
      <DepartmentFilterProvider>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Employees />
        </div>
        <CssBaseline />
      </DepartmentFilterProvider>
    </ThemeProvider>
  );
}

// 1:07

export default App;
