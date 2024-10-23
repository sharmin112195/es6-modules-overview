

import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const[watches, setWatches] = useState([]);
  useEffect(() =>{
   fetch('watches.json')
   .then(res => res.json())
   .then(data => setWatches(data))
  },[])
  

  return (
    <>

      <h1>Watch Shopping</h1>
      {/* <Watch></Watch> */}
      {
        watches.map(watch => <Watch watch ={watch} key ={watch.id}></Watch>)
      }
   
    </>
  )
}

export default App
