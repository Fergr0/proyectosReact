import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';
import { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'></img>
          <HelloComponent></HelloComponent>
        </header>
      </div>
    );
  }
}

export default App;
