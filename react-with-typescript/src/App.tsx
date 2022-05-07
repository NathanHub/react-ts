import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";


function App() {

  interface IState {
    people: {
      name: string, 
      url:string, 
      age:number,
      note?: string
    }[]
  }

  //const [number, setNumber] = useState(0);
  //const [number, setNumber] = useState<number>(); // infer the type
  // const [people, setPeople] = useState([
  //   {
  //     name: "Lebron James",
  //     url: "",
  //     age: 36,
  //     notes: "A legend at basketball"
  //   },
  //   {
  //     name: "Joel Embiid",
  //     url: "",
  //     age: 26
  //   }
  // ]);

  const [people, setPeople] = useState<IState['people']>(); // use of the interface
  // const [people, setPeople] = useState<{name: string, url:string, age:number}[]>();

  // people.map(person => {
  //   person.name = ""
  // })

  // const changeNumber = () => {
  //   setNumber(10);
  // }

  return (
    <div className="App">
      <h1>😎 People invited to the party 🎊</h1>
     
    </div>
  );
}

export default App;
