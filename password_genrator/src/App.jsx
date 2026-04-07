import { useState,useCallback,useEffect,useRef, use } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false)
  const [symbolallowed, setSymbolallowed] = useState(false)
  const [password, setPassword] = useState('')


  const passgen=useCallback(()=>{
    let pas=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberallowed){
      str+="0123456789"
    }
    if(symbolallowed){
      str+="!@#$%^&*()_+"
    }
    for(let i=0;i<length;i++){
      pas+=str[Math.floor(Math.random()*str.length)]
    }
    setPassword(pas)

  },[length,numberallowed,symbolallowed,setPassword])

  useEffect(()=>{
    passgen()
  },[length,numberallowed,symbolallowed,passgen])

   const passwordref=useRef()
const copy=useCallback(()=>{
  passwordref.current.select()
  window.navigator.clipboard.writeText(password)
})

  return (
    <>
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 bg-[#f0f0f0]'>
      <h1 className='text-3xl font-bold text-[#08060d]'>Password Generator</h1>
      <div className='flex items-center gap-3'>
        <label htmlFor="length" className='text-[#08060d]'>Length: {length}</label>
        <input type="range" id='length' min="1" max="50" value={length} onChange={(e)=>setLength(e.target.value)} className='w-48' />
      </div>
      <div className='flex items-center gap-3'>
        <label htmlFor="numberallowed" className='text-[#08060d]'>Include Numbers:</label>
        <input type="checkbox" id='numberallowed' checked={numberallowed} onChange={(e)=>setNumberallowed(e.target.checked)} />
      </div>
      <button onClick={copy}>Copy</button>
      <div className='flex items-center gap-3'>
        <label htmlFor="symbolallowed" className='text-[#08060d]'>Include Symbols:</label>
        <input type="checkbox" id='symbolallowed' checked={symbolallowed} onChange={(e)=>setSymbolallowed(e.target.checked)} />
      </div>
      <div className='flex items-center gap-3'>
        <label htmlFor="password" className='text-[#08060d]'>Generated Password:</label>
        <input type="text" id='password' ref={passwordref} value={password} readOnly className='border border-gray-300 rounded px-2 py-1 w-64' />
      </div>
    </div>
      
    </>
  )
}

export default App
