import React, { useCallback, useState , useMemo} from "react";

// Komponenta ProductList prikazuje listu proizvoda
// React.memo → sprečava ponovno renderovanje ako se props (products) nisu promenili
const ProductList = React.memo(({ products }) => {
    console.log("ProductList render");

    return (
        <div>
            <ul>
                {/* prolazimo kroz listu proizvoda i prikazujemo svaki */}
                {products.map((p) => (
                    <li key={p.id}>
                        {p.name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

function FilterProducts() {
    // useMemo → kreira niz proizvoda samo jednom, ne na svakom renderu
    const products = useMemo(() => [
        { id: 1, name: "jabuka", category: "voce" },
        { id: 2, name: "laptop", category: "tehnologija" },
        { id: 3, name: "majca", category: "odeca" },
    ], []);

    // useState → čuvamo trenutno filtrirane proizvode
    const [filter, setFilter] = useState(products);

    // useCallback → kreira istu funkciju sve dok se products ne promene
    // Sprečava bespotrebno re-renderovanje ProductList komponente
    const filterByCategory = useCallback((category) => {
        // Ako je izabrano "All", vrati sve proizvode
        // Inače filtriraj po kategoriji
        setFilter(
            category === "All"
                ? products
                : products.filter((p) => p.category === category.toLowerCase())
        );
    }, [products]);

    return (
        <div>
            {/* Dugmad koja menjaju filter kategoriju */}
            <button onClick={() => filterByCategory("All")}>All</button>
            <button onClick={() => filterByCategory("Voce")}>Voce</button>
            <button onClick={() => filterByCategory("tehnologija")}>tehnologija</button>
            <button onClick={() => filterByCategory("odeca")}>odeca</button>

            {/* Prikazujemo filtriranu listu proizvoda */}
            <ProductList products={filter} />
        </div>
    );
}

export default FilterProducts;







// // React.memo → sprečava ponovno renderovanje Button komponente
// // osim ako se promeni props (ovde: onClick)
// const Button = React.memo(({ onClick }) => {
//     console.log("button rendered"); // vidi se kad se dugme ponovo crta

//     return <button onClick={onClick}>Click</button>;
// });

// function Parent() {
//     console.log("parent rendered"); // prikazuje se svaki put kada Parent renderuje

//     const [count, setCount] = useState(0); // state brojanja

//     // useCallback → funkcija ostaje ista između rendera
//     // Ne kreira se nova funkcija pri svakom renderu
//     const handelClick = useCallback(() => {
//         console.log("klik");
//     }, []);

//     return (
//         <div>
//             {/* prikazuje trenutni count */}
//             <p>count: {count}</p>

//             {/* povećava count → uzrokuje render Parent-a */}
//             <button onClick={() => setCount(count + 1)}>increment</button>

//             {/* Button se ne renderuje ponovo jer je onClick ista funkcija (zahvaljujući useCallback) */}
//             <Button onClick={handelClick} />
//         </div>
//     );
// }

// export default Parent;
