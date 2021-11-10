import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Nft(){
  const [assets, setAssets] = useState([])

  useEffect(() => {
    axios.get('https://api.opensea.io/api/v1/assets?asset_contract_address=0xa342f5D851E866E18ff98F351f2c6637f4478dB5&order_direction=desc&offset=0&limit=20').then(res => {
      setAssets(res.data.assets)
    }).catch(err => console.log(err))
  }, []);
  console.log(assets)
  return(
    <div className='Nft'>
      <h1>NFT</h1>
      {assets.map(asset => <li>{asset.name}</li>)}
    </div>
  )
}
