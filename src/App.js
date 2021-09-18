import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Abu Daud Hossain Sumon</h1>
      <p>Full Stack Devloper</p>
    </div>
  );
}

export default App;
