import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client'
  
class Index extends Component {
  componentDidMount () {
    this.input.focus();//=> 主动调用 input.focus() 可以替用户主动锁定输入框并弹出输入法
  }

  render () {
    return (
      <input ref={(input) => this.input = input} />
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);