import './App.css'
import ArtistiPage from './components/ArtistiPage';
import HomePage from './components/HomePage'
import {
  Route, Routes,
} from "react-router-dom";
import OperaPage from './components/OperaPage';
import CompraPage from './components/CompraPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/l-opera" element={<OperaPage />} />
      <Route path="/gli-artisti" element={<ArtistiPage />} />
      <Route path="/diventa-coproprietario" element={<CompraPage />} />
    </Routes>
  )
}

export default App
