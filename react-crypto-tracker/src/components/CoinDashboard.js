import './CoinDashboard.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coin from './Coin';

export default function CoinDashboard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
    }).catch(err => console.log(err))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Crypto-Tracker</h1>
      <div>
        <h2>Search a crypto</h2>
        <form>
          <label>
            <input type="text" placeholder="Search" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h change</th>
            <th>ATH</th>
            <th>Market cap</th>
            <th>Total volume</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <Coin key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
