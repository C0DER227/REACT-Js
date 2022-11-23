
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/App.css";
import "./styles/Navbar.css"
import "./styles/Footer.css"


function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");


  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?currency=INR?limit=20").then(
      (res) => {
        setListOfCoins(res.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
       <Navbar />
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Search Coins..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              rank={coin.rank}
              name={coin.name}
              icon={coin.icon}
              price={coin.price.toFixed(2)}
              symbol={coin.symbol}
              availableSupply={coin.availableSupply}
              totalSupply={coin.totalSupply}
              websiteUrl={coin.websiteUrl}
            />
          );
        })}
      </div>
    <Footer />
    </div>
  );
}

export default App;