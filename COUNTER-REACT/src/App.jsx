import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(11)

  const Addvalue = () => {
    if(counter >= 101){
      alert("You can't increase the value more than 101")
      counter = 90
    }
    setCounter(counter + 11)
  }
  const Removevalue = () => {
    if(counter <= -11){
      alert("You can't decrease the value less than -11")
      counter = 0
    }
    setCounter(counter - 11)
  }

  

  return (
    <>
       <h1>MOPURI SAIKUMAR REDDY</h1>
       <h2>counter value : {counter}</h2>
       <button onClick={Addvalue}>Add value (+11) :{counter}</button>
       <br/>
       <button onClick={Removevalue}>Remove value (-11) :{counter}</button>
    </>
  )
}

export default App
