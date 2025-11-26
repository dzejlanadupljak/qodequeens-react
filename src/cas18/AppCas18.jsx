import{useState, useCallback} from "react"
const ThemeButton =React.memo (({promeniTemu})=>{
    console.log("ThemeButton render")
    return(
        <button onClick={promeniTemu}>Promeni temu</button>
    )

}
)
export default function App(){
    const[tema, setTema]=useState("light");
    const promeniTemu=useCallback(()=>
    {
        setTema(prev=>(prev==="light" ? "dark " : "light"));
    } ,[] ) ;
    return(
        <div style={{backgroundColor:tema ==="light"? "#fff": "#333",
            color:tema==="light" ? "#000" : "#fff",
            minHeight :"100vh",
            padding : "20px"
        }
}>
    <h1>Trenutna tema:{tema}</h1>
    
        <ThemeButton promeniTemu ={promeniTemu}/>
    
    </div> )};



