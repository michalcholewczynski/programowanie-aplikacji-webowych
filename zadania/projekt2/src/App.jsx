import { useState } from 'react'
import { przepisyStartowe } from './przepisy.js'

function App() {
  const [przepisy, setPrzepisy] = useState(przepisyStartowe)
  const [rosnaco, setRosnaco] = useState(true)

  const posortowane = [...przepisy].sort((a, b) =>
    rosnaco ? a.czas - b.czas : b.czas - a.czas
  )

  return (
    <div className="container mt-4">
      <h1>Książka przepisów</h1>

      <button
        type="button"
        className="btn btn-outline-primary mb-3"
        onClick={() => setRosnaco(!rosnaco)}
      >
        Czas: {rosnaco ? 'rosnąco' : 'malejąco'}
      </button>

      <div className="row g-3 mb-4">
        {posortowane.map(przepis => (
          <div key={przepis.id} className="col-12 col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">{przepis.nazwa}</h3>
                <span className="badge text-bg-secondary mb-2">{przepis.kategoria}</span>
                <p className="text-body-secondary mb-0">
                  Czas przygotowania: {przepis.czas} min
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
