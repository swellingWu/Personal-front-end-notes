import React,{ Component } from 'react';

class Clock extends Component {
    constructor () {
      super()
      this.state = { isShowClock: true }
    }
  
    handleShowOrHide () {
      this.setState({
        isShowClock: !this.state.isShowClock
      })
    }
      componentWillUnmount () {
      clearInterval(this.timer)
    }
  
    render () {
      return (
        <div>
          {this.state.isShowClock ? <Clock /> : null }
          <button onClick={this.handleShowOrHide.bind(this)}>
            显示或隐藏时钟
          </button>
        </div>
      )
    }
  }

  export default Clock