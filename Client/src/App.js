
import React from 'react';
import './App.css';
import Alert from './Alert.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg: "Choose option"};
  }
  render() {
    const open = () => {
      this.setState({msg: "Openning..."});
      fetch("http://10.0.0.5:3001/open") //change this to the ip address of the machine
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    }

    const close = () => {
      this.setState({msg: "Closing..."})
      fetch("http://10.0.0.5:3001/close")//change this to the ip address of the machine
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    }
    return (
      <div className="App">
      <header className="App-header">
        <h1>Gate App</h1>
        <button className="App-open" onClick={open}>
          Open
        </button>
        <button className="App-close" onClick={close}>
          Close
        </button>
        <Alert alert={this.state.msg}></Alert>
      </header>
    </div>
    );
  }
}



export default App;
