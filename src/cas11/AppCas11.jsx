import { useState } from "react";

function App(){
 const [search,setSearch]=useState("")
 
 const products=[{id:1,name:"mis"},
    {id:2,name:"telefon"},
    {id:3,name:"televizor"},
    {id:4,name:"laptop"}
 ]
 const filteredProducts=products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()))

 return(
    <div>
        <h2>pretrazi</h2>
<input type="text"
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="pretrazi"/>
<ul>
{filteredProducts.map((products)=>( 
    <li>{products.name}</li>
))}
</ul>

    </div>
 )
}

export default App