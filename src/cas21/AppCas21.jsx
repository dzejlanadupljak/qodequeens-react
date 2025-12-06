import { useForm } from "react-hook-form"

// Komponenta koja prikazuje formu za registraciju
export default function Regisracija() {

    // useForm nam daje funkcije za rad sa formom:
    // register – povezivanje inputa sa formom
    // handleSubmit – šta se desi kad pošaljemo formu
    // errors – poruke o greškama za neispravan unos
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Funkcija koja se poziva kad je forma ispravno popunjena
    const onSubmit = (data) => {
        console.log("podaci iz forme", data)  // prikazuje podatke u konzoli
        alert("uspesno popunjena forma")      // obaveštenje korisniku
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* IME */}
            <label>ime</label>
            {/* register povezujemo input sa useForm i dodajemo validaciju */}
            <input {...register("ime", { required: "ime je obavezno" })} />
            {/* Ako postoji greška za ime, prikaži poruku */}
            {errors.ime && <p style={{ color: "red" }}>{errors.ime.message}</p>}

            {/* ŠIFRA */}
            <label>sifra</label>
            <input 
                type="password" 
                {...register("sifra", {
                    required: "sifra je obavezna",        // polje mora biti uneseno
                    minLength: {                          // minimalno 6 karaktera
                        value: 6,
                        message: "mora da ima najmanje 6 karaktera"
                    }
                })} 
            />
            {/* Poruka o grešci ako šifra nije dobra */}
            {errors.sifra && <p style={{ color: "red" }}>{errors.sifra.message}</p>}

            {/* EMAIL */}
            <label>email</label>
            <input 
                {...register("email", {
                    required: "email je obavezan",
                    pattern: {                               // pravilo za pravi email format
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "email nije ispravan"
                    }
                })} 
            />
            {/* Greška za email */}
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        </form>
    )
}
