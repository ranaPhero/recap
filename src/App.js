import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['Jasim', 'Deepjol', 'BappaRaz']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
       <Nayok name={nayoks[1]} age="56"></Nayok>
       <Nayok name={nayoks[0]}></Nayok>
       <Nayok name="BappaRaz"></Nayok>
       <Nayok name="Bappi"></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

function MovieCounter(){
  const result = useState(0);
  console.log(result)
  return(
    <div>
      <button>Add Movei</button>
      <h5>Numbers of Movies:  </h5>
    </div>
  )
}

function Nayok(props){
  // console.log(props)
  const nayokStyle = {
    border: '2px solid black',
    margin: '20px', 
    color: 'red'

  }
  return <div style = {nayokStyle}>
    <h1>Ami Nayak-{props.name}</h1>
    <h3>I have done 5 movies in {props.age || 30}  years</h3>
  </div>
}



export default App;
