import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
constructor(props) {
super(props);
this.state = {
  likes: 0
  }
}

handleLikes = () => {
  this.setState({
    likes: this.state.likes + 1
  });
}
handleTitleClick = () => {
  this.props.handleShowModalTitle(this.props.title);
  this.props.handleShowModalDescription(this.props.description)
  this.props.handleShowModalImageUrl(this.props.image_url)
  this.handleLikes();
}

render() {
  return (
    <Card style={{ width: '100%' }} className="horned-beast p-1
    h-100">
      <Card.Img 
        onClick={this.handleTitleClick}
        variant="top" 
        src={this.props.image_url} 
        alt= {this.props.alt}
        title= {this.props.title}
        />
        <Card.Text> ❤️ {this.state.likes}</Card.Text>
          <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );}
    }

export default HornedBeast;
