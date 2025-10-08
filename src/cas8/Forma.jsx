import { useState } from "react";

const Form=()=>{
    const [user,setUser]=useState({
        name:"",
        surname:"",
        email:""
    })

 const changeInputValue=(e)=>{
    setUser((prevValue)=>({
        ...prevValue,
        [e.target.name]: e.target.value,
    })
    )
 }
 return(
    <div>
        <label htmlFor="name">Ime</label>
        <input type="text"
        name="name"
        id="name"
        onChange={changeInputValue}
        value={user.name} />
    </div>
 )
}
export default Form



