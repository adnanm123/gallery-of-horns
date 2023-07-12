import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {

let beast = [];
data.forEach((bea, idx) => {
  beast.push(
    <HornedBeast
      title={bea.title}
      image_url={bea.image_url}
      description={bea.description}
      key={idx}
    />
  )
})
    return (
      <main>
        {beast}
      </main>
    );
  }
}

export default Main;
