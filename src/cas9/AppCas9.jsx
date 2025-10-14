import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function App(){
  const[theme,setTheme]=useState("light")
  return(
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div 
      style={{
        backgroundColor: theme ==="light"?"#fff" : "#333",
        color:theme==="light"? "#000" : "#fff",
        height:"100vh",
        textAlign:"center"
      }}>

      </div>

    </ThemeContext.Provider>
  )
}