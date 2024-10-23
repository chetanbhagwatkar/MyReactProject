import { useState } from 'react'
import './App.css'

const App=()=> {
  const [counter, setCounter] = useState(0);
  
  const increament =()=>{
    if (counter ==20) {
      return{}
    }
    setCounter(counter+1);
  }
  
  const decreament =()=>{
    if(counter==0){
      return{}
    } 
    setCounter(counter-1);
  }

  return (
    <>
    <div className="container outline-success">
      <h1> Counting : {counter}</h1>

    </div>
     
    <br />
    <br />
    <button className='btn btn-outline-success' onClick={increament} >Add</button>
    <h1></h1>
    <button  className='btn btn-outline-danger' onClick={decreament}>Subtract</button>

    </>
  )
}

export default App
