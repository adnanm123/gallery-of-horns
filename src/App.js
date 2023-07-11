  // you dont need 'use strict';

  // 3 things you need in every class component you create

  // 1. import React
  import React from "react";
  // import component files that I want to use
  import Main from './Main.js';
  import Header from './Header.js';
  import Footer from './Footer.js';
  // 2. declare the class 
  class App extends React.Component {

    render() {
      return (
        <>
     <Header/>
      <Main/>
      <Footer/>
    </>
      );
    }
  };

  // 3. export the class
  export default App;
