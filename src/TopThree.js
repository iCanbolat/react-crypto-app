import React, {useState,useEffect} from 'react';
import Tilt from 'react-vanilla-tilt';
import axios from 'axios';

const TopThree = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data);
        })
        .catch(error => console.log(error));
       
      }, []);

      const top  = coins.sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 3);

    return (
        <div className="row py-3 px-5  ">
          {top.map(coin => {
            return <div className="col-md-4 text-center"  >
            <Tilt className="tilt"  options={{ scale: 2  }}> <div className="card">
            <div className="pt-3"><img src={coin.image} style={{width:'10vh'}} class="card-img-top" alt="..."></img></div>     
              <div className="card-body text-center">
              <h4>{coin.name}</h4>
 
               <div ><h5>${coin.current_price.toFixed(2)}</h5>
               <span className="text-success">({coin.price_change_percentage_24h.toFixed(2)}%)</span></div>      
                  
              </div></div>
            </Tilt>
  
          </div>})}
        
      </div>
    )
}

export default TopThree

