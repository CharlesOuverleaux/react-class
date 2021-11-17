import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return(
    <div>
      <h1>NFTigers</h1>
      <nav>
        <Link to="/nfts">Top NFT's</Link>
        <Link to="/nfts/launches">Newest Collections</Link>
        <Link to="/nfts/list">List your project</Link>
        <Link to="/coins-dashboard">Crypto Dashboard</Link>
      </nav>
    </div>
  )
}
