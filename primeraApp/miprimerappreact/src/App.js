import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HelloComponent></HelloComponent>
        </a>
      </header>
    </div>
  );
}

export default App;
