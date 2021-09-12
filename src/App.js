import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './style.css';
import Coin from './Coin';
import TopThree from './TopThree';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    })
    .catch(error => console.log(error));
   
  }, []);

  const handleChange = e =>{
    setSearch(e.target.value)
  }
  
 
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()));
    
  return (
    
    <div className="container text-center mt-5 ">
     <h1 className="mb-5">Coolest Crypto App Ever !</h1>

     <h4 className="pt-4 ">Top 3 Cryptocurrencies by 24h-Change</h4>
     <div className="px-5"><TopThree/></div> 

     <h4 className="pt-5 pb-3">Listed Top 100 Coins </h4>
     <input className="mb-4 mt-1 
     bg-light text-dark rounded  " 
     type="text" placeholder="Search coin" onChange={handleChange} />

     <div className='row '>
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Coin</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Price</th>
                <th scope="col">24h</th>
                <th scope="col">24h max</th>
                <th scope="col">24h min</th>
                <th scope="col">Mkt Cap</th>
              </tr>
            </thead>
            
            {filteredCoins.map(coin =>{ 
                  return <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  priceChange={coin.price_change_percentage_24h}
                  rank={coin.market_cap_rank}
                  marketCap={coin.market_cap}
                  min={coin.low_24h}
                  max={coin.high_24h}
                  />;
                })}

          </table>
        </div>

      
      
    </div>
  );
}


export default App;
