import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';

class Header extends Component {
  constructor() {
      super();
      console.log('construct')
  }

  UNSAFE_componentWillMount() {
      console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
      console.log('render')
      return (
        <div>
          <h1 className='title'>React 小书</h1>
        </div>
      )
  }
}

class Index extends Component {
    constructor() {
        super()
        this.state = {
          isShowHeader: true
        }
      }
    handleShowOrHide() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render () {
        return (
          <div>
            {this.state.isShowHeader ? <Header /> : null}
            <button onClick={this.handleShowOrHide.bind(this)}>
              显示或者隐藏标题
            </button>
          </div>
        )
      }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);