import { createContext,useContext,useState } from "react";

export const Language=createContext()

function App(){

    const [lang,setLang]=useState("sr")
    const [page,setPage]=useState("home")

    return(
        <Language.Provider value={{lang,setLang}}>
            <div>
                <button onClick={()=>setPage("home")}>home</button>
                <button onClick={()=>setPage("about")}>about</button>
                <button onClick={()=>setPage("contact")}>contact</button>
                <hr />
<button onClick={()=>setLang(lang==="sr"?"en":"sr")}>
    {lang=== "sr"?"promeni  u eng":"switch to sr"}
</button>
<hr />

{page==="home" && <Home/>}
{page==="about" && <About/>}
{page==="contact" && <Contact/>}
   </div>
        </Language.Provider>
    )
}

function Home(){
const {lang}=useContext(Language)
const tekst={ sr:{
        naslov:"naslov na srpskom",
        opis:"opis na srpskom"
    },
en:{
    naslov:"title ",
    opis:"description"
},}
return(
    <div>
        <h1>{tekst[lang].naslov}</h1>
        <p>{tekst[lang].opis}</p>
    </div>
)



}
function About(){
    const {lang}=useContext(Language)
    const tekst={ sr:{
            naslov:"o nama",
            opis:"ovo je stranica o nama"
        },
    en:{
        naslov:"about ",
        opis:"description"
    },}
    return(
        <div>
            <h1>{tekst[lang].naslov}</h1>
            <p>{tekst[lang].opis}</p>
        </div>
    )
    
    
    
    }

    function Contact(){
        const {lang}=useContext(Language)
        const tekst={ sr:{
                naslov:"kontakt",
                opis:"ovo je stranica o nama"
            },
        en:{
            naslov:"contact ",
            opis:"description"
        },}
        return(
            <div>
                <h1>{tekst[lang].naslov}</h1>
                <p>{tekst[lang].opis}</p>
            </div>
        )
        
        
        
        }
    




export default App