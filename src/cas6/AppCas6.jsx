import ShoppingCard from "./ShoppingCard"
import StudentList from "./StudentList"

function App(){
    const products=[{id:1,name:"laptop",price:200},
        {id:2,name:"mis",price:150},
        {id:3,name:"tastatura",price:100}
    ]
    return(
 <ShoppingCard products={products}/>
    )
   
}
export default App