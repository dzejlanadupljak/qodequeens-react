 import {useForm} from "react-hook-form"

 export default function Regisracija(){
    const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit=(data)=>{
    console.log("podaci iz forme", data)
    alert("uspesno popunjena forma")
}
return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>ime</label>
       <input {...register("ime",{required:"ime je obavezno"})} />
{errors.ime && <p style={{color:"red"}}>{errors.ime.message}</p>}

<label>sifra</label>
<input type="password" {...register("sifra",{required:"sifra je obavezna",
    minLength:{
        value:6,
        message:"mora da ima najmanje 6 karaktera"}})} />
        {errors.sifra && <p style={{color:"red"}}>{errors.sifra.message}</p>}

<label>email</label>
<input  {...register("email",{required:"email je obavezan",
    pattern:{
        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message:"email nije ispravan"
    }
    
})}/>
 {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}




<button type="submit">posalji</button>

    </form>
)


 }