import './App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import NavigasiBar from './components/NavigasiBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
      type: 'dark',
      primary: {
        main: '#141414',
      },
      secondary: {
        main: '#93e59c',
      },
    },
});

const App=()=> {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavigasiBar />
        <Outlet/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;