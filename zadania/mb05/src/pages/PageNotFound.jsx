import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="container mt-4">
      <h1>Nie ma takiej strony</h1>
      <Link to="/">Wróć do galerii</Link>
    </div>
  )
}
