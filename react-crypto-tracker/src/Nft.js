import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CONTRACTADDRESS = [
  // crypto punk
  '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
  // bored ape yacth club
  '0xaba7161a7fb69c88e16ed9f455ce62b791ee4d03',
  // Mutant Ape club
  '0x60E4d786628Fea6478F785A6d7e704777c86a7c6'
]

const CRYPTOPUNK = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB'

export default function Nft(){
  const [assets, setAssets] = useState([])
  const url = `https://api.opensea.io/api/v1/assets?asset_contract_address=${CRYPTOPUNK}&order_direction=desc`

  useEffect(() => {
    axios.get(url).then(res => {
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
