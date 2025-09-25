import { useState } from "react";

function UserList({users}){
const [usersState, setUserState]= useState(users)

return(
<div>

    {usersState.length === 0 ? "NEMA KORISNIKA " : (
        <ul>
            {users.map((user,index)=> ( 
          <li key={index}>
    {user.name} - {user.age >= 18 ? "punoletan" : "maloletan"}   
            </li> 
)) }
        </ul>
    )}
    <button onClick={()=> setUserState ([])}>obrisi</button>
</div>
)
}
export default UserList
