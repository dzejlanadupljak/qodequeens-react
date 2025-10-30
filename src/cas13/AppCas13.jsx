// Uvozimo potrebne delove iz React Router biblioteke
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// Uvozimo komponente koje ćemo koristiti kao stranice
import Product from "./Product";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    // BrowserRouter omogućava korišćenje ruta (navigacije) u React aplikaciji
    <BrowserRouter>

      {/* Navigacioni meni (linkovi ka stranicama) */}
      <nav>
        {/* Link radi kao <a> tag, ali ne osvežava stranicu — menja rutu unutar aplikacije */}
        <Link to="/products">Products</Link>
      </nav>

      {/* Routes sadrži sve definisane rute u aplikaciji */}
      <Routes>
        {/* Kada URL bude /products, prikazuje se komponenta Product */}
        <Route path="/products" element={<Product />} />

        {/* Kada URL ima oblik /products/1 (ili bilo koji ID),
            prikazuje se komponenta ProductDetails za taj proizvod */}
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

// Izvozimo App komponentu da bi mogla da se koristi kao glavni deo aplikacije
export default App;
