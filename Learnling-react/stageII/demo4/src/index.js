import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Clock.js'

class Index extends Component {
  render () {
    return (
      <div>
        <Clock />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);