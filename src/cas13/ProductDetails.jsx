// Uvozimo useParams iz react-router-dom
// useParams omogućava da iz URL-a "uhvatimo" parametre (npr. /products/:id)
import { useParams } from "react-router-dom";

function ProductDetails() {

  // Izvlačimo parametar "id" iz URL-a pomoću useParams
  // Ako korisnik ode na /products/2 → id = "2"
  const { id } = useParams();

  // Lista proizvoda — ista kao i u Product.js, ali sa dodatnim detaljima
  const products = [
    { id: 11, name: "lptp", price: 220, description: "fassdadada" },
    { id: 2, name: "mis", price: 123, description: "sdad" },
    { id: 3, name: "slusalice", price: 1113, description: "ssdadad", color: "pink" }
  ];

  // Pronalazimo proizvod koji ima isti id kao onaj u URL-u
  // parseInt() koristimo da pretvorimo id iz stringa u broj (jer useParams vraća string)
  const product = products.find((p) => p.id === parseInt(id));

  // Ako proizvod nije pronađen (npr. /products/10 ne postoji)
  // prikazujemo poruku o grešci
  if (!product) {
    return <h1>product is not found</h1>;
  }

  // Ako je proizvod pronađen, prikazujemo njegove detalje
  return (
    <div style={{ color: "red", padding: "20px", width: "150px" }}>
      <h1>{product.name}</h1>
      <p>price: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

// Izvozimo komponentu da bi mogla da se koristi u App.js
export default ProductDetails;
