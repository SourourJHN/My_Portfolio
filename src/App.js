
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import { Skills } from './component/Skills';
import { Work } from './component/Work';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About/' element={<About/>}/>
        <Route path='/skills/' element={<Skills/>}/>
        <Route path='Work/' element={<Work/>}/>
        <Route path='Contact/' element={<Contact/>}/>
      </Routes>

     {/*
      
      <About/>
      <Skills/>
      <Work/>
      <Contact/>*/}
      
    </div>
  );
}

export default App;
