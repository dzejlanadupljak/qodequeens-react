// Komponenta ShoppingCard prima niz proizvoda kao props
function ShoppingCard({ products }) {

    // Ako nema proizvoda, ispisuje da je korpa prazna
    if (products.length === 0) return <p>korpa je prazna</p>;
  
    // reduce sabira sve cene proizvoda
    // acc = akumulator (zbir do sad), product = trenutni proizvod iz niza
    // 0 je početna vrednost
    const total = products.reduce((acc, product) => acc + product.price, 0);
  
    return (
      <div>
        <h1>Vaša korpa</h1>
  
        {/* Prikazuje listu proizvoda iz korpe */}
        <ul>
          {products.map((product) =>
            // key je jedinstveni identifikator koji React koristi da zna koji je element u listi
            // pomaže React-u da brže i ispravno ažurira listu
            <li key={product.id}>
              {product.name} - {product.price} rsd
            </li>
          )}
        </ul>
  
        {/* Prikazuje ukupnu cenu */}
        <p>Total: {total}</p>
  
        {/* Ako je ukupna cena 400 ili više, dodaje poruku o besplatnoj poštarini */}
        {total >= 400 && <p>besplatna poštarina</p>}
      </div>
    );
  }
  
  export default ShoppingCard;
  