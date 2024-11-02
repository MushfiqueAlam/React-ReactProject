import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
          <div className='flex flex-wrap gap-3 justify-center
          bg-white shadow-lg px-3 py2 roundes-3xl'>
            <button onClick={()=>setColor("red")}
            className='rounded-full outline-none px-4 py-1 text-white shadow-lg'
            style={{backgroundColor:"red"
            }}
            >red</button>
            <button onClick={()=>setColor("yellow")}
            className='rounded-full outline-none px-4 py-1 shadow-lg'
            style={{backgroundColor:"yellow"}}
            >yellow</button>
            <button onClick={()=>setColor("white")}
            className='rounded-full outline-none px-4 py-1   shadow-lg'
            style={{backgroundColor:"white"}}
            >white</button>
            <button onClick={()=>setColor("grey")}
            className='rounded-full outline-none px-4 py-1 text-white  shadow-lg'
            style={{backgroundColor:"grey"}}
            >grey</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
