import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client'
  
class Editor extends Component {
  constructor() {
    super()
    this.state = {
      content: "<h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>"
    }
  }
  //=> setState({color: 'blue'})
  render () {
    return (
      <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}} />//=> 设置动态 HTML 结构的效果
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Editor />);