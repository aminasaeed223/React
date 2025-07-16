// import { useState } from 'react'

import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import Star from './components/star-rating'
import Image from './components/image-slider'
import Loadbutton from './components/load-more'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <Star /> */}
      {/* <Image url = {'https://picsum.photos/v2/list'} page = {'1'} limit = {'10'}/> */}
      <Loadbutton />
    </>
  )
}

export default App
