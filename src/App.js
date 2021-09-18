import logo from './logo.svg';
import './App.css';

function App() {
  const myStyle = {
    background: 'mediumvioletred',
    padding: '10px',
    border:' 5px solid mediumpurple',
    borderRadius: '5px',
  }
  return (
    <div className="App">
      
      <header className="App-header">
        <h1 className="my-header">yo yo React babu!!</h1>
        <p style={myStyle}>Hello, React mona How are you?</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a style ={{
    background: 'mediumvioletred',
    padding: '10px',
    border:' 5px solid mediumpurple',
    borderRadius: '5px',
  }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React for me
        </a>
      </header>
    </div>
  );
}

export default App;
