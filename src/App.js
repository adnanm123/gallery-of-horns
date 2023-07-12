import React from "react";
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
 
class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
};

export default App;
