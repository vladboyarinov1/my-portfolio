import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {About} from './components/About/About';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {green, grey, purple} from '@mui/material/colors';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function App() {

    const [isDark, setDarkMode] = useState<boolean>(false)

    const mode = isDark ? 'dark' : 'light'

    // const customTheme = createTheme({
    //     palette: {
    //         primary: {
    //             main: '#1976d2',
    //         },
    //         secondary: {
    //             main: '#ef5350',
    //         },
    //         mode: mode,
    //     },
    // })
    const customTheme = createTheme({
        typography: {
            fontFamily: 'Nunito'
        },
        palette: {
            primary: {
                main: grey[800],
            },
            secondary: {
                main: green[500],
            },
            mode: mode,
        },
    });
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <Header setDarkMode={setDarkMode} isDark={isDark}/>
            <About/>
            <Projects isDark={isDark}/>
            <Contacts/>
            <Footer isDark={isDark}/>
        </ThemeProvider>
    );
}

export default App;
