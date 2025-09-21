function Student({name, godine, isStudent}){
    return(
<div>
<p>Ime: {name}</p>
<h2>Godine:{godine}</h2>
<p>{isStudent ? "ucenik" : "nije ucenik"}</p>
</div>
    )
}
export default Student