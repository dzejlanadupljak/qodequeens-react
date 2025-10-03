// Uvozimo useState hook iz React-a da bismo mogli da koristimo state
import { useState } from "react";

// Definišemo funkcionalnu komponentu MovieList
function MovieList(){

    // movies = lista filmova, setMovies = funkcija za ažuriranje liste
    // Početna vrednost je prazan niz []
    const [movies,setMovies]= useState([])

    // message = tekst poruke za greške ili obaveštenja
    // setMessage = funkcija za promenu poruke
    const [message,setMessage]=useState("")

    // inputvalue = vrednost koja se trenutno nalazi u input polju
    // setInputvalue = funkcija koja ažurira vrednost input polja
    const [inputvalue, setInputvalue]=useState("")

    // Funkcija koja se poziva kada se klikne na dugme "add movie"
    function addMovie(){
        // Uzimamo vrednost iz inputa i uklanjamo razmake sa početka i kraja
        const movie= inputvalue.trim()

        // Ako je polje prazno -> ispiši poruku
        if(!movie){
            setMessage("please enter a movie")
            return
        }

        // Ako film već postoji u listi -> ispiši poruku
        if(movies.includes(movie)){
            setMessage("This movie already exists!")

        }else{
            // Ako film ne postoji -> dodaj ga u listu
            // ...movies znači da uzimamo sve prethodne filmove
            // i dodajemo novi na kraj
            setMovies([...movies,movie])

            // Resetujemo poruku (prazan string)
            setMessage(" ")

            // Resetujemo input polje da bude prazno
            setInputvalue(" ")
        }
    }

    // Šta se renderuje u browseru
    return(
            <div>
                {/* Input polje za unos filma */}
                <input 
                    type="text" 
                    placeholder="movie name" 
                    value={inputvalue} 
                    onChange={(e=>setInputvalue(e.target.value))} // svaka promena u inputu menja state
                />

                {/* Prikaz poruke (ako postoji) */}
                <p>{message}</p>

                {/* Dugme koje poziva funkciju addMovie */}
                <button onClick={addMovie}>add movie</button>

                {/* Lista filmova */}
                <ul>
                    {movies.map((name,i)=>(
                        // Za svaki film u nizu movies pravimo <li>
                        // "key={i}" služi da React razlikuje elemente u listi
                        <li key={i}>{name}</li>
                    ))}
                </ul>
            </div>
        )
    
}

// Izvozimo komponentu da bi mogla da se koristi u drugim fajlovima
export default MovieList
