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

render() {
  return (
    <Card style={{ width: '18rem' }} className="horned-beast">
      <Card.Img 
        variant="top" 
        src={this.props.image_url} 
        onClick={this.handleLikes}
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
