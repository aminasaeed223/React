// import { useState } from 'react'

import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import Star from './components/star-rating'
import Image from './components/image-slider'
import Loadbutton from './components/load-more'
import Tree from './components/TreeView'
import menus from "./components/TreeView/data.js"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <Star /> */}
      {/* <Image url = {'https://picsum.photos/v2/list'} page = {'1'} limit = {'10'}/> */}
      {/* <Loadbutton /> */}
      <Tree menus = {menus}/>
    </>
  )
}

export default App
