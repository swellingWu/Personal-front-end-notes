import React, { Component } from 'react';
import ReactDOM from "react-dom/client";

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Tomy",
      isLiked: false
    }
  }

  handleClickOnLikeButton() {
    console.log(this.state.isLiked);
    this.setState({
      isLike: !this.state.isLike
    })
    console.log(this.state.isLike);// => false,false  -> true,true
  }

  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
      {this.state.isLike ? '取消' : '点赞'} 👍
      </button>
    )
  }
}

// 将 button 渲染到 index 中
class Index extends Component {
  render () {
    return (
      <div><LikeButton/></div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);