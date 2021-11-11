import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CoinDashboard from './CoinDashboard';
import Nft from './Nft';
import Home from './Home';

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coins-dashboard" element={<CoinDashboard />} />
        <Route path="nfts" element={<Nft />} />
      </Routes>
    </div>
  )
}

export default App;
