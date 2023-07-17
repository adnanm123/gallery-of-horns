import React from "react";
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from "./SelectedBeast.js";
import HornedBeastForm from './HornedBeastForm.js';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      isModalDisplaying: false,
      hornedBeastName: '',
      filteredData: data
    }
  }

  updatedHornBeast = (value) =>  {
    this.setState({
      filteredData: value
    })
  }

  handleShowModalTitle = (title) => {
    this.setState({
      isModalDisplaying: true,
      hornedBeastName: title,
    });
  }
  handleShowModalDescription = (description) => {
    this.setState({
      isModalDisplaying: true,
      beastDescription: description,
    });
  }

  handleShowModalImageUrl = (image_url) => {
    this.setState({
      isModalDisplaying: true,
      beastImage: image_url
    });
  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    });
  }

  render() {
    return (
      <div className="main-container">

        <Header
        />
        <HornedBeastForm
        updatedHornBeast={this.updatedHornBeast}
        data={data}/>
        <Main
        handleShowModalTitle={this.handleShowModalTitle}
        handleShowModalDescription={this.handleShowModalDescription}
        handleShowModalImageUrl={this.handleShowModalImageUrl}
        data={this.state.filteredData}
        />
        <Footer/>
        <SelectedBeast isModalDisplaying={this.state.isModalDisplaying}
        hornedBeastName={this.state.hornedBeastName}
        beastDescription={this.state.beastDescription}
        beastImage={this.state.beastImage}
        handleCloseModal={this.handleCloseModal} 
        />
      </div>
    );
  }
};

export default App;
