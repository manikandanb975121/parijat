import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';

import  Navbar  from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App back">
      <Navbar />
      <div className="back">
      <div className="m-5">
        <Main  />
      </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
