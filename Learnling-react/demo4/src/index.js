import React, { Component } from 'react';
import ReactDOM from "react-dom/client";

class LikeButton extends Component {
  //=> 默认配置
  // static defaultProps = {
  //   likedText: '取消',
  //   unlikedText: '点赞'
  // }

  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    //- this.props.likedText = "取消"
    //=> props 一旦传入就不可改变
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked
          ? this.props.likedText
          : this.props.unlikedText} 👍
      </button>
    )
  }
}

// 将 button 渲染到 index 中
class Index extends Component {
  constructor() {
    super();
    this.state = {
      likedText: "已赞",
      unlikedText: "赞"
    }
  }
  handleClickOnChange () {
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
  }



  render () {
    return (
      <div>
        <LikeButton
          unlikedText={this.state.unlikedText}
          likedText={this.state.likedText}
        />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            修改 wordings
          </button>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);