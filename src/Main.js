import React from "react";
import HornedBeast from "./HornedBeast";


// props is an object that gets passed to each component
// ex. let props = {}
class Main extends React.Component {

  render() {
    return (
      <main>
        <HornedBeast
          title = 'African Buffalo'
          imageUrl= 'African-Buffalo.png' alt= 'Horned Beast 1'
          description= 'The African buffalo, also known as the Cape buffalo, is a formidable and highly social bovine species native to Sub-Saharan Africa, recognized for its robust build, distinct horns, and strong herding behavior.'
      />
        <HornedBeast
          title = 'Hebredean Sheep'
          imageUrl= 'Hebredean-Sheep.png' alt = 'Horned Beast 2'
          description= 'The image showcases a group of Hebridean sheep, a breed known for its distinctive black wool and impressive horns, grazing in a scenic natural setting.'
      />
        </main>
    );
  }
}

export default Main;
