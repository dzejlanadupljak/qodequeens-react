import { useEffect, useState } from "react"; // Uvozimo hook-ove useState i useEffect

const Pozdrav = () => {
  // Definišemo stanje za ime i stanje za "posalji"
  const [ime, setIme] = useState(""); // ime počinje prazno
  const [posalji, setPosalji] = useState(false); // posalji počinje kao false

  // useEffect koji reaguje na promene 'ime' ili 'posalji'
  useEffect(() => {
    // Ako je dugme Posalji kliknuto i ime nije prazno
    if (posalji && ime !== "") {
      console.log(`Uneto ime ${ime}`); // Ispis unetog imena u konzolu
      setPosalji(false); // Resetujemo posalji na false da se efekat ne ponavlja
    }
  }, [ime, posalji]); // zavisnosti: ime i posalji

  return (
    <div>
      {/* Polje za unos imena */}
      <input
        type="text"
        value={ime} // vrednost polja je trenutno ime
        onChange={(e) => {
          setIme(e.target.value); // pri svakom kucanju ažuriramo ime
        }}
      />

      {/* Prikaz pozdrava */}
      <p>Zdravo {ime}</p>

      {/* Dugme koje aktivira slanje */}
      <button onClick={() => setPosalji(true)}>Posalji</button>
    </div>
  );
};

export default Pozdrav; // Exportujemo komponentu Pozdrav
