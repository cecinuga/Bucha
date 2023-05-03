import './App.css'
import ArtistiPage from './components/ArtistiPage';
import HomePage from './components/HomePage'
import {
  Route, Routes,
} from "react-router-dom";
import OperaPage from './components/OperaPage';
import { useState } from 'react';

function App() {
  const isLoading = useState<boolean>(true)

  return (
    <Routes>
      <Route path="/" element={<HomePage isLoading={isLoading} />} />
      <Route path="/l-opera" element={<OperaPage />} />
      <Route path="/gli-artisti" element={<ArtistiPage />} />
    </Routes>
  )
}

export default App
