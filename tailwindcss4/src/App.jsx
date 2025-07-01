import { useState, useCallback } from 'react'
import React from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str+= '0123456789'
    }
    if (charAllowed) {
      str+="!@#$%^&*()-_=+[]{}"
    }
    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random() *str.length+1)
      pass = str.charAt(char)
      
    }
    setPassword(pass)
  }
   , [length,numAllowed,charAllowed,setPassword])

  return (
 
   <>
   <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-md px-4">
        <div className="w-full mb-4 shadow-md rounded-lg bg-red-200">
          <h1 className="text-2xl text-center text-orange-500 py-2">
            Password Generator
          </h1>
        </div>

        <div className="w-full shadow-md bg-red-200 rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Enter Password"
            className="w-full py-2 px-3 outline-none text-lg text-black"
          />
          <button className = 'bg-blue-100 text-red'>copy</button>
        </div>
      </div>
    </div>
</>

  )
}

export default App
