import React from "react";                       // Uvozimo React da možemo da koristimo JSX i pravimo komponente
import { BrowserRouter,                          // BrowserRouter obezbeđuje sistem rutiranja u browseru
         Routes,                                 // Routes je kontejner koji sadrži sve Route definicije
         Route,                                  // Route je jedna ruta (putanja + komponenta)
         Navigate,                               // Navigate omogućava automatsko preusmeravanje na drugu putanju
         Link,                                   // Link pravi navigacione linkove bez refresh-a stranice
         Outlet } from "react-router-dom";       // Outlet prikazuje child rute unutar parent rute

// ------------------------- HOME KOMPONENTA ------------------------- //
const Home = () => {                             // Definišemo komponentu Home
    return (
        <div>                                    // Omotni div cele Home stranice
            <p>Pocetna strana</p>                // Tekst na ekranu

            <Link to="/about"> O nama</Link>     // Link koji vodi na rutu /about
            <Link to="/contact"> Kontakt</Link>  // Link koji vodi na rutu /contact
            <Link to="/dashboard"> Dashboard</Link> // Link koji vodi na zaštićenu rutu /dashboard

            <hr />                               // Vizuelna linija razdvajanja

            <Outlet/>                            // Na ovo mesto se ubacuju child-rute Home komponente
        </div>
    );
};

// ------------------------- OSTALE STRANICE ------------------------- //
const About = () => <p>O nama</p>;               // Jednostavna komponenta (prikazuje tekst O nama)
const Contact = () => <p>Kontakt</p>;            // Jednostavna komponenta (prikazuje tekst Kontakt)

// ------------------------- PROTECTED ROUTA ------------------------- //
const ProtectedRoute = () => {                   // Komponenta koja štiti određene rute
    const isAuthentic = localStorage.getItem(    // Čita iz localStorage da li je korisnik ulogovan
        "isAuthentic"
    );

    return (
        isAuthentic                               // Ako postoji isAuthentic u localStorage
        ? <Outlet/>                               // onda prikaži sadržaj zaštićene rute (Outlet)
        : <p>nema pristup</p>                     // ako nije ulogovan – ispiši poruku "nema pristup"
    );
};

const Dashboard = () => <p>dashboard (zasticeno)</p>; // Komponenta koja je zaštićena

// ------------------------- APP KOMPONENTA ------------------------- //
export default function App() {                  // Glavna komponenta aplikacije
    return (
        <BrowserRouter>                          // Omotač za celu aplikaciju – omogućava rad ruta
            <Routes>                             // Blok u kojem definišemo sve rute

                {/* ----------------- PARENT RUTA (HOME) ----------------- */}
                <Route path="/" element={<Home/>}> // Kada smo na "/" prikazuje Home komponentu

                    {/* ---- CHILD RUTE HOME KOMPONENTE ---- */}
                    <Route path="/about" element={<About/>}/>    // Prikazuje About unutar Home (kroz Outlet)
                    <Route path="/contact" element={<Contact/>}/> // Prikazuje Contact unutar Home

                </Route>                          // Zatvaramo parent Home rutu

                {/* ----------------- ZAŠTIĆENE RUTE ----------------- */}
                <Route element={<ProtectedRoute/>}> // Sve rute unutra su zaštićene

                    <Route path="/dashboard"        // Ako je isAuthentic = true, prikaži Dashboard
                        element={<Dashboard/>}
                    />

                </Route>                           // Zatvaramo ProtectedRoute omotač

            </Routes>                               // Zatvaramo sve definisane rute
        </BrowserRouter>                            // Zatvaramo BrowserRouter
    );
}
