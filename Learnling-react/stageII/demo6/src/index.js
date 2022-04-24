import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client'
  
class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Card content={
    <div>
      <h2>React.js 小书</h2>
       <div>开源、免费、专业、简单</div>
      订阅：<input />
    </div>
  } />,
);