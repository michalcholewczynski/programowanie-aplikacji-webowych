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
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
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
