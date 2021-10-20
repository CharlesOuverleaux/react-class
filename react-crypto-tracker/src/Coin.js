import './Coin.css';

function Coin(props) {
  const coin = props.coin;
  const priceChange = coin.price_change_percentage_24h;

  return(
    <tr className="coin-row">
      <td> <img alt={coin.id} src={coin.image} /> </td>
      <td className='coin-name'>{coin.name}</td>
      <td className='coin-symbol'>{coin.symbol.toUpperCase()}</td>
      <td>€{coin.current_price.toLocaleString()}</td>
      <td style={ {color: priceChange < 0 ? 'red' : 'green'}}>{priceChange.toFixed(2)}%</td>
      <td>€{coin.ath.toLocaleString()}</td>
      <td>€{coin.market_cap.toLocaleString()}</td>
      <td>€{coin.total_volume.toLocaleString()}</td>
    </tr>
  );
}

export default Coin;
