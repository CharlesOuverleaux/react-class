import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
    }).catch(err => console.log(err))
  }, []);
  return (
    <div className="App">
      <h1>Crypto-Tracker</h1>
        {coins.map(coin => <Coin key={coin.id}coin={coin}/>)}
    </div>
  );
}

export default App;
