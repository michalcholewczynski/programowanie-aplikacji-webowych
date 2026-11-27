import { useEffect, useState } from 'react'

function App() {
  const [rowery, setRowery] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function wczytaj() {
      try {
        const odpowiedz = await fetch('/rowery.json')
        if (!odpowiedz.ok) {
          throw new Error(`Błąd serwera: ${odpowiedz.status}`)
        }
        const dane = await odpowiedz.json()
        setRowery(dane)
      } catch (e) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    }

    wczytaj()
  }, [])

  return (
    <div className="container mt-4">
      <h1>Wypożyczalnia rowerów</h1>
    </div>
  )
}

export default App
