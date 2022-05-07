import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import AddToList from './components/AddTodoList';

export interface IState {
  people: {
    name: string
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

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

  // const [people, setPeople] = useState<IState['people']>(); // use of the interface
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 37,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    }
  ])
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
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
