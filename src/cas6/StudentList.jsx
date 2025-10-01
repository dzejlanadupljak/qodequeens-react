// Uvozimo App komponentu iz fajla AppCas6 (može da se koristi u ovom fajlu)
import App from './AppCas6'

// Komponenta StudentList prima niz studenata kao props
function StudentList({ student }) {
  return (
    <ul>
      {/* map prolazi kroz niz student i za svaki element pravi <li> */}
      {student.map((name, index) =>
        // key = jedinstveni identifikator za svaki <li>
        // ovde koristimo index jer nemamo id (nije idealno, ali radi)
        <li key={index}>
          {name}
        </li>
      )}
    </ul>
  )
}

export default StudentList
