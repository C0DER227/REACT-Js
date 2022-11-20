import React from "react";

const Coin=({ name, icon, price, symbol, availableSupply, totalSupply, rank, websiteUrl })=>{
  return (
    <div className="coin">
      <h4>Rank: {rank}</h4><hr /><br />
      <h1> Name: {name}</h1><br />
      <img src={icon} alt='icon-img'/><br /><br />
      <h3> Price: ₹{price}</h3>
      <h3> Symbol: {symbol}</h3>
      <h3> availableSupply: {availableSupply}</h3>
      <h3> totalSupply: {totalSupply}</h3><br />
      <h3 className="linkdec"> Wbsite: <a href="{websiteUrl}">{websiteUrl}</a></h3>
    </div>
  );
}

export default Coin;