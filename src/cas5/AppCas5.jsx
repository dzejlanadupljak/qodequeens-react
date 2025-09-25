import { useState } from "react";
import UserList from "./UserList"

 function App(){
const user =[{name:"almasa" ,age:20 },
    {name:"berina", age:15},
    {name:"ajsa", age: 18}]
return(
 <UserList users={user}/>
)
 }

export default App

// function Status(){
// const [status, setStatus]= useState("Offline")

// return(
//     <div>
       
//         <button onClick={()=> setStatus(status === "Online" ? "Offline" : "Online")}style={{backgroundColor:status=== "Online" ? "green" : "red"}}>{status}</button>
//     </div>
// )



// const [count, setCount]= useState (0)
//     return(
//         <div>
//             <button onClick={()=>setCount(count+1)}>povecaj</button>
//             <p>{count}</p>
//             <button onClick={()=>setCount(count-1)}>smanji</button>
//         </div>
//     )

