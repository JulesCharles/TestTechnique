import { Routes, Route } from 'react-router-dom'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Clients from './screens/Clients'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Clients />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </div>
  )
}

export default App
