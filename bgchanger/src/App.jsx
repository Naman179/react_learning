import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
    <div  className='h-screen w-screen flex items-center justify-center' style={{backgroundColor:color}}>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-white mb-4'>Background Color Changer</h1>
        <div className='flex gap-4 justify-center'>
          <button onClick={()=>setColor("Olive")} className='px-4 py-2  text-white rounded' style={{backgroundColor: "Olive"}}>Olive</button>
          <button onClick={()=>setColor("Teal")} className='px-4 py-2  text-white rounded' style={{backgroundColor: "Teal"}}>Teal</button>
          <button onClick={()=>setColor("Maroon")} className='px-4 py-2  text-white rounded' style={{backgroundColor: "Maroon"}}>Maroon</button>
          <button onClick={()=>setColor("Navy")} className='px-4 py-2  text-white rounded' style={{backgroundColor: "Navy"}}>Navy</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
