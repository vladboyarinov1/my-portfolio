import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
