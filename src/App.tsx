import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Privacy from './pages/Privacy'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
