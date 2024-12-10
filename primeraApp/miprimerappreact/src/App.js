import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state={
      name: 'Fernando'
    }
  }

  changeName=(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  render(){
    return(
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'></img>
          <HelloComponent nombre = {this.state.name}></HelloComponent>
          <InputComponent nombre = {this.state.name} cambiarNombre={this.changeName}></InputComponent>
        </header>
      </div>
    );
  }
}

export default App;
