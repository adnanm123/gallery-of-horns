import React from "react";

class Header extends React.Component {
render() {
  console.log(this.props);

  return (
    <header> 
    <h1>Gallery of Horns</h1>
  </header>
  )
}
}

export default Header;
