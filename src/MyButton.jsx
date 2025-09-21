function MyButton(){
    function Poruka(){
        console.log("kliknuto")
    }
    return(
        <button onClick={Poruka}>klikni</button>
    )
}
export default MyButton