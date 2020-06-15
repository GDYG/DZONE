import React from 'react';
import '../assets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className='app'>
          <div className='arc'></div>
          <footer>
            <h2>WELCOME</h2>
            <p>这是</p>
          </footer>
      </div>
    );
  }
}

export default App;
