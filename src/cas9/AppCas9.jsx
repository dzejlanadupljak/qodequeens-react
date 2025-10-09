import { useEffect, useState } from "react"; // Uvozimo React hook-ove: useState i useEffect
import Pozdrav from "./Pozdrav"; // Uvozimo komponentu Pozdrav

function App() {
  // Definišemo stanje za broj i boju
  const [count, setCount] = useState(0); // count počinje od 0
  const [color, setColor] = useState("green"); // color počinje kao "green"

  // useEffect koji se pokreće svaki put kada se promeni 'color'
  useEffect(() => {
    console.log("prvi useEffect"); // Ispis u konzolu kada se promeni color
  }, [color]); // zavisnost: color

  // useEffect koji se pokreće kada se promeni 'count' ili 'color'
  useEffect(() => {
    console.log("drugi useEffect"); // Ispis u konzolu kada se promeni count ili color
  }, [count, color]); // zavisnosti: count i color

  // useEffect bez niza zavisnosti - pokreće se svaki put kada se komponenta renderuje
  useEffect(() => {
    console.log("treci useEffect"); // Ispis u konzolu pri svakom renderovanju
  });

  // Funkcija za promenu boje između green i red
  const changeColor = () => {
    setColor((prevValue) => (prevValue === "green" ? "red" : "green"));
  };

  return (
    <div>
      {/* Prikaz broja sa trenutnom bojom */}
      <p style={{ color: color }}>{count}</p>

      {/* Dugmad za povećanje i smanjenje broja */}
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>+</button>
      <button onClick={() => setCount((prevValue) => prevValue - 1)}>-</button>
      <br />

      {/* Dugme za promenu boje */}
      <button onClick={changeColor}>promeni boju</button>

      {/* Umetanje komponente Pozdrav */}
      <Pozdrav />
    </div>
  );
}

export default App; // Exportujemo komponentu App

// Prvi useEffect – reaguje samo na promenu color.

// Drugi useEffect – reaguje na promenu count i color.

// Treći useEffect – nema niz zavisnosti, pa se pokreće pri svakom renderovanju komponente.
