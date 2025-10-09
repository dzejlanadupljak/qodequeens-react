import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Broj se promenio:", count);
  }, [count]); // ← reaguje samo na promene count-a

  return (
    <div>
      <p>Broj: {count}</p>
      <button onClick={() => setCount(count + 1)}>Povećaj</button>
    </div>
  );
}

export default Counter;
