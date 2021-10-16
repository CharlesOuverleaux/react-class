import './App.css';

function Coin(props) {
  const coin = props.coin;
  return(
    <div className="coin-row">
      <img alt={coin.id} src={coin.image} />
      <p>{coin.name}</p>
      <p>{coin.symbol.toUpperCase()}</p>
      <p>€{coin.current_price.toLocaleString()}</p>
      <p>{coin.price_change_percentage_24h}%</p>
      <p>€{coin.ath.toLocaleString()}</p>
      <p>€{coin.market_cap.toLocaleString()}</p>
      <p>€{coin.total_volume.toLocaleString()}</p>
    </div>
  );
}

export default Coin;
