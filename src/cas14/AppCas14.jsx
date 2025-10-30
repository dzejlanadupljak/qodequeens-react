// Uvozimo React hook-ove useEffect i useState iz React biblioteke
import { useEffect, useState } from "react";

function SimpleTimer() {
  // Definišemo dva state-a:
  // 1️⃣ seconds - čuva broj sekundi koji odbrojava tajmer
  // 2️⃣ isRunning - pokazuje da li tajmer trenutno radi (true/false)
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect se pokreće svaki put kada se promeni vrednost promenljive 'isRunning'
  useEffect(() => {
    let intervalId; // ovde ćemo sačuvati ID intervala

    if (isRunning) {
      console.log("start");
      // Ako je tajmer pokrenut, svakih 1000 ms (1 sekunda) povećavamo broj sekundi
      intervalId = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }

    // Cleanup funkcija koja se poziva kada se:
    // - komponenta ukloni sa ekrana
    // - ili kada se isRunning promeni
    return () => {
      console.log("stop");
      clearInterval(intervalId); // zaustavlja prethodni interval da ne bi ostao aktivan
    };
  }, [isRunning]); // useEffect reaguje samo kada se promeni isRunning

  // JSX koji prikazuje trenutne sekunde i tri dugmeta:
  // Start → pokreće tajmer
  // Stop → zaustavlja tajmer
  // Reset → vraća sekunde na 0
  return (
    <div>
      <h1>Timer: {seconds}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

// Izvozimo komponentu kako bi mogla da se koristi u drugim fajlovima
export default SimpleTimer;
