import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {About} from './components/About/About';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';



function App() {
    return (
        <div>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
