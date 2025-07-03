
import {useState} from 'react'
import './App.css'

function App() {
const [display, setdisplay] = useState(true)



  return (
    <>
     <button onClick={()=>setdisplay(!display)}>Chai or react</button>
     {
      display?<h1>Amina Saeed Software Engineer</h1>:null
     }
     
    </>
  )
}

export default App
// {counter} this is called evaluated expression