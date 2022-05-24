import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import './App.css';

//templates
import Header from './templates/header';
import Footer from './templates/footer';

// theme
import {lightTheme, darkTheme} from './theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//pages
import HomePage from './pages/homepage';
import Page3 from './pages/page3';
import Page2 from './pages/page2';
import Page1 from './pages/page1';
import ExampleBlog from'./pages/example_blog';
import PageNotFound from './pages/page_not_found';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <div> 
      <Paper square>
        <BrowserRouter>
          <div style={{ padding: "10px",}}>
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/page1" element={<Page1/>}/>
              <Route path="/page2" element={<Page2/>}/>
              <Route path="/page3" element={<Page3/>}/>
              <Route path="/example_blog" element={<ExampleBlog/>}/>
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer/>
      </Paper>
    </div>
  );
}

export default function ToggleColorMode() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const defaultMode = ( prefersDarkMode ? 'dark' : 'light');
  const [mode, setMode] = React.useState(localStorage.getItem("mode") !== null ? localStorage.getItem("mode") : defaultMode);

  useEffect(()=>{
    if( localStorage.getItem("mode")){
      setMode(localStorage.getItem("mode"))
    }
  },[])

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        localStorage.setItem("mode", mode=== 'light' ? 'dark' : 'light' );
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode],
  );

  const theme = React.useMemo(
    () =>
      createTheme( mode=== 'dark' ? darkTheme : lightTheme),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export {ColorModeContext}
