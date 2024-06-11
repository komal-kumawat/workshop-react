import React from 'react';
import './App.css';
import Home from './container/Home/Home.jsx';
import Navbar from './container/Home/Navbar/Navbar.jsx';
import Navbar2 from './container/Home/Navbar2/Navbar2.jsx';
import Navbar3 from './container/Navbar3/Navbar3.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar2/>
      <Navbar3/>
    </div>
  );
}

export default App;
