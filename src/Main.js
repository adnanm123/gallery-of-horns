import React from "react";
import HornedBeast from "./HornedBeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Main.css';

class Main extends React.Component {
  render() {

let beast = this.props.data.map((bea, idx) => {
   return( 
    <Col key={idx} className="mt-4">
      <HornedBeast
          title={bea.title}
          image_url={bea.image_url}
          description={bea.description}
          key={idx}
          addHearts={this.props.addHearts}
          handleShowModalTitle={this.props.handleShowModalTitle}
          handleShowModalDescription={this.props.handleShowModalDescription}
          handleShowModalImageUrl={this.props.handleShowModalImageUrl}
        />
    </Col>)
})
    return (
      <main>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} >
          {beast}
        </Row>
      </main>
    );
  }
}

export default Main;
