import React from 'react';
import Navbar from './components/Navbar.js';
import  FormField from './components/FormField';
import './App.css';
import CoolButton from './components/CoolButton.js';
import Signup from './components/Signup.js';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <FormField label="Name" type="text" placeholder="e.g Gloria Visus" />
    <FormField label="Email" type="email" placeholder="e.g. gloriavisus@gmail.com" />
    <CoolButton />
    <Signup/>
    </div>
  );
}

export default App;
