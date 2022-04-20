import React, { Component } from 'react';
import ReactDOM from "react-dom/client";

class Title extends Component {
  handleClickOnTitle (str) {
    console.log(this);
    console.log("str is:"+str);
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this,'Hello')}>React 小书</h1>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);