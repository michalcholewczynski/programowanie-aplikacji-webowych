import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import GaleriaPage from './pages/GaleriaPage.jsx'
import ZdjeciePage from './pages/ZdjeciePage.jsx'
import DodajPage from './pages/DodajPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GaleriaPage />} />
        <Route path="/zdjecie/:id" element={<ZdjeciePage />} />
        <Route path="/dodaj" element={<DodajPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
