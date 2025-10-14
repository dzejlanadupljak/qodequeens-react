import { useEffect, useState } from "react";

function Zadatak1(){
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [total, setTotal]= useState("")

    useEffect(()=>{
        setTotal(quantity*price)
    },[quantity,price])

    return(
        <div>
            <input type="number" placeholder="UNESITE KOLICINU" onChange={(e)=> setQuantity(Number(e.target.value))}/>
            <input type="number" placeholder="UNESITE CIJENU  PO KOMADU" onChange={(e)=> setPrice(Number(e.target.value))}/>
<h2>{total}</h2>
        </div>
    )
}
export default Zadatak1
