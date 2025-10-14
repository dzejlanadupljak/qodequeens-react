// Uvozimo potrebne React hook-ove i funkcije:
import { useState, createContext, useContext } from "react";

// 1️⃣ Kreiramo novi kontekst koji će čuvati informacije o jeziku.
// Ovo nam omogućava da delimo podatke (language, setLanguage)
// kroz više komponenti BEZ prosleđivanja kroz props.
const LanguageContext = createContext();

// 2️⃣ Glavna komponenta aplikacije
function App() {

    // useState — čuva trenutno izabrani jezik.
    // Početna vrednost je "sr" (srpski).
    const [language, setLanguage] = useState("sr");

    return (
        // 3️⃣ Provider "pakuje" sve komponente kojima želimo da damo pristup
        // vrednostima iz LanguageContext-a.
        // value={{language, setLanguage}} znači da sve komponente unutar
        // Provider-a mogu da koriste i menjaju jezik.
        <LanguageContext.Provider value={{ language, setLanguage }}>

            {/* Glavni deo aplikacije sa stilovima */}
            <div
                style={{
                    backgroundColor: "pink",
                    color: "#000",
                    height: "600px",
                    textAlign: "center"
                }}
            >
                {/* Prikazuje trenutno izabrani jezik */}
                <h2>Jezik : {language}</h2>

                {/* Uključujemo dugme koje menja jezik */}
                <LanguageButton />

                {/* Prikaz pozdrava u zavisnosti od jezika */}
                <Greeting />

            </div>

        </LanguageContext.Provider>
    )
}

// 4️⃣ Komponenta koja prikazuje pozdrav
function Greeting() {

    // Pomoću useContext "vadimo" vrednost iz LanguageContext-a
    const { language } = useContext(LanguageContext);

    // Ako je jezik "sr" prikazuje "Zdravo", inače "Hello"
    return (
        <h2>{language === "sr" ? "Zdravo" : "Hello"}</h2>
    );
}

// 5️⃣ Komponenta koja ima dugme za promenu jezika
function LanguageButton() {

    // Pomoću useContext dobijamo i trenutni jezik i funkciju koja ga menja
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <button
            // Kada kliknemo dugme, menja se jezik.
            // Ako je trenutno "sr" → promeni na "en", i obrnuto.
            onClick={() => setLanguage(language === "sr" ? "en" : "sr")}
            style={{
                marginTop: "20px",
            }}
        >
            promeni jezik
        </button>
    );
}

// 6️⃣ Na kraju izvozimo glavnu komponentu da bi mogla da se koristi u projektu
export default App;
