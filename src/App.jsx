import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Todo from './pages/Todo/Todo.jsx';
import Swapi from './pages/Swapi/Swapi.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import ThemeContextProvider from './components/ThemeContext/ThemeContext.jsx';
import './App.css';

const App = () => {
    return (
        <ThemeContextProvider>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/todo" element={<Todo/>}/>
                        <Route path="/swapi" element={<Swapi/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </ThemeContextProvider>
    );
};

export default App;
