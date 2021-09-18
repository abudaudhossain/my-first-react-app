import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Person name="Abu Daud Hossain" job="Web Devloper"></Person>
      <Person name="Raule Mia" job="Techer"></Person>
      <Person name="Rahes Kha"></Person>
      <Person name="Sakib al Hassan" job="Criketer"></Person>
      <Person name="Abu Daud Hossain" job="Web Devloper"></Person>
      <Person name="Raule Mia" job="Techer"></Person>
      <Person name="Rahes Kha"></Person>
      <Person name="Sakib al Hassan" job="Criketer"></Person>
      
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <h4>{props.job}</h4>
    </div>
  );
}

export default App;
