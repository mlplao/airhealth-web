import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Privacy from './pages/Privacy'
import Home from './pages/Home'
import Terms from './pages/Terms'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
