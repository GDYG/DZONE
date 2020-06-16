import React from 'react';
import '../assets/App.css';
import { RightOutlined } from '@ant-design/icons';
import {Link} from 'dva/router'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className='app'>
          <span className='arc'></span>
          <div id='main'>
            <div className="bg bg-blur"></div>
            <div className="content content-front">
                <h6>WELCOME</h6>
                <p>这与您习惯不同。DZONE会尝试使您与自然休息和工作周期保持同步</p>
                <div>
                  <Link to='/event'><span>NEXT <RightOutlined /></span></Link>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
