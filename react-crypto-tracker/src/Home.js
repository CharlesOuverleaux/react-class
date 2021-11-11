import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return(
    <div>
      <h1>Welcome to NFT launcher</h1>
      <nav>
        <Link to="/nfts">NFT's</Link>
        <Link to="/coins-dashboard">Crypto Dashboard</Link>
      </nav>
    </div>
  )
}
