// Uvozimo potrebne komponente iz biblioteke react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Uvozimo naše komponente koje predstavljaju različite stranice aplikacije
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

// Glavna komponenta aplikacije
function App() {
  return (
    // BrowserRouter omogućava da koristimo rute (navigaciju) u aplikaciji
    <BrowserRouter>

      {/* Glavni kontejner aplikacije */}
      <div>

        {/* Navigacioni meni sa linkovima */}
        <nav>
          {/* Link ka početnoj stranici (path "/") */}
          <Link to="/"> Pocetna</Link>

          {/* Link ka About stranici (path "/about") */}
          <Link to="/about"> About</Link>

          {/* Link ka Contact stranici (path "/contact") */}
          <Link to="/contact"> Kontakt</Link>
        </nav>

        {/* Routes sadrži sve definisane rute aplikacije */}
        <Routes>

          {/* Kada je URL "/" – prikazuje se Home komponenta */}
          <Route path="/" element={<Home />} />

          {/* Kada je URL "/about" – prikazuje se About komponenta */}
          <Route path="/about" element={<About />} />

          {/* Kada je URL "/contact" – prikazuje se Contact komponenta */}
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>

    {/* Zatvaramo BrowserRouter */}
    </BrowserRouter>
  );
}

// Izvozimo App komponentu da bi mogla da se koristi u drugim fajlovima
export default App;
