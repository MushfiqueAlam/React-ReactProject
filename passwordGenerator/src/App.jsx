import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");
  const passref=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="`!/|,@#$%^&*{[}]?";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
       pass+=str.charAt(char);
       setPassword(pass);
    }
  },[length,numberAllowed,charAllowed,setPassword])
  const copyPassword=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
     <h1 className="text-3xl font-bold underline text-center ">
      Password
    </h1>
    <div className='w-full shadow-md mx-auto max-w-md rounded-lg px-4 py-3 my-8 text-orange-50 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        value={password}
        className='outline-none w-full py-1 px-4 text-black'
        placeholder='password'
        type="text"
        readOnly
        ref={passref}
        />
        <button className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0'
        onClick={copyPassword}
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Label:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor="characterInput">SpecialCharacter</label>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
