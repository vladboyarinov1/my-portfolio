import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {About} from './components/About/About';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';


function App() {
    return (
            <div>
                <Header/>
                <About/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
    );
}

export default App;
