// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import { useState } from "react"
import User from './User';

function App() {
  const [color, setColor] = useState("olive");
  // const [count, setCount] = useState(0)

  return (
    <>
    <User/>
      <div className="w-full h-screen duration-800"
      style= {{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
              <button
               onClick={()=>{setColor("red")}}
              className="p-4 outline-none py-1 rounded-full text-white showdow-lg "
              style = {{ backgroundColor: "red" }}
              >red</button>
              <button
               onClick={()=>{setColor("green")}}
              className="p-4 outline-none py-1 rounded-full text-white showdow-lg "
              style = {{ backgroundColor: "green" }}
              >Green</button>
              <button
               onClick={()=>{setColor("yellow")}}
              className="p-4 outline-none py-1 rounded-full text-white showdow-lg "
              style = {{ backgroundColor: "yellow" }}
              >Yellow</button>
              <button
              onClick={()=>{setColor("pink")}}
              className="p-4 outline-none py-1 rounded-full text-white showdow-lg "
              style={{ backgroundColor: "pink" }}
              >Pink</button>
           </div>



        </div>


      </div>
   
    
    </>
  )
}

export default App
