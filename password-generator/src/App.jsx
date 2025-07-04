import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [val, setVal] = useState("Amina Saeed")

  return (
    <>
     <h1>Get Input field</h1>
     <input type="text" value= {val} onChange={(event)=>setVal(event.target.value)} placeholder = "Enter your text"/>
      <h1>{val}</h1>
      <button onClick={()=>{setVal("")}}>Clear
      
      </button>
    </>
  )
}

export default App
