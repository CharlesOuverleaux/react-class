import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CoinDashboard from './components/CoinDashboard';
import Nft from './components/Nft';
import Home from './components/Home';
import FormListing from './components/FormListing';

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coins-dashboard" element={<CoinDashboard />} />
        <Route path="nfts" element={<Nft />} />
        <Route path="nfts/list" element={<FormListing />} />
      </Routes>
    </div>
  )
}

export default App;
