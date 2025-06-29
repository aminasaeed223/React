
import {useState} from 'react'
import './App.css'

function App() {
const [counter, setcounter] = useState(15)

//  let counter = 5
 const addValue = () =>{
  
 setcounter(counter + 1)
 }
 const removeValue = () =>{
  setcounter(counter-1)
 }

  return (
    <>
     <h1>Chai or react</h1>
     <h3>Counter Value : {counter}</h3>
     <button
     onClick={addValue}
     >Add Value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value {counter}</button>
    </>
  )
}

export default App
// {counter} this is called evaluated expression