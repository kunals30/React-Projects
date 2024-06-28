import { useState } from "react"


function App() {
  const [color, SetColor] = useState("black");
  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button className = "outline-none px-4 py-2 text-white rounded-lg" 
          style={{backgroundColor:"red"}} 
          onClick={()=> SetColor("red")}
          >Red</button>
          <button className = "outline-none px-4 py-2 text-white rounded-lg" 
          style={{backgroundColor:"green"}}
          onClick={()=> SetColor("green")} 
          >Green</button>
          <button className = "outline-none px-4 py-2 text-white rounded-lg" 
          style={{backgroundColor:"blue"}} 
          onClick={()=> SetColor("blue")}
          >Blue</button>
          <button className = "outline-none px-4 py-2 text-white rounded-lg" 
          style={{backgroundColor:"brown"}}
          onClick={()=> SetColor("brown")}
          >Brown</button>
          <button className = "outline-none px-4 py-2 text-white rounded-lg" 
          style={{backgroundColor:"magenta"}}
          onClick={()=> SetColor("magenta")}
          >Magenta</button>
          <button className = "outline-none px-4 py-2 text-white rounded-lg" 
          style={{backgroundColor:"Olive"}} 
          onClick={()=> SetColor("olive")}
          >Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
