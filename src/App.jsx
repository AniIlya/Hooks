
import "./App.css"
import {useState, useEffect} from "react"
// function App() {
//   const [color,setColor]=useState("red")
//   return (
//     <div>
//     <h1>My favorite color is {color}!</h1>
//     <button className="p-[2%] bg-slate-500 text-[#ffffff]" onClick={()=>setColor("blue")}>Blue</button>
//     </div>
//   );
// }

function App() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
setCount((count)=>count+1)
    },1000)
  },[])

  return (
    <div>
    <h1>I've rendered {count} times!</h1>
   
    </div>
  );
}
export default App;
