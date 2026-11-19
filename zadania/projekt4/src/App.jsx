import { Routes, Route, Link } from 'react-router-dom'
import { wydarzenia } from './wydarzenia.js'

function ListaWydarzenPage() {
    return (
      <div className="container mt-4">
        <h1>Wydarzenia i koncerty</h1>

        <div className="row g-3">
          {
            wydarzenia.map(wydarzenie => (
              <div key={wydarzenie.id} className="col-12 col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title h5">
                      {wydarzenie.nazwa}
                    </h3>
                    <p className="text-body-secondary mb-2">
                      {wydarzenie.miasto} - {wydarzenie.data}
                    </p>
                    <Link to={`/wydarzenie/${wydarzenie.id}`} className="btn btn-outline-primary btm-sm">
                      Szczegóły
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
}

function ListaWydarzenPage() {
  return (
    <div className="container mt-4">Szczegóły wydarzenia (do zrobienia)</div>
  )
}

export default function App() {
  return (
    <>
      <div className="container mt-4">
        <h1>Wydarzenia i koncerty</h1>
      </div>
    </>
  )
}
