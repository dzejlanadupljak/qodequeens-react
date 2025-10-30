// Uvozimo Link komponentu iz React Router-a
// Link služi za navigaciju između stranica bez ponovnog učitavanja stranice
import { Link } from "react-router-dom";

function Product() {
  // Kreiramo niz proizvoda — svaki ima svoj id i ime
  const products = [
    { id: 11, name: "lptp" },
    { id: 2, name: "mis" },
    { id: 3, name: "slusalice" }
  ];

  return (
    <div>
      <ul>
        {/* .map prolazi kroz svaki proizvod iz niza products */}
        {products.map((p) => (
          // Svakom <li> dajemo jedinstveni "key" (React to zahteva)
          <li key={p.id}>
            {/* Link vodi na stranicu sa detaljima za taj proizvod 
                (npr. /products/11, /products/2, /products/3) */}
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Izvozimo komponentu da bi mogla da se koristi u App.js
export default Product;
