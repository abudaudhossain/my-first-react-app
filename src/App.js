import logo from './logo.svg';
import './App.css';

function App() {
 const myFriend = [{name: "Abu Daud Hossain", job: "Web Devloper"},{name:"Raule Mia", job:"Techer"},{name:"Sakib al Hassan", job:"Criketer"},{name: "Abu Sayd", job: "Software Engin"}]
//  console.log(myFriend);
 
  return (
    <div className="App">
      
    <ul>
     {
        myFriend.map(friend =><li>{friend.name}{friend.job}</li>)
     }
    </ul>
      {/* <Person name="Abu Daud Hossain" job="Web Devloper"></Person>
      <Person name="Raule Mia" job="Techer"></Person>
      <Person name="Rahes Kha"></Person>
      <Person name="Sakib al Hassan" job="Criketer"></Person>
      <Person name="Abu Daud Hossain" job="Web Devloper"></Person>
      <Person name="Raule Mia" job="Techer"></Person>
      <Person name="Rahes Kha"></Person>
      <Person name="Sakib al Hassan" job="Criketer"></Person> */}
      
      {
        myFriend.map(friend =>  <Person name={friend.name} job={friend.job}></Person>)
      }
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <h4>{props.job}</h4>
    </div>
  );
}

export default App;
