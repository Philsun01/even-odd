import React, {useState} from 'react';

import './App.css';

const AddNumber = ({setNumbers, numbers}) => {

  const [even, setEven] = useState(false);

  const randomNumber = () => {
    if(even){
      return Math.ceil( (Math.random()*5) )*2;
    }
    return Math.ceil(Math.random()*10);
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log("submitted");
    setNumbers([...numbers, randomNumber()]);
  }

  return (
    <form onSubmit = {onSubmit}>
      <div>
        <input type = 'checkbox' 
          name = 'isEven'
          checked = {even}
          onChange = {(ev) => {  setEven(!even) } }/> Even Numbers Only
      </div>
      <button> Add New Number  </button>
      
    </form>
    
  )
}

const Status = ({numbers}) => {
  return(
    <div>
      We have 
      x
      unique 
    </div>
  )

}

const RenderNumbers = ({numbers}) => {

  return (
    <ul>
      {
        numbers.map( (num, idx) => {
          return (
            <li key = {idx}>
              {num}
            </li>
          )
        })
      }
    </ul>
    
  )

}



function App() {

  const [numbers, setNumbers ] = useState( [] );

  return (
    <div className="App">
    <h1> Even-Odd </h1>
    <Status numbers = {numbers} />

    <AddNumber setNumbers = {setNumbers} numbers = {numbers}/>
    
    <RenderNumbers numbers = {numbers} />
    </div>
  );
}

export default App;
