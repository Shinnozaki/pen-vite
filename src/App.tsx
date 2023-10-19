import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css'

import Home from './components/Home';
import Gift from './components/Gift';
import Hall from './components/Hall';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/gift" element={<Gift />} />
      </Routes>
    </>
  )
}

export default App
