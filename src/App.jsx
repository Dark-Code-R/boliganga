import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DonacionesPage from './pages/DonacionesPage'; 
import NormativaPage from './pages/NormativaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donaciones" element={<DonacionesPage />} /> 
        <Route path="/normativa" element={<NormativaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
