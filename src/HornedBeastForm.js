import React from "react";
import Form from 'react-bootstrap/Form';
import './HornedBeastForm.css';


class HornedBeastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howToFilter: '',
      rawData: this.props.data,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const numHorns = parseInt(event.target.value);
    console.log(numHorns);
    if(numHorns === 1) {
      console.log(this.state.numHorns);
      let newData = this.state.rawData.filter((value) => value.horns === 1)
      console.log(newData);
      this.props.updatedHornBeast(newData) 
    } else if (numHorns === 2) {
      let newData = this.state.rawData.filter((value) => value.horns === 2)
      console.log(newData);
      this.props.updatedHornBeast(newData) 
    } else if (numHorns === 3) {
      let newData = this.state.rawData.filter((value) => value.horns === 3)
      console.log(newData);
      this.props.updatedHornBeast(newData) 
    } else if (numHorns === 100) {
    let newData = this.state.rawData.filter((value) => value.horns === 100)
    this.props.updatedHornBeast(newData) 
    console.log(newData); 
    } else{
      this.props.updatedHornBeast(this.state.rawData) 
    }
  }

  render() {
      return (
        <>
          <Form className="form" 
          >
            <Form.Label>Filter number of horns</Form.Label>
            <Form.Select className="form-select" name="selected" 
            onChange={this.handleSubmit}
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">One Hundred</option>
            </Form.Select>
          </Form>
        </>
      );
  }
}

export default HornedBeastForm;
