import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';

class Main extends React.Component {
  render() {

let beast = this.props.data.map((bea, idx) => {
   return( 
   <HornedBeast
      title={bea.title}
      image_url={bea.image_url}
      description={bea.description}
      key={idx}
      addHearts={this.props.addHearts}
      handleShowModalTitle={this.props.handleShowModalTitle}
      handleShowModalDescription={this.props.handleShowModalDescription}
      handleShowModalImageUrl={this.props.handleShowModalImageUrl}
    />)
})
    return (
      <main>
        {beast}
      </main>
    );
  }
}

export default Main;
