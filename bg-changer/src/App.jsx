import { useState } from 'react'
 
import './App.css'

function App() {
  const [Color, setColor] = useState("#fbfbfb")

  return (
    <div className='h-screen w-full duration-200'style={{backgroundColor:Color}}>
      <div className='fixed flex flex-wrap rounded-3xl bottom-12 justify-center px-3 py-2 inset-x-0 '>
        <div className='bg-white flex flex-wrap rounded-4xl justify-center gap-6 px-3 py-2'>
          <button
          onClick={() => setColor("red")}
          className='px-4 py-2 outline-none  text-black rounded-4xl'
          style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={() => setColor("blue")}
          className='px-4 py-2  rounded-4xl'
          style={{backgroundColor:"blue"}}>blue</button>
          <button
          onClick={() => setColor("green")}
          className='px-4 py-2  text-black rounded-4xl'
          style={{backgroundColor:"green"}}>green</button>
          <button
          onClick={() => setColor("white")}
          className='px-4 py-2  text-black rounded-4xl  shadow-2xl'
          style={{backgroundColor:"white"}}>white</button>
          <button
          onClick={() => setColor("pink")}
          className='px-4 py-2  text-black rounded-4xl'
          style={{backgroundColor:"pink"}}>pink</button>
          <button
          onClick={() => setColor("yellow")}
          className='px-4 py-2  text-black rounded-4xl'
          style={{backgroundColor:"yellow"}}>yellow</button>
          <button
          onClick={() => setColor("skyblue")}
          className='px-4 py-2  text-black rounded-4xl'
          style={{backgroundColor:"skyblue"}}>skyblue</button>
          <button
          onClick={() => setColor("black")}
          className='px-4 py-2   rounded-4xl'
          style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
